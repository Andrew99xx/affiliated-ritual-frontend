import React from 'react'
import "./Trainer.css"
import Box from "../../../../../components/box/Box";
import Table from "../../../../../components/Table/Table";
import user from "./users.png";
import data from "../Data";
import Arrow from "./arrow.png"
const Trainer = () => {
  function refreshPage(){ 
    window.location.reload(); 
}
  return (
    <div className='Trainer'>
      <div className="fl"> <h1 className="heading">Trainer</h1> <button className="back-button" onClick={refreshPage}>
        <img src={Arrow} alt="" />
        </button></div>

    </div>
  )
}

export default Trainer