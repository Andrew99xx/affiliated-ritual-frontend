import React, { useEffect, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Updated imports

import "./AddTeamLeader.css";
import logo from "../../../../logo.png"

import { auth, db } from "../../../../firebase-config.js";
import OtpInputContainer from './OtpInputContainer/OtpInputContainer.js';
import { notification } from "antd";

const AddTeamLeader = () => {
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');
  const [uid, setUid] = useState('');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    adharNumber: "",
    panNumber: "",
    address: "",
    accountNumber: "",
    accountType: "",
    ifscCode: ""
  });

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log('reCAPTCHA solved');
      }
    });

    // Cleanup on component unmount
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  const handleOtpChange = (otpComing) => {
    setOtp(otpComing);
  };

  const sendVerificationCode = (e) => {
    e.preventDefault();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formData.phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setMessage('OTP sent to your phone');
        alert('OTP sent to your phone');
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        setMessage('Failed to send OTP. Please try again.');
        alert('Failed to send OTP. Please try again.');
      });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    if (!confirmationResult) {
      setMessage('First request the OTP');
      notification.info({
        message: 'OTP Request Needed',
        description: 'First request the OTP',
        placement: 'topRight',
        duration: 3, // Display for 3 seconds
      });      return;
    }
    confirmationResult.confirm(otp)
      .then((result) => {
        const user = result.user;
        setUid(user.uid);
        setMessage(`Phone number verified! User: ${user.uid}`);
        alert(`Phone number verified! User: ${user.uid}`);
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        setMessage('Failed to verify OTP. Please try again.');
        alert('Failed to verify OTP. Please try again.');
      });
  };

  const addUserToFirestore = async () => {
    try {
      await setDoc(doc(db, "users", uid), { // Updated to setDoc
        uid: uid,
        ...formData
      });
      alert("Registration successful! User data saved to Firestore!");
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
      alert("Error adding user to Firestore: ", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (uid) {
      addUserToFirestore();
    } else {
      alert('Please verify OTP first');
    }
  };

  return (
    <div className="AddTeamLeader">
      <div className="container">
        <div>
          <h3 className="logo">
          <img width={300} src={logo} />

          </h3>
        </div>
        <div className="heading">Registration</div>
        <form className="formcontainer">

          <p>Phone <sup>*</sup></p>
          <input
            type="tel"
            className="input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            required
          />
          <button
            onClick={sendVerificationCode}
            className="btn"
          >GET OTP
          </button>

          <p>Enter Otp <sup>*</sup></p>
          <OtpInputContainer onOtpChange={handleOtpChange} />

          <button
            onClick={verifyOtp}
            className="btn">
            Verify OTP
          </button>


          <p>First Name <sup>*</sup></p>
          <input
            type="text"
            className="input"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
          <p>Last Name <sup>*</sup></p>
          <input
            type="text"
            className="input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
          <p>Email <sup>*</sup></p>
          <input
            type="email"
            className="input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="mail@simmmple.com"
            required
          />


          <p>Date of Birth <sup>*</sup></p>
          <input type="date" className="input" name="dob" value={formData.dob} onChange={handleChange} required />
          <p>Adhar Number <sup>*</sup></p>
          <input type="text" className="input" name="adharNumber" value={formData.adharNumber} onChange={handleChange} placeholder="Adhar Number" required />
          <p>Pan Number <sup>*</sup></p>
          <input type="text" className="input" name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="Pan Number" required />
          <p>Address <sup>*</sup></p>
          <input type="text" className="input" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
          <h3>Bank Details</h3>
          <p>Account Number <sup>*</sup></p>
          <input type="text" className="input" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" required />
          <p>Account Type <sup>*</sup></p>
          <input type="text" className="input" name="accountType" value={formData.accountType} onChange={handleChange} placeholder="Account Type" required />
          <p>Ifsc Code <sup>*</sup></p>
          <input type="text" className="input" name="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder="Ifsc Code" required />
          <button className="btn" onClick={handleRegister}>Register</button>
        </form>
      </div>
      <div id="recaptcha-container"></div>
      {message && <div style={{ color: 'red' }}>{message}</div>}
    </div>
  );
};

export default AddTeamLeader;
