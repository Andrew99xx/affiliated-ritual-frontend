import React, { useEffect, useState } from "react";

import Box from "../../../../components/box/Box";
import Bargraph from "../../../../components/Graph/Bargraph";
import Smallbar from "../../../../components/Smallbar/Smallbar";
import PieChart from "../../../../components/Pie/PieChart";
import Table from "../../../../components/Table/Table";

// different table for trainer 
import TrainerTable from "../../../../components/Trainer/TrainerTable";


import Pay from "../../../../components/Pay/Pay";

import { getTeamLeadersEarnings } from "../../../../service/getUsersEarnings/getTeamLeadersEarnings"
import { getTeamMembersEarnings } from "../../../../service/getUsersEarnings/getTeamMembersEarnings"
import { getClubTrainersEarnings } from "../../../../service/getUsersEarnings/getClubTrainersEarnings.js"

import Team from "./Team/Team";
import Student from "./Student/Student";
import Trainer from "./Trainer/Trainer";

import user from "./users.png";
import data from "./Data";

import "./Admindash.css";


const AdminDa = () => {

  const [teamLeadersEarnings, setTeamLeadersEarnings] = useState([]);
  const [teamMembersEarnings, setTeamMembersEarnings] = useState([]);
  const [clubTrainersEarnings, setClubTrainersEarnings] = useState([])

  const [showTeam, setShowTeam] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showTrainer, setShowTrainer] = useState(false);

  useEffect(() => {
    const fetchEarnings = async () => {
      const teamLeadersEarnings = await getTeamLeadersEarnings();
      setTeamLeadersEarnings(teamLeadersEarnings);

      const teamMembersEarnings = await getTeamMembersEarnings();
      setTeamMembersEarnings(teamMembersEarnings);

      const clubTrainersEarnings = await getClubTrainersEarnings();
      setClubTrainersEarnings(clubTrainersEarnings);
    };

    fetchEarnings();
  }, []);

  const ShowTeam = () => {
    setShowTeam(true);
    setShowStudent(false);
    setShowTrainer(false);
  };

  const ShowStudent = () => {
    setShowTeam(false);
    setShowStudent(true);
    setShowTrainer(false);
  };

  const ShowTrainer = () => {
    setShowTeam(false);
    setShowStudent(false);
    setShowTrainer(true);
  };

  if (showTeam) {
    return <Team />;
  } else if (showStudent) {
    return <Student />;
  } else if (showTrainer) {
    return <Trainer />;
  }

  return (
    <div className="admindash">
      <h1 className="heading">Dashboard</h1>

      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        {/* <Box subhed={"User"} value={"40,689"} logo={user} /> */}
      </div>

      <div className="graphs">
        {/* <Smallbar /> */}
        <PieChart data={[10, 20, 30]} labels={["Red", "Blue", "Yellow"]} />
        <Bargraph />
      </div>

      <div className="tables">

        <div className="hes">
          <h1 className="heading">Club Members</h1>
          <h2 className="subha" onClick={ShowTeam}>View All</h2>
        </div>
        <Table data={teamMembersEarnings} onViewFull={() => { }} showAction={false} />

        <div className="hes">
          <h1 className="heading" >Students</h1>{" "}
          <h2 className="subha" onClick={ShowStudent} >View All</h2>
        </div>
        <Table data={teamLeadersEarnings} onViewFull={() => { }} showAction={false} />


        <div className="hes">
          <h1 className="heading">Trainer</h1>{" "}
          <h2 className="subha" onClick={ShowTrainer}>View All</h2>
        </div>
        {/* <TrainerTable data={data} onViewFull={() => { }} showAction={true} /> */}
        <Table data={clubTrainersEarnings} onViewFull={() => { }} showAction={false} />

      </div>
    </div>
  );
};

export default AdminDa;
