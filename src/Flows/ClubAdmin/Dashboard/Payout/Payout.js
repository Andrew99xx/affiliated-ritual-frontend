import React, { useState, useEffect } from "react";

import "./Payout.css";
import user from "./users.png";

import Box from "../../../../components/box/Box";
import Bargraph from "../../../../components/Graph/Bargraph";
import Smallbar from "../../../../components/Smallbar/Smallbar";
import PieChart from "../../../../components/Pie/PieChart";
import Pay from "../../../../components/Pay/Pay.js"

import Table from "./Table/Table.js";

import { findMonthlyEarningsForUser } from "../../../../service/findMonthlyEarningsForUser.js";
import { getTeamLeaders } from "../../../../service/getUsers/getTeamLeaders.js"
import { getTeamMembers } from "../../../../service/getUsers/getTeamMembers.js"

// import { getTeamMembers } from "../../../../service/users/getTeamMembers.js";


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

  async function getTeamLeadersWithMonthlyEarnings() {
    try {
      const teamLeaders = await getTeamLeaders();
      const teamLeadersWithMonthlyEarnings = await Promise.all(
        teamLeaders.map(async (teamLeader) => {
          const monthlyEarnings = await findMonthlyEarningsForUser(teamLeader.id);
          return { ...teamLeader, monthlyEarnings };
        })
      );
      setTeamLeadersData(teamLeadersWithMonthlyEarnings);
    } catch (error) {
      console.error("Error fetching team leaders with monthly earnings:", error);
    }
  }

  async function getTeamMembersWithMonthlyEarnings() {
    try {
      const teamMembers = await getTeamMembers();
      console.log(teamMembers);
      const teamMembersWithMonthlyEarnings = await Promise.all(
        teamMembers.map(async (teamMember) => {
          const monthlyEarnings = await findMonthlyEarningsForUser(teamMember.id);
          return { ...teamMember, monthlyEarnings };
        })
      );
      console.log(teamMembersWithMonthlyEarnings);
      setTeamMembersData(teamMembersWithMonthlyEarnings);
    } catch (error) {
      console.error("Error fetching team leaders with monthly earnings:", error);
    }
  }

  useEffect(() => {
    getTeamLeadersWithMonthlyEarnings();
    getTeamMembersWithMonthlyEarnings();
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
            data={teamLeadersData.slice(0, displayCount)} // Pass the team leaders data
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
