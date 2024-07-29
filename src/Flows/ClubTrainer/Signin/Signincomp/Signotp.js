<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "../Signin.css";
import OtpInputContainer from "./OtpInputContainer";

const Signotp = () => {
=======
import React, { useState } from "react";
import "../Signin.css";
import OtpInputContainer from "./OtpInputContainer";


// signin components - after receiving otp
const Signotp = ({ email, phone, onOtpVerify }) => {

  const [otp, setOtp] = useState('');
  
  // otpComing from otpInputContainer.js
  const handleOtpChange = (otpComing) => {
    setOtp(otpComing);
    console.log("otp is = ", otp)
  };


  // onClick of button
  const handleSignIn = (e) => {
    e.preventDefault();
    onOtpVerify(otp)
  };

>>>>>>> 11cb80b (major update)
  return (
    <div className="container">
      <div>
        <h3 className="logo">Dummy logo</h3>
      </div>
      <div className="heading">Enter OTP</div>
      <div className="subheading">Enter your OTP to sign in!</div>

<<<<<<< HEAD

      <div className="formcontainer">
        <input type="text" className="input" value="mail@simmmple.com" readonly />
        <p>Enter OTP</p>
        <OtpInputContainer/>

        <div className="info">
          <p className="flex">
            
=======
      <div className="formcontainer">

        {/* take the value from - signin components */}
        <input type="text" className="input" value={email} readonly />
        <br />
        <input type="text" className="input" value={phone} readonly />
        <p>Enter OTP</p>
        <OtpInputContainer onOtpChange={handleOtpChange} />

        <div className="info">
          <p className="flex">
>>>>>>> 11cb80b (major update)
            <input type="checkbox" />
            Keep me logged in
          </p>
          <p>Resend OTP</p>
        </div>

<<<<<<< HEAD
        <a href="#" className="btn">
          Sign In
        </a>
=======
        <button
          onClick={handleSignIn}
          className="btn">
          Sign In - verify OTP
        </button>
        
>>>>>>> 11cb80b (major update)
      </div>
    </div>
  );
};

export default Signotp;
