import React, { useEffect, useState } from 'react'
import Box from '../../../../components/box/Box'
import Bargraph from '../../../../components/Graph/Bargraph'
import Graph from '../../../../components/Graph/Graph'
import user from "./users.png";
import Table from "../../../../components/Table/Table";
import Paragraph from 'antd/es/typography/Paragraph';
import { getMyARIDFromUid } from "../../../../service/getMyARIDFromUid.js"
import { findUsersUsingMyARID } from '../../../../service/findUsers/findUsersUsingMyARID.js';


const Dash = () => {
  const [arID, setArID] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchARID = async () => {
      const uid = localStorage.getItem("team_member_uid");
      if (uid) {
        const arID = await getMyARIDFromUid(uid);
        setArID(arID);
      }
    };
    fetchARID();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (arID) {
        const usersUsingMyARID = await findUsersUsingMyARID(arID);
        setData(usersUsingMyARID);
      }
    }
    fetchData();
  }, [arID])

  return (
    <div className='edu'>
      <h1 className="heading">Dashboard</h1>
      <h2 className="heading">
        Your Referral ID is :
        <Paragraph
          className="heading"
          copyable>
          {arID}
        </Paragraph>
      </h2>

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

      <div className="containe">
        <h2 className="subheading">Active Students</h2>
        <input
          placeholder='Search'
          className='input'
          type="text"
        />
      </div>
      <Table data={data} showAction={false} />

      <div style={{
        height: '60px'
      }}>

      </div>

    </div>
  )
}

export default Dash