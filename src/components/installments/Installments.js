import React from 'react';
import "./installments.css";
import close from "./blackcr.png";

const Installments = ({ showInstallment, closeInstallment }) => {
  return (
    <div className={showInstallment ? "modal display-block" : "modal display-none"}>
      <section className="modal-main1">

          <div className="modal1header">
              <div className="closebtn" onClick={closeInstallment}>
          <img src={close} alt="Close" />
        </div>
         <h1 className="heading">Installments</h1>
          </div>
        
        <div className="mainc">
         

          <div className="inputconteianer">
            <div className="box1">
                <p>Installments 1 </p>
                <input type="text" className="inputinstall" value="₹1500.00                12-05-2024" readonly />
            </div>
            <div className="box1">
            <p>Installments 1 </p>

            <input type="text" className="inputinstall" value="₹1500.00                12-05-2024" readonly />
            </div>
            <div className="box1">
            <p>Installments 1 </p>

            <input type="text" className="inputinstall" value="₹1500.00                12-05-2024" readonly />
            </div>
            <div className="box1">
            <p>Installments 1 </p>

            <input type="text" className="inputinstall" value="₹1500.00                12-05-2024" readonly />
            </div>
            <div className="box1">
            <p>Installments 1 </p>

            <input type="text" className="inputinstall" value="₹1500.00                12-05-2024" readonly />

            </div>
            <div className="box1">
            <p>Installments 1 </p>

            <input type="text" className="inputinstall" value="₹1500.00                12-05-2024" readonly />
            </div>
          </div>

          <div className="btnc">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Installments;
