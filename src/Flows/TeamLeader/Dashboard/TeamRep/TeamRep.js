import React, { useState, useEffect } from "react";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";

import Table from "./Table/Table";
import FullTable from "./FullTable/FullTable";

import { getMyARIDFromUid } from "../../../../service/getMyARIDFromUid";
import { findUsersUsingMyARID } from "../../../../service/findUsers/findUsersUsingMyARID.js"


const TeamRep = () => {
  const team_leader_uid = localStorage.getItem('team_leader_uid');

  const [fullDataItem, setFullDataItem] = useState(null);
  const [referredUsers, setReferredUsers] = useState(null);

  const handleViewFull = (item) => {
    setFullDataItem(item);
  };

  const handleBack = () => {
    setFullDataItem(null);
  };


  useEffect(() => {

    const fetchUsersReferredByUid = async () => {
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
    fetchUsersReferredByUid();
  }, [team_leader_uid]);



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
