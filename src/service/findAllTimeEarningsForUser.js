import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

// Find all-time earnings for a given user ID
export const findAllTimeEarningsForUser = async (userId) => {
    try {
        const earningsRef = collection(db, "users", userId, "earnings");
        const querySnapshot = await getDocs(earningsRef);

        let totalEarnings = 0;

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Convert yourAmount to a number in case it's stored as a string
            const amount = Number(data.yourAmount);
            totalEarnings += amount;
        });

        return totalEarnings;
    } catch (error) {
        console.error("Error fetching earnings data:", error);
        return 0; 
        // Returning 0 instead of {} to maintain consistency in the return type
    }
};
