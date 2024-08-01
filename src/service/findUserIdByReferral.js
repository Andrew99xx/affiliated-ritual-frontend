import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config.js";

export const findUserIdByReferral = async (referralId) => {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("myARID", "==", referralId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Return the first user ID found with the referral ID
            // there can be multiple users , if any chances referralId matches to more than one myARID
            return querySnapshot.docs[0].id;
        }

        // Return null if no user is found
        return null;
    } catch (error) {
        console.error("Error finding user by referral ID:", error);
        throw error;
    }
};
