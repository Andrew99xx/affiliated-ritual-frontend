<<<<<<< HEAD
import React from 'react';
import "../Signin.css";

const Sign = ({ onSignInClick }) => {
  const handleSignIn = () => {
    onSignInClick();
=======
import React, { useState } from 'react';
import "../Signin.css";

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
    onSignInClick(email, phone);
>>>>>>> 11cb80b (major update)
  };

  return (
    <div className="container">
      <div>
        <h3 className="logo">Dummy logo</h3>
      </div>
<<<<<<< HEAD
      <div className="heading">Sign In</div>
      <div className="subheading">Enter your email to sign in!</div>

      <div className="formcontainer">
        <p>Email <sup>*</sup></p>
        <input type="text" className="input" placeholder='mail@simmmple.com' />
        <button onClick={handleSignIn} className="btn">Sign In</button>
=======

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
>>>>>>> 11cb80b (major update)
      </div>
    </div>
  );
}

export default Sign;