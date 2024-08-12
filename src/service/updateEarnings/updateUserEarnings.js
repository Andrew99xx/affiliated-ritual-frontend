import { doc, getDoc, collection, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import { getCurrentTimestamp } from "../time/getCurrentTimestamp.js";
import { findUserIdByReferral } from "../findUserIdByReferral.js";

export const updateUserEarnings = async (userId, coursePrice, studentUID) => {
    try {
        if (typeof userId !== 'string') {
            alert(`Invalid userId: Expected string, received ${typeof userId}`);
            return;
        }

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();
            let yourAmount;

            if (userData.userTypes === 'team_leader') {
                yourAmount = 0.4 * coursePrice;
            } else if (userData.userTypes === 'team_member') {
                yourAmount = 0.2 * coursePrice;
            } else {
                alert("Invalid user type.");
                return;
            }

            // Update or create totalEarnings and totalCoins in the main user document
            const totalCoins = yourAmount * 0.01;
            await updateDoc(userRef, {
                totalEarnings: increment(yourAmount),
                totalCoins: increment(totalCoins)
            });

            // Add earnings record to subcollection
            const subCollectionEarnings = collection(userRef, "earnings");
            await setDoc(doc(subCollectionEarnings, `orderId-${studentUID}`), {
                createdAt: getCurrentTimestamp(),
                updatedAt: getCurrentTimestamp(),
                yourAmount: yourAmount,
                sellsType: userData.userTypes === 'team_leader' ? "active" : "passive",
            });

            // Add referral record to subcollection
            const subCollectionReferrals = collection(userRef, "referrals");
            await setDoc(doc(subCollectionReferrals, `orderId-${studentUID}`), {
                createdAt: getCurrentTimestamp(),
                updatedAt: getCurrentTimestamp(),
                referedStudentId: studentUID,
                referType: userData.userTypes === 'team_leader' ? "active" : "passive",
            });

            alert(`User's ${userData.userTypes === 'team_leader' ? 'team leader' : 'team member'} earnings updated successfully.`);


            // this will execute only if team_member
            if (userData.userTypes === 'team_member') {
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

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const yourAmount = 0.2 * coursePrice;

            // Update or create totalEarnings and totalCoins in the main user document
            const totalCoins = yourAmount * 0.01;
            await updateDoc(userRef, {
                totalEarnings: increment(yourAmount),
                totalCoins: increment(totalCoins)
            });

            // Add earnings record to subcollection
            const subCollectionEarnings = collection(userRef, "earnings");
            await setDoc(doc(subCollectionEarnings, `orderId-${studentUID}`), {
                createdAt: getCurrentTimestamp(),
                updatedAt: getCurrentTimestamp(),
                yourAmount: yourAmount,
                sellsType: "passive",
            });

            // Add referral record to subcollection
            const subCollectionReferrals = collection(userRef, "referrals");
            await setDoc(doc(subCollectionReferrals, `orderId-${studentUID}`), {
                createdAt: getCurrentTimestamp(),
                updatedAt: getCurrentTimestamp(),
                referedStudentId: studentUID,
                referType: "passive",
            });

            alert("Users, team-leader passive earnings updated successfully.");
        } else {
            alert("User does not exist.");
        }
    } catch (error) {
        alert(`Error updating user's earnings: ${error.message}`);
    }
};
