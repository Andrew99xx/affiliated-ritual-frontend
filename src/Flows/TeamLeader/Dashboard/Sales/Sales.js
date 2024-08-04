import React from 'react'
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";
import Box from "../../../../components/box/Box";
import ReferallTimeline from './ReferallTimeline/ReferallTimeline'
import user from "./users.png";
import orders from "./orders.png";
import pending from "./pending.png";
import sales from "./sales.png";

const Sales = () => {
  return (
    <div className='edu'>
      <h1 className="heading">Education & Progress</h1>
      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>

      <div className="graphes">
        <Graph />
        <Bargraph />
      </div>
      <div
        className="courses"
        style={{
          color: 'wheat'
        }}
      >
        courses here
      </div>
      <div className="pro">
        <ReferallTimeline />
      </div>
    </div>
  )
}

export default Sales