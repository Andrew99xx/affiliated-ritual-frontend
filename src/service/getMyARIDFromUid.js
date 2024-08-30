import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";


// return ARID of user
export const getMyARIDFromUid = async (user_uid) => {
    try {
      const userDocRef = doc(db, "users", user_uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        return userData.myARID;
      } else {
        console.log("No such user found!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
      return null;
    }
  }