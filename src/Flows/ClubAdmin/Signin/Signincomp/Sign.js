import React, { useState } from 'react';
import "../Signin.css";
import logo from "../../../../logo.png"
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// sign in components - just entering the email
const Sign = ({ onSignInClick }) => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  // calling onSignInClick 
  // also passing the value 
  const handleSignIn = () => {
    if (!email || !phone) {
      setMessage('Please enter your email and phone number');
      return;
    }
    // signIn or verify process
    // onSignInClick(email, `${phone}`);
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
        <p>Enter Email <sup>*</sup></p>
        <input
          type="text"
          className="input"
          placeholder='mail@simmmple.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Enter Phone <sup>*</sup></p>
        {/* <input
          type="tel"
          className="input"
          placeholder='9876543210'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> */}
        <PhoneInput
          international
          defaultCountry="IN"
          value={phone}
          onChange={setPhone}
          placeholder="Enter phone number"
          className="input"
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