import React, { useEffect, useState } from "react";
import "./ReferallTimeline.css";
import { getMyARIDFromUid } from "../../../../../service/getMyARIDFromUid";
import { findUsersUsingMyARID } from "../../../../../service/findUsers/findUsersUsingMyARID";

const Timeline = () => {
  const team_leader_uid = localStorage.getItem('team_leader_uid');
  const [referredUsers, setReferredUsers] = useState(null);

  // is it good to use in useEffect , 
  useEffect(() => {
    if (team_leader_uid) {
      findUsersReferredByUid(team_leader_uid);
    }
  }, []);


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
