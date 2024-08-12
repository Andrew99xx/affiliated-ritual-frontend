import React, { useEffect, useState } from "react";
import "./ReferallTimeline.css";
import { db } from "../../../../../firebase-config";
import { doc, getDoc, collection, where, getDocs, query } from "firebase/firestore";

const Timeline = () => {
  const team_leader_uid = localStorage.getItem('team_leader_uid');
  const [referredUsers, setReferredUsers] = useState(null);

  // is it good to use in useEffect , 
  useEffect(() => {
    if (team_leader_uid) {
      findUsersReferredByUid(team_leader_uid);
    }
  }, []);

  async function getMyARIDFromUid(team_leader_uid) {
    try {
      const userDocRef = doc(db, "users", team_leader_uid);
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

  async function findUsersUsingMyARID(myARID) {
    try {
      const usersRef = collection(db, "users");
      const usersQuery = query(usersRef, where("referralId", "==", myARID));
      const querySnapshot = await getDocs(usersQuery);

      // check if each users contains id or not
      // how we can take id of each reffered users  
      const usersUsingMyARID = [];
      querySnapshot.forEach((doc) => {
        usersUsingMyARID.push(doc.data());
      });
      return usersUsingMyARID;
    } catch (error) {
      console.error("Error fetching users by referralId:", error);
      return [];
    }
  }

  async function findUsersReferredByUid(team_leader_uid) {
    const myARID = await getMyARIDFromUid(team_leader_uid);

    if (myARID) {
      const usersUsingMyARID = await findUsersUsingMyARID(myARID);

      if (usersUsingMyARID.length > 0) {
        console.log(usersUsingMyARID); // Log the users array
        setReferredUsers(usersUsingMyARID);
        // alert("Total Users using this myARID as referralId: " + usersUsingMyARID.length);
      } else {
        alert("No users found with this referralId.");
      }
    } else {
      alert("No myARID found for this uid.");
    }
  }

  return (
    <div className="bo">
      <div className="hed">
        <h1 className="leader">Team leader</h1>
      </div>
      <div className="timeline-container">
        <section className="timeline-section">
          <div className="scrollable">
            <div className="line"></div>
            <div className="lineparent">
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
            </div>
            <div className="children">
              {referredUsers ? (
                referredUsers.map((user, index) => (
                  <div key={index} className="child">
                    <div className="txt">{user.firstName || "No Name Available"}</div> {/* Default to avoid undefined */}
                  </div>
                ))
              ) : (
                <div className="child">Loading...</div>
              )}
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
