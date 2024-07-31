import React from 'react'
import "./Student.css"
import Box from "../../../../../components/box/Box";
import Table from "../../../../../components/Table/Table";
import user from "./users.png";
import data from "../Data";
import Arrow from "./arrow.png"
const Student = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }
  return (
    <div className='students'>
        
        <div className="fl"> <h1 className="heading">Students</h1> <button className="back-button" onClick={refreshPage}>
        <img src={Arrow} alt="" />
        </button></div>
        <h3 className="subheading">Dashboard/ Students</h3>

        <div className="boxes">
            <Box subhed={"User"} value={"40,689"} logo={user} />
            <Box subhed={"User"} value={"40,689"} logo={user} />
            <Box subhed={"User"} value={"40,689"} logo={user} />
            <Box subhed={"User"} value={"40,689"} logo={user} />
        </div>

        <div className="tables">

            <h1 className="heading2">Students</h1>
        <Table data={data} onViewFull={() => {}} showAction={false} />
        <h1 className="heading2"> Active Students</h1>

        <Table data={data} onViewFull={() => {}} showAction={false} />
        <h1 className="heading2">In-Active Students</h1>

        <Table data={data} onViewFull={() => {}} showAction={false} />

        </div>

    </div>
  )
}

export default Student