import React, { useState } from "react";
import "./Register.css";
// import { register } from "../../../services/Auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../../../services/firebase-config";
import OtpInputContainer from "../Signin/Signincomp/OtpInputContainer";
import { sendOtp, verifyOtp } from "../../../service/auth";
import { db } from "../../../firebase-config";
// import { sendOtp, verifyOtp } from "../"; // Adjust the path as necessary

const StudentRegister = ({ onToggle }) => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    aadharNumber: '',
    panNumber: '',
    address: '',
    accountNumber: '',
    accountType: '',
    ifscCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = async () => {
    const phoneNumber = `+91${formData.phone}`;
    const success = await sendOtp(phoneNumber);
    if (success) {
      setIsOtpSent(true);
      console.log('OTP sent');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpSent) {
      await handleSendOtp();
    } else {
      try {
        const user = await verifyOtp(otp);
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (userDoc.exists()) {
          console.log('User already registered');
          // Handle existing user scenario
        } else {
          await setDoc(doc(db, "Users", user.uid), formData);
          console.log('User Registered Successfully!!');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
      }
    }
  };

  return (
    <div className="Register">
      <div className="container">
        <div>
          <h3 className="logo">Dummy logo</h3>
        </div>
        <div className="heading">Registration</div>
        <div className="formcontainer">
          <form onSubmit={handleSubmit}>
            <p>First Name <sup>*</sup></p>
            <input
              type="text"
              name="firstName"
              className="input"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <p>Last Name <sup>*</sup></p>
            <input
              type="text"
              name="lastName"
              className="input"
              placeholder="Enter Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <p>Phone Number <sup>*</sup></p>
            <input
              type="number"
              name="phone"
              className="input"
              placeholder="+919876543210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <p>Date of Birth <sup>*</sup></p>
            <input
              type="date"
              name="dateOfBirth"
              className="input"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
            <p>Aadhar Number <sup>*</sup></p>
            <input
              type="text"
              name="aadharNumber"
              className="input"
              placeholder="Aadhar Number"
              value={formData.aadharNumber}
              onChange={handleChange}
              required
            />
            <p>Pan Number <sup>*</sup></p>
            <input
              type="text"
              name="panNumber"
              className="input"
              placeholder="Pan Number"
              value={formData.panNumber}
              onChange={handleChange}
              required
            />
            <p>Address <sup>*</sup></p>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <h3>Bank Details</h3>
            <p>Account Number <sup>*</sup></p>
            <input
              type="text"
              name="accountNumber"
              className="input"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
            <p>Account Type <sup>*</sup></p>
            <input
              type="text"
              name="accountType"
              className="input"
              placeholder="Account Type"
              value={formData.accountType}
              onChange={handleChange}
              required
            />
            <p>Ifsc Code <sup>*</sup></p>
            <input
              type="text"
              name="ifscCode"
              className="input"
              placeholder="Ifsc Code"
              value={formData.ifscCode}
              onChange={handleChange}
              required
            />
            {!isOtpSent ? (
              <button type="button" className="btn" onClick={handleSendOtp}>Send OTP</button>
            ) : (
              <>
                <button type="submit" className="btn">Register</button>
                <OtpInputContainer setPropOTP={setOtp} />
              </>
            )}
            <div id="recaptcha-container"></div>
          </form>
          <p className="alr">Already a member? <span onClick={onToggle}> Sign in</span></p>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
