import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

// checking if user exists in our database or not
export const checkUserTypes = async (uid) => {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        const userData = userDoc.data();
        // Return the userTypes from the user data
        return userData.userTypes || null;
    } else {
        console.log("No such user!");
        return false;
    }
};
