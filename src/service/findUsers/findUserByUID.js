import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { auth } from "../firebase"; // Replace with your Firebase configuration path

const db = getFirestore();

export const findUserByUID = async (uid) => {
  try {
    // Reference to the user document
    const userDocRef = doc(db, "users", uid);
    
    // Get the document
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      // Return user data
      return userDoc.data();
    } else {
      console.error("No such user found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
