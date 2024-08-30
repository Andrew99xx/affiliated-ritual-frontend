import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { findMonthlyEarningsForUser } from "../findMonthlyEarningsForUser";


// returns array of users using myARID of someone as referralId
// take time to think, code is correct
export const findUsersUsingMyARID = async (myARID) => {
    try {
        const usersRef = collection(db, "users");
        const usersQuery = query(usersRef, where("referralId", "==", myARID));
        const querySnapshot = await getDocs(usersQuery);

        const usersUsingMyARID = [];

        // querySnapshot.forEach((doc) => {
        //     usersUsingMyARID.push(doc.data());
        // });

        for (const doc of querySnapshot.docs) {
            const userData = { id: doc.id, ...doc.data() };
            // Find the monthly earnings for each user
            const monthlyEarnings = await findMonthlyEarningsForUser(userData.id);
            usersUsingMyARID.push({ ...userData, monthlyEarnings });
        }

        return usersUsingMyARID;
    } catch (error) {
        console.error("Error fetching users by referralId:", error);
        return [];
    }
}