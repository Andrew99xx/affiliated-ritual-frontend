import React, { useEffect, useState } from "react";

import FullTable from "../../../../../components/FullTable/FullTable";
import Box from "../../../../../components/box/Box";
import Table from "../../../../../components/Table/Table";

import { getClubTrainersEarnings } from "../../../../../service/getUsersEarnings/getClubTrainersEarnings"

import user from "./users.png";
import data from "../Data";
import Arrow from "./arrow.png"
import "./Trainer.css"


const Trainer = () => {

  function refreshPage() {
    window.location.reload();
  }

  const [ClubTrainersEarnings, setClubTrainersEarnings] = useState([]);
  const [fullDataItem, setFullDataItem] = useState(null);

  useEffect(() => {
    const fetchEarnings = async () => {
      const ClubTrainersEarnings = await getClubTrainersEarnings();
      setClubTrainersEarnings(ClubTrainersEarnings);
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
    <div className="Trainer">
      <div className="fl">
        <h1 className="heading">Trainer</h1>
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
            <h1 className="heading">Trainer</h1>
            <input type="text" placeholder="Search" className="inputinstallll" />
          </div>
        </>
      )}
      {fullDataItem ? (
        <FullTable item={fullDataItem} onBack={handleBack} />
      ) : (
        <Table data={ClubTrainersEarnings} onViewFull={handleViewFull} />
      )}

    </div>
  );
};

export default Trainer;
