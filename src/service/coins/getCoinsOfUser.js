import { db } from "../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

export const getCoinsOfUser = async (user_uid) => {
    try {
        const userDocRef = doc(db, "users", user_uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const data = userDoc.data();
            return data.totalCoins || 0;

        } else {
            return 0;
        }
    } catch (error) {
        console.error("Error fetching user's totalCoins:", error);
        return 0;
    }
};
