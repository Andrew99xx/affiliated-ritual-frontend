import React, { useEffect, useState } from 'react'
import Table from './Table/Table'
import "./direct.css"

import { db } from "../../../../firebase-config";
import { doc, getDoc, collection, where, getDocs, query } from "firebase/firestore";
import moment from "moment"; // For easier time date manipulation


const Direct = () => {

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

  // Find earnings for the last 12 months for a given user ID
  // Find earnings for the last 12 months for a given user ID
  async function findMonthlyEarningsForUser(userId) {
    try {
      // Define the starting point for fetching the last year's data
      const oneYearAgo = moment().subtract(1, 'year').startOf('month').format("DD-MM-YY HH:mm:ss");

      // Reference to the user's "earnings" sub-collection
      // users = our db 
      // earnings = our subcollection 
      const earningsRef = collection(db, "users", userId, "earnings");

      // Query to get earnings created in last 1 year 
      const earningsQuery = query(
        earningsRef,
        where("createdAt", ">=", oneYearAgo)
      );

      // snapshot of each query in "earnings" subquery
      const querySnapshot = await getDocs(earningsQuery);

      // returning objects, 
      const monthlyEarnings = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        // you can change if you want different format
        const month = moment(data.createdAt, "DD-MM-YY HH:mm:ss").format("MMMM YYYY");


        if (!monthlyEarnings[month]) {
          monthlyEarnings[month] = 0;
        }
        monthlyEarnings[month] += data.yourAmount;
      });

      return monthlyEarnings; // Returns an object with months as keys and total earnings as values
    } catch (error) {
      console.error("Error fetching earnings data:", error);
      return {};
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
    <div className='Direct'>
      <h1 className="heading">Direct Sale Report</h1>
      <div className="containe"><h2 className="subheading">Active Students</h2> <input placeholder='Search' className='input' type="text" /></div>
      <div className="flex">
      <Table data={referredUsers} onViewFull={() => {}} showAction={false} />
      </div>

      <div className="containe"><h2 className="subheading">In-Active Students</h2> <input placeholder='Search' className='input' type="text" /></div>
      <div className="flex">
      <Table data={referredUsers} onViewFull={() => {}} showAction={false} />
      </div>

      <div className="containe"><h2 className="subheading">Passed Out Students</h2> <input placeholder='Search' className='input' type="text" /></div>
      <div className="flex">
      <Table data={referredUsers} onViewFull={() => {}} showAction={false} />
      </div>
    </div>
  )
}

export default Direct