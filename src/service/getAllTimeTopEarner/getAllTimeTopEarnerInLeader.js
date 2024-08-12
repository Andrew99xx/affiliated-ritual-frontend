import { getTeamLeaders } from "../getUsers/getTeamLeaders";
import { findAllTimeEarningsForUser } from "../findAllTimeEarningsForUser";


// Find all-time earnings for all team leaders
export const getAllTimeTopEarnerInLeader = async () => {
    try {
        const teamLeaders = await getTeamLeaders();
        const allTeamLeadersEarnings = [];

        for (const leader of teamLeaders) {
            const earnings = await findAllTimeEarningsForUser(leader.id);

            // Create a new object that includes all properties of the leader and adds the earnings
            const leaderWithEarnings = {
                ...leader, // Spread the properties of the leader object
                totalEarnings: earnings // Add the total earnings property
            };

            allTeamLeadersEarnings.push(leaderWithEarnings);
        }

        return allTeamLeadersEarnings;
    } catch (error) {
        console.error('Error getting all-time earnings for team leaders:', error);
        return [];
    }
};
