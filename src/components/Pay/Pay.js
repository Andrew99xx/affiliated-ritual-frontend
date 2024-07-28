import React from "react";
import "./Pay.css";
import close from "./close.png";
import log from "./log.png";

const Pay = ({ showPayModal, closePayModal }) => {
  return (
    <div className={showPayModal ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="closebtn" onClick={closePayModal}>
          <img src={close} alt="Close" />
        </div>
        <div className="mainc">
          <h1 className="headinga">Are you sure?</h1>
          <div className="middlecontent">
            <p>bankName</p>
            <p>accNum</p>
            <p>accType(saving/current)</p>
            <p>ifscCode</p>
          </div>

          <div className="btnc">
            <div onClick={closePayModal} className="btn">
              Cancel
            </div>
            <div className="btn">Pay</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pay;
