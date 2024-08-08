import { findMonthlyEarningsForUser } from "../findMonthlyEarningsForUser";
import { getTeamLeaders } from "../getUsers/getTeamLeaders";

export const getTeamLeadersEarnings = async () => {
    try {
      const teamLeaders = await getTeamLeaders();

      // returns array
      const teamLeadersEarnings = await Promise.all(
        teamLeaders.map(async (teamLeader) => {

          // getting object, 
          const monthlyEarnings = await findMonthlyEarningsForUser(teamLeader.id);

          // each single elements is object
          // we are not iterating montlyEarnings, 
          return { ...teamLeader, monthlyEarnings };
        })
      );

      // retuns array 
      return teamLeadersEarnings;
    } catch (error) {
      console.error("Error fetching team leaders with monthly earnings:", error);
    }
  }