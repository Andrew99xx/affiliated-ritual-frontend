import React from "react";
import "../Signin.css";
import OtpInputContainer from "./OtpInputContainer";

const Signotp = () => {
  return (
    <div className="container">
      <div>
        <h3 className="logo">Dummy logo</h3>
      </div>
      <div className="heading">Enter OTP</div>
      <div className="subheading">Enter your OTP to sign in!</div>


      <div className="formcontainer">
        <input type="text" className="input" value="mail@simmmple.com" readonly />
        <p>Enter OTP</p>
        <OtpInputContainer/>

        <div className="info">
          <p className="flex">
            
            <input type="checkbox" />
            Keep me logged in
          </p>
          <p>Resend OTP</p>
        </div>

        <a href="#" className="btn">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Signotp;
