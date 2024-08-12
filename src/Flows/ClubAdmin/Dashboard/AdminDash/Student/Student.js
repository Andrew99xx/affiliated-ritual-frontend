import React, { useEffect, useState } from 'react'
import "./Student.css"

import Box from "../../../../../components/box/Box";
import Table from "../../../../../components/Table/Table";

import { getTeamLeadersEarnings } from '../../../../../service/getUsersEarnings/getTeamLeadersEarnings'

import user from "./users.png";
import data from "../Data";
import Arrow from "./arrow.png"

const Student = () => {
  const [teamLeadersEarnings, setTeamLeadersEarnings] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);

  function refreshPage() {
    window.location.reload();
  }

  useEffect(() => {
    const fetchEarnings = async () => {
      const earnings = await getTeamLeadersEarnings();
      setTeamLeadersEarnings(earnings);
    };

    fetchEarnings();
  }, []);

  return (
    <div className='students'>

      <div className="fl">
        <h1 className="heading">Students</h1>
        <button className="back-button" onClick={refreshPage}>
          <img src={Arrow} alt="" />
        </button>
      </div>

      <h3 className="subheading">Dashboard/ Students</h3>

      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>

      <div className="tables">

        <h1 className="heading2">Students</h1>
        <Table data={teamLeadersEarnings} onViewFull={() => { }} showAction={true} />


        <h1 className="heading2"> Active Students</h1>
        <Table data={teamLeadersEarnings} onViewFull={() => { }} showAction={true} />


        <h1 className="heading2">In-Active Students</h1>
        <Table data={teamLeadersEarnings} onViewFull={() => { }} showAction={true} />


        {/* pending students  */}
        <h1 className="heading2">Pending students</h1>
        <div className="tb">
          <div className="tablecon">
            <table className="table" cellSpacing={0} style={{ textAlign: 'center' }}>
              <thead className="tablehead">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {data.slice(0, displayCount).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>img</td>
                    <td><a href="#_" className="btn">Approve</a> <a href="#_" className="btn">Reject</a></td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Student