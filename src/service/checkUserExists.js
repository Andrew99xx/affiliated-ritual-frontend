import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

// checking if user exists in our database or not
export const checkUserExists = async (uid) => {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        console.log("User already registered:", userDoc.data());
        return true;
    } else {
        console.log("No such user!");
        return false;
    }
};