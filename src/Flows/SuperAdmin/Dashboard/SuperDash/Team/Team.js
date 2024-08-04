import React, { useState } from "react";
import FullTable from "../../../../../components/FullTable/FullTable";
import Box from "../../../../../components/box/Box";
import Table from "../../../../../components/Table/Table";
import user from "./users.png";
import data from "../Data";
import Arrow from "./arrow.png"
import "./Team.css"
const Team = () => {
  function refreshPage(){ 
    window.location.reload(); 
}
  const [fullDataItem, setFullDataItem] = useState(null);

  const handleViewFull = (item) => {
    setFullDataItem(item);
  };

  const handleBack = () => {
    setFullDataItem(null);
  };
  return (
    <div className="team">
     <div className="fl"> <h1 className="heading">Team</h1> <button className="back-button" onClick={refreshPage}>
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
         <div className="fl"><h1 className="heading">Team Members</h1> <input type="text" className="search" /></div> 
        </>
      )}
      {fullDataItem ? (
        <FullTable item={fullDataItem} onBack={handleBack} />
      ) : (
        <Table data={data} onViewFull={handleViewFull} />
      )}
     
    </div>
  );
};

export default Team;
