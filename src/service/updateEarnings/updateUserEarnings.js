import { doc, getDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { getCurrentTimestamp } from "../time/getCurrentTimestamp.js";
import { findUserIdByReferral } from "../findUserIdByReferral.js";

// Update earnings according to userType
export const updateUserEarnings = async (userId, coursePrice, studentUID) => {
    try {

        if (typeof userId !== 'string') {
            alert(`Invalid userId: Expected string, received ${typeof userId}`);
            return;
        }
        // if (typeof coursePrice !== 'number') {
        //     alert(`Invalid coursePrice: Expected number, received ${typeof coursePrice}`);
        //     return;
        // }

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();

            if (userData.userTypes === 'team_leader') {

                const subCollectionEarnings = collection(userRef, "earnings");
                await setDoc(doc(subCollectionEarnings, `orderId-${studentUID}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    yourAmount: 0.4 * coursePrice,
                    sellsType: "active",
                });

                const subCollectionReferrals = collection(userRef, "referrals");
                await setDoc(doc(subCollectionReferrals, `orderId-${studentUID}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    referedStudentId : studentUID,
                    referType: "active",
                });

                alert("Users, team leader earnings updated successfully.");

            } else if (userData.userTypes === 'team_member') {

                const subCollectionEarnings = collection(userRef, "earnings");
                await setDoc(doc(subCollectionEarnings, `orderId-${studentUID}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    yourAmount: 0.2 * coursePrice,
                    sellsType: "active",
                });

                const subCollectionReferrals = collection(userRef, "referrals");
                await setDoc(doc(subCollectionReferrals, `orderId-${studentUID}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    referedStudentId : studentUID,
                    referType: "active",
                });

                alert("Users, team members earnings updated successfully.");

                const teamLeaderId = await findUserIdByReferral(userData.referralId);
                updateTeamLeaderPassiveEarnings(teamLeaderId, coursePrice, studentUID);
               
            }
        } else {
            alert("User does not exist.");
        }
    } catch (error) {
        alert(`Error updating user's earnings: ${error.message}`);
    }
};





// Update team leader passive earnings
const updateTeamLeaderPassiveEarnings = async (userId, coursePrice, studentUID) => {
    try {
        if (typeof userId !== 'string') {
            alert(`Invalid userId: Expected string, received ${typeof userId}`);
            return;
        }
        // if (typeof coursePrice !== 'number') {
        //     alert(`Invalid coursePrice: Expected number, received ${typeof coursePrice}`);
        //     return;
        // }

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();

            if (userData.userTypes === 'team_leader') {

                const subCollectionEarnings = collection(userRef, "earnings");
                await setDoc(doc(subCollectionEarnings, `orderId-${studentUID}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    yourAmount: 0.2 * coursePrice,
                    sellsType: "passive",
                });

                const subCollectionReferrals = collection(userRef, "referrals");
                await setDoc(doc(subCollectionReferrals, `orderId-${studentUID}`), {
                    createdAt: getCurrentTimestamp(),
                    updatedAt: getCurrentTimestamp(),
                    referedStudentId : studentUID,
                    referType: "passive",
                });

                alert("Users, team-leader passive earnings updated successfully.");
            }
        } else {
            alert("User does not exist.");
        }
    } catch (error) {
        alert(`Error updating user's earnings: ${error.message}`);
    }
}



/**
 * -- if no team leader is found, then you will get error
 * -- also, replace orderId with , id of coursePrice users id, 
 */
