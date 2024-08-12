import { doc, getDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { getCurrentTimestamp } from "../time/getCurrentTimestamp.js";
import { getCurrentDate } from "../time/getCurrentDate.js";


// Update earnings according to userType
export const updateTrainerEarnings = async (trainerId) => {
    try {

        if (typeof trainerId !== 'string') {
            alert(`Invalid userId: Expected string, received ${typeof userId}`);
            return;
        }


        const userRef = doc(db, "users", trainerId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();

            if (userData.selectExperience === 'experienced') {

                const subCollectionEarnings = collection(userRef, "earnings");
                await setDoc(doc(subCollectionEarnings, `orderId-${getCurrentDate}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    yourAmount: 500,

                });

                alert("trainer earnings updated");

            } else if (userData.selectExperience === 'fresher') {

                const subCollectionEarnings = collection(userRef, "earnings");
                await setDoc(doc(subCollectionEarnings, `orderId-${getCurrentDate()}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    yourAmount: 400,
                });
                alert("User earnings updated successfully.");
            }
        } else {
            alert("User does not exist.");
        }
    } catch (error) {
        alert(`Error updating user's earnings: ${error.message}`);
    }
};






