import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config.js";

// Function to get current timestamp in dd-mm-yy hh:mm:ss format
const getCurrentTimestamp = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};


// update earnings according to userType, 
// for userType , team_leader, = it is clear, just do the 40%
// for userType, team_member, = you have to find the teamLeader of team_member, then split 20%, 20%
export const updateUserEarnings = async (userId, coursePrice) => {
    try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();

            // creating temporary array, if .earnings do not exits, then empty
            const currentEarnings = userData.earnings || [];

            const newSell = {
                sellId: getCurrentTimestamp(),
                coursePrice: coursePrice,
                yourAmount : 0.4 *coursePrice,
            };
            // updating temporary array
            currentEarnings.push(newSell);

            // final updating the users
            await updateDoc(userRef, {
                earnings: currentEarnings
            });

            console.log("User's earnings updated successfully.");
        } else {
            console.error("User does not exist.");
        }
    } catch (error) {
        console.error("Error updating user's earnings:", error);
        throw error;
    }
};


