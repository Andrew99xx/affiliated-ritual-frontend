import React from 'react'
import "./Certificate.css"
import cert from "./cert.png"
const Certificate = () => {
  return (
    <div className='certifcate'>

      <h1>Certificates</h1>
      <div className="maincer"> <img src={cert} alt="" />
      <a href="" className="btn"> download certificate</a></div>
    </div>
  )
}

export default Certificate