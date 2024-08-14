import React, { useState } from 'react';
import "../Signin.css";
import logo from "../../../../logo.png"


// sign in components - just entering the email
const Sign = ({ onSignInClick }) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('abc@gmail.com');
  const [phone, setPhone] = useState('');


  // calling onSignInClick 
  // also passing the value 
  const handleSignIn = () => {
    if (!email || !phone) {
      setMessage('Please enter your email and phone number');
      return;
    }
    // signIn or verify process
    onSignInClick(email, phone);
  };

  return (
    <div className="container">
      <div>
        <h3 className="logo">
          <img width={300} src={logo} />
        </h3>
      </div>

      <div className="heading">Sign</div>
      <div className="subheading">Enter your email to sign in!</div>

      <div className="formcontainer">
        {false &&
          <>

            <p>Enter Email <sup>*</sup></p>
            <input
              type="text"
              className="input"
              placeholder='mail@simmmple.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>}
        <p>Enter Phone <sup>*</sup></p>
        <input
          type="tel"
          className="input"
          placeholder='9876543210'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {
          message && <div className="sign-error">{message}</div>
        }
        <button
          onClick={handleSignIn}
          className="btn"
        >Sign In - GET OTP
        </button>
      </div>
    </div>
  );
}

export default Sign;