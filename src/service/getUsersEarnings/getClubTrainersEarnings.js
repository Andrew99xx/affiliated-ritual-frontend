import { findMonthlyEarningsForUser } from "../findMonthlyEarningsForUser";
import { getClubTrainers } from "../getUsers/getClubTrainers";

export const getClubTrainersEarnings = async () => {
    try {
      const clubTrainers = await getClubTrainers();

      // returns array
      const clubTrainersEarnings = await Promise.all(
        clubTrainers.map(async (trainer) => {

          // getting object, 
          const monthlyEarnings = await findMonthlyEarningsForUser(trainer.id);

          // each single elements is object
          // we are not iterating montlyEarnings, 
          return { ...trainer, monthlyEarnings };
        })
      );

      // retuns array 
      return clubTrainersEarnings;
    } catch (error) {
      console.error("Error fetching team leaders with monthly earnings:", error);
    }
  }