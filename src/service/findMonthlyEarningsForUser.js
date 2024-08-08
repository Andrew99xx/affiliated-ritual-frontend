import { db } from "../firebase-config";
import { collection, where, getDocs, query } from "firebase/firestore";
import moment from "moment";

// Find earnings for the last 12 months for a given user ID
export const findMonthlyEarningsForUser = async (userId) => {
    try {
        // Define the starting point for fetching the last year's data
        const oneYearAgo = moment().subtract(1, 'year').startOf('month').format("DD-MM-YY HH:mm:ss");

        // Reference to the user's "earnings" sub-collection
        // users = our db 
        // earnings = our subcollection 
        const earningsRef = collection(db, "users", userId, "earnings");

        // Query to get earnings created in last 1 year 
        const earningsQuery = query(
            earningsRef,
            where("createdAt", ">=", oneYearAgo)
        );

        // snapshot of each query in "earnings" subquery
        const querySnapshot = await getDocs(earningsQuery);

        // returning objects, 
        const monthlyEarnings = {};

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // you can change if you want different format
            const month = moment(data.createdAt, "DD-MM-YY HH:mm:ss").format("MMMM YYYY");


            if (!monthlyEarnings[month]) {
                monthlyEarnings[month] = 0;
            }
            monthlyEarnings[month] += data.yourAmount;
        });

        return monthlyEarnings; 
        // Returns an object with months as keys and total earnings as values
    } catch (error) {
        console.error("Error fetching earnings data:", error);
        return {};
    }
}