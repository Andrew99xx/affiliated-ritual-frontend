import React from "react";
import "./Edu.css";

import Progress from "../../../../components/progress/Progress";
import Box from "../../../../components/box/Box";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";

// importing assests
import user from "./users.png";
import orders from "./orders.png";
import pending from "./pending.png";
import sales from "./sales.png";

const Edu = () => {
 

  return (
    <div className="edu">
      <h1 className="heading">Education & Progress</h1>
      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>

      <div className="graphes">
       <Graph/>
       <Bargraph/>
      

      </div>
      <div className="courses"></div>
      <div className="pro"><Progress/></div>
    </div>
  );
};

export default Edu;
