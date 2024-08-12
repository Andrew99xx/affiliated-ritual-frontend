import React, { useState, useEffect } from "react";

import "./Payout.css";
import user from "./users.png";

import Box from "../../../../components/box/Box";
import Bargraph from "../../../../components/Graph/Bargraph";
import Smallbar from "../../../../components/Smallbar/Smallbar";
import PieChart from "../../../../components/Pie/PieChart";
import Pay from "../../../../components/Pay/Pay.js"

import Table from "./Table/Table.js";


import { getClubTrainersEarnings } from "../../../../service/getUsersEarnings/getClubTrainersEarnings.js"
import { getTeamLeadersEarnings } from "../../../../service/getUsersEarnings/getTeamLeadersEarnings.js"
import { getTeamMembersEarnings } from "../../../../service/getUsersEarnings/getTeamMembersEarnings.js"



const Payout = () => {
  const [showPay, setShowPay] = useState(false);
  const [userPayInfo, setUserPayInfo] = useState("");

  const [displayCount, setDisplayCount] = useState(5);

  const [teamLeadersData, setTeamLeadersData] = useState([]);
  const [teamMembersData, setTeamMembersData] = useState([]);
  const [clubTrainersData, setClubTrainersData] = useState([]);



  // here, data will be coming from table, when user click on pay button 
  const showPayModal = (item) => {
    setShowPay(true);
    setUserPayInfo(item);
  };

  const closePayModal = () => {
    setShowPay(false);
  };

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

  

  useEffect(() => {
    const fetchEarnings = async () => {
      const teamLeadersEarnings = await getTeamLeadersEarnings();
      setTeamLeadersData(teamLeadersEarnings);

      const membersEarnings = await getTeamMembersEarnings();
      setTeamMembersData(membersEarnings);

      const trainerEarnings = await getClubTrainersEarnings();
      setClubTrainersData(trainerEarnings);
    };

    fetchEarnings();
  }, []);

  return (
    <div className="Payout">
      <h1 className="heading">Payout</h1>
      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>
      <div className="graphs">
        <Smallbar />
        <PieChart data={[10, 20, 30]} labels={["Red", "Blue", "Yellow"]} />
        <Bargraph />
      </div>

      <div className="tablespayout">


        <div className="sl">
          <h1 className="heading">Trainer</h1>
          <h1 className="viw">View All</h1>
        </div>
        <div className="tb">
          <Table
            data={clubTrainersData.slice(0, displayCount)} // Pass the team leaders data
            onClickPay={showPayModal} // Pass the onClick handler for actions
          />
        </div>

        <div className="sl">
          <h1 className="heading">Team Leader</h1>
          {/* onclick of viewAll, use Full Table  */}
          <h1 className="viw">View All</h1>
        </div>
        <div className="tb">
          <Table
            data={teamLeadersData.slice(0, displayCount)}
            onClickPay={showPayModal}
          />
        </div>

        <div className="sl">
          <h1 className="heading">Team Member</h1>
          <h1 className="viw">View All</h1>
        </div>
        <div className="tb">
          <Table
            data={teamMembersData.slice(0, displayCount)}
            onClickPay={showPayModal}
          />
        </div>
      </div>

      {/* pay - popup modal , it will be shown, if showPay = true */}
      {/* it's code, is in another folder, check that - components/Pay/Pay*/}
      <Pay
        showPayModal={showPay}
        closePayModal={closePayModal}
        userPayInfo={userPayInfo}
      />

    </div>
  );
};

export default Payout;
