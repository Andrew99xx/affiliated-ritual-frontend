import React from "react";
import "./Register.css";
const LeaderRegister = () => {
  return (
    <div className="Register">
      <div className="container">
        <div>
          <h3 className="logo">Dummy logo</h3>
        </div>
        <div className="heading">Registeration</div>

        <div className="formcontainer">
          <p>
            First Name <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Enter first name"
          />
          <p>
            Last Name <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Enter Last name"
          />
          <p>
            Email <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="mail@simmmple.com"
          />
          <p>
            Date of Birth <sup>*</sup>
          </p>
          <input
            type="date"
            className="input"
          />
          <p>
            Adhar number <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Adhar Number"
          />

          <p>
            Pan Number <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Pan Number"
          />

          <p>
            Address <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Address"
          />


          <h3>Bank Details</h3>
          <p>
            Account number <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Account Number"
          />

          <p>
            Account Type <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Account Type"
          />

          <p>
            Ifsc Code <sup>*</sup>
          </p>
          <input
            type="text"
            className="input"
            placeholder="Ifsc Code"
          />

<p>
            Transation Proof <sup>*</sup>
          </p>
          <input
            type="file"
            className="input"
            placeholder="Ifsc Code"
          />
          <button className="btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default LeaderRegister;
