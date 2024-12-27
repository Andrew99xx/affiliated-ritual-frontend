import React, { useEffect, useState } from "react";

import FullTable from "../../../../../components/FullTable/FullTable";
import Box from "../../../../../components/box/Box";
import Table from "../../../../../components/Table/Table";

import { getTeamMembersEarnings } from "../../../../../service/getUsersEarnings/getTeamMembersEarnings"

import user from "./users.png";
import data from "../Data";
import Arrow from "./arrow.png"
import "./Team.css"


const Team = () => {

  function refreshPage() {
    window.location.reload();
  }

  const [teamMembersEarnings, setTeamMembersEarnings] = useState([]);
  const [fullDataItem, setFullDataItem] = useState(null);

  useEffect(() => {
    const fetchEarnings = async () => {
      const teamMembersEarnings = await getTeamMembersEarnings();
      setTeamMembersEarnings(teamMembersEarnings);
    };

    fetchEarnings();
  }, []);


  const handleViewFull = (item) => {
    setFullDataItem(item);
  };

  const handleBack = () => {
    setFullDataItem(null);
  };
  return (
    <div className="team">
      <div className="fl">
        <h1 className="heading">Team</h1>
        <button className="back-button" onClick={refreshPage}>
          <img src={Arrow} alt="" />
        </button></div>
      {fullDataItem === null && (
        <>
          <div className="boxes">
            <Box subhed={"User"} value={"40,689"} logo={user} />
            <Box subhed={"User"} value={"40,689"} logo={user} />
            <Box subhed={"User"} value={"40,689"} logo={user} />
            <Box subhed={"User"} value={"40,689"} logo={user} />
          </div>
          <div className="fl">
            <h1 className="heading">Club Members</h1>
            <input type="text" placeholder="Search" className="inputinstallll" />
          </div>
        </>
      )}
      {fullDataItem ? (
        <FullTable item={fullDataItem} onBack={handleBack} />
      ) : (
        <Table data={teamMembersEarnings} onViewFull={handleViewFull} />
      )}

    </div>
  );
};

export default Team;
