import { findMonthlyEarningsForUser } from "../findMonthlyEarningsForUser";
import { getClubTrainers } from "../getUsers/getClubTrainers";

export const getclubTrainersEarnings = async () => {
    try {
      const clubTrainers = await getClubTrainers();

      // returns array
      const clubTrainersEarnings = await Promise.all(
        clubTrainers.map(async (teamLeader) => {

          // getting object, 
          const monthlyEarnings = await findMonthlyEarningsForUser(teamLeader.id);

          // each single elements is object
          // we are not iterating montlyEarnings, 
          return { ...teamLeader, monthlyEarnings };
        })
      );

      // retuns array 
      return clubTrainersEarnings;
    } catch (error) {
      console.error("Error fetching team leaders with monthly earnings:", error);
    }
  }