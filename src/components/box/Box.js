import React from 'react'
import "./box.css"

const Box = ({subhed,value,logo}) => {
  return (
    <div className="box">
          <div className="boxinfo">
            <div className="detail">
              <p>Total {subhed}</p>
              <h3>{value}</h3>
            </div>
            <div className="boxicon">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="status">
            <div>
              {" "}
              icon <span>8.5%</span> up from yesterday
            </div>
          </div>
        </div>
  )
}

export default Box