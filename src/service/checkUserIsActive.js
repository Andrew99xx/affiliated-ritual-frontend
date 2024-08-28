import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

// return isAcive 
export const checkUserIsActive = async (uid) => {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        const userData = userDoc.data();
        // Return isActive
        return userData.isActive;
    } else {
        console.log("No such user!");
        return false;
    }
};
