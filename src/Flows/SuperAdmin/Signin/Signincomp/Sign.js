import React from 'react';
import "../Signin.css";
import logo from "../../../../logo.png"

const Sign = ({ onSignInClick }) => {
  const handleSignIn = () => {
    onSignInClick();
  };

  return (
    <div className="container">
      <div>
        <h3 className="logo">
        <img width={300} src={logo} />
          </h3>
      </div>
      <div className="heading">Sign In</div>
      <div className="subheading">Enter your email to sign in!</div>

      <div className="formcontainer">
        <p>Email <sup>*</sup></p>
        <input type="text" className="input" placeholder='mail@simmmple.com' />
        <button onClick={handleSignIn} className="btn">Sign In</button>
      </div>
    </div>
  );
}

export default Sign;