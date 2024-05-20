import React, { useState } from "react";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";
import Table from "../../../../components/Table/Table";
import FullTable from "../../../../components/FullTable/FullTable";
import data from "./Data"; 

const TeamRep = () => {
  const [fullDataItem, setFullDataItem] = useState(null);

  const handleViewFull = (item) => {
    setFullDataItem(item);
  };

  const handleBack = () => {
    setFullDataItem(null);
  };

  return (
    <div className="edu">
      {fullDataItem === null && (
        <div className="graphes">
          <Graph />
          <Bargraph />
        </div>
      )}
      {fullDataItem ? (
        <FullTable item={fullDataItem} onBack={handleBack} />
      ) : (
        <Table data={data} onViewFull={handleViewFull} />
      )}
    </div>
  );
};

export default TeamRep;
