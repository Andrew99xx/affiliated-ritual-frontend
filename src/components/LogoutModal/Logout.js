
import React from 'react'
import "./logout.css"

import close from "./close.png"
import log from "./log.png"
const Logout = ({ showModal, closeModal }) => {
  return (
    <div className={showModal ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
          <div className="closebtn" onClick={closeModal}>
              <img src={close} alt="" />
          </div>
          <div className="mainc">
              <img src={log} alt="" />
              <h1 className="heading">Are you sure you want to Logout?</h1>

              <div className="btnc">
                  <div onClick={closeModal} className="btn">Cancel</div>
                  <div className="btn">Logout</div>
              </div>
          </div>
        
      </section>
    </div>
  )
}

export default Logout