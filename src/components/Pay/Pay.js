import React from "react";
import "./Pay.css";
import close from "./close.png";
import log from "./log.png";

const Pay = ({ showPayModal, closePayModal, userPayInfo }) => {
  return (
    <div className={showPayModal ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="closebtn" onClick={closePayModal}>
          <img src={close} alt="Close" />
        </div>
        <div className="mainc">
          <h1 className="headinga">Are you sure?</h1>
          <div className="middlecontent">
            <p>First Name = {userPayInfo?.firstName || "NA"} </p>
            <p>Account Number = {userPayInfo?.accountNumber || "NA"} </p>
            <p>Account Type = {userPayInfo?.accountType || "NA"}</p>
            <p>ifsc Code = {userPayInfo?.ifscCode || "NA"}</p>
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
