
import React from 'react'
import "./Delete.css"

import close from "./close.png"
import log from "./log.png"
const Delete = ({ showDelete, closeDelete }) => {
  return (
    <div className={showDelete ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
          <div className="closebtn" onClick={closeDelete}>
              <img src={close} alt="" />
          </div>
          <div className="mainc">
              <img src={log} alt="" />
              <h1 className="heading">Are you sure?</h1>
<p className='para'>Do you really want to delete these records? This process cannot be undone.</p>
              <div className="btnc">
                  <div onClick={closeDelete} className="btn">Cancel</div>
                  <div className="btn">Delete</div>
              </div>
          </div>
        
      </section>
    </div>
  )
}

export default Delete