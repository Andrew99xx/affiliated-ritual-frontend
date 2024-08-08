import React, { useState, useEffect } from "react";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";

import Table from "./Table/Table";
import FullTable from "./FullTable/FullTable";

import { db } from "../../../../firebase-config";
import { doc, getDoc, collection, where, getDocs, query } from "firebase/firestore";
import { findMonthlyEarningsForUser } from "../../../../service/findMonthlyEarningsForUser";


const TeamRep = () => {
  const [fullDataItem, setFullDataItem] = useState(null);

  const handleViewFull = (item) => {
    setFullDataItem(item);
  };

  const handleBack = () => {
    setFullDataItem(null);
  };


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

      for (const doc of querySnapshot.docs) {
        const userData = { id: doc.id, ...doc.data() };
        // Find the monthly earnings for each user
        const monthlyEarnings = await findMonthlyEarningsForUser(userData.id);
        usersUsingMyARID.push({ ...userData, monthlyEarnings });
      }


      // return array
      return usersUsingMyARID;
    } catch (error) {
      console.error("Error fetching users by referralId:", error);
      return [];
    }
  }

  async function findUsersReferredByUid(team_leader_uid) {
    const myARID = await getMyARIDFromUid(team_leader_uid);

    if (myARID) {

      // this is an array
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
    <div className="edu">

      {
        fullDataItem === null && (
          <div className="graphes">
            <Graph />
            <Bargraph />
          </div>
        )
      }

      {
        fullDataItem ? (
          <FullTable item={fullDataItem} onBack={handleBack} />
        ) : (
          <Table data={referredUsers} onViewFull={handleViewFull} />
        )
      }
    </div>
  );
};

export default TeamRep;
