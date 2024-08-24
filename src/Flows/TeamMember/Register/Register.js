import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import "./Register.css";
import logo from "../../../logo.png"

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { auth, db } from "../../../firebase-config";
import OtpInputContainer from "../Signin/Signincomp/OtpInputContainer";
import { getCurrentTimestamp } from "../../../service/time/getCurrentTimestamp";

const TeamMemberRegister = ({ onToggle }) => {
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');
  const [uid, setUid] = useState('');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    aadharNumber: "",
    panNumber: "",
    address: "",
    accountNumber: "",
    accountType: "",
    ifscCode: "",
    userTypes: "team_member",
    referralId: "",
    myARID: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log('reCAPTCHA solved');
      }
    });

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
      alert('First request the OTP');
      return;
    }
    confirmationResult.confirm(otp)
      .then(async (result) => {
        const user = result.user;
        setUid(user.uid);
        setMessage(`Phone number verified! User: ${user.uid}`);
        alert(`Phone number verified! User: ${user.uid}`);

        // Check if the user data already exists
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          // If user data exists, use it and prevent overwriting myARID
          const existingData = userDocSnapshot.data();
          setFormData(existingData);
        } else {
          const createdAt = getCurrentTimestamp();
          // If user data does not exist, generate a new myARID
          const myARID = generateMyARID();
          setFormData(prevData => ({ ...prevData, myARID, createdAt }));
        }
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        setMessage('Failed to verify OTP. Please try again.');
        alert('Failed to verify OTP. Please try again.');
      });
  };

  const generateMyARID = () => {
    const randomNumbers = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
    return `TM${randomNumbers}`;
  };

  const addUserToFirestore = async () => {
    try {
      await setDoc(doc(db, "users", uid), formData, { merge: true });
      alert("Registration successful! User data saved to Firestore!");
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
      alert("Error adding user to Firestore: ", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updatePhoneNumber = (phoneNumber) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: phoneNumber,
    }));
  };


  const handleRegister = (e) => {
    e.preventDefault();

    const updatedAt = getCurrentTimestamp();
    setFormData({ ...formData, updatedAt })

    if (uid) {
      addUserToFirestore();
    } else {
      alert('Please verify OTP first');
    }
  };

  return (
    <div className="Register">
      <div className="container">
        <div>
          <h3 className="logo">
            <img width={300} src={logo} />
          </h3>
        </div>
        <div className="heading">Registration</div>
        <form className="formcontainer">

          <p>Phone Number <sup>*</sup></p>
          {/* <input
            type="tel"
            className="input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            required
          /> */}
          <PhoneInput
            international
            defaultCountry="IN"
            value={formData.phone}
            onChange={updatePhoneNumber} // Directly update the phone number
            placeholder="Enter phone number"
            className="input"
          />
          <button
            onClick={sendVerificationCode}
            className="btn"
          >Send OTP
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
          <input type="text"
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

          <p>Referral ID</p>
          <input
            type="text"
            className="input"
            name="referralId"
            value={formData.referralId}
            onChange={handleChange}
            placeholder="Enter Referral ID"
          />


          <p>Date of Birth <sup>*</sup></p>
          <input type="date" className="input" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
          <p>Aadhar Number <sup>*</sup></p>
          <input type="text" className="input" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder="Aadhar Number" required />
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
          <p className="alr">Already a member? <span onClick={onToggle}>Sign in</span></p>
          <div id="recaptcha-container"></div>
          {/* keep this recaptcha-container within the form, may be external css may intefere in css */}
        </form>
      </div>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default TeamMemberRegister;
