import { findMonthlyEarningsForUser } from "../findMonthlyEarningsForUser";
import { getTeamMembers } from "../getUsers/getTeamMembers";

export const  getTeamMembersEarnings = async () => {
    try {
        const teamMembers = await getTeamMembers();
        console.log(teamMembers);

        // returns array 
        const teamMembersEarnings = await Promise.all(
            teamMembers.map(async (teamMember) => {
                const monthlyEarnings = await findMonthlyEarningsForUser(teamMember.id);
                // each single elements will be objects
                return { ...teamMember, monthlyEarnings };
            })
        );
        console.log(teamMembersEarnings);

        // returns array 
        return teamMembersEarnings;
    } catch (error) {
        console.error("Error fetching team leaders with monthly earnings:", error);
    }
}