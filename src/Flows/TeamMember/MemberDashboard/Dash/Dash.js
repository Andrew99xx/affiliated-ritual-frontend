import React from 'react'
import Box from '../../../../components/box/Box'
import Bargraph from '../../../../components/Graph/Bargraph'
import Graph from '../../../../components/Graph/Graph'
import user from "./users.png";
import Table from "../../../../components/Table/Table";
import data from "./Data"; 

const Dash = () => {
  return (
    <div className='edu'>
        <h1 className="heading">Dashboard</h1>
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
        <div className="containe"><h2 className="subheading">Active Students</h2> <input placeholder='Search' className='input' type="text" /></div>
        <Table data={data} showAction={false} />

    </div>
  )
}

export default Dash