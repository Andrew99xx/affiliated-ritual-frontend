import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import styles from "../../../styles/Register.module.css"


import { auth, db } from "../../../firebase-config";
// import OtpInputContainer from "../Signin/Signincomp/OtpInputContainer";
import { getCurrentTimestamp } from "../../../service/time/getCurrentTimestamp";
import { notification } from "antd";
import OtpInputContainer from "../../../components/FlowComponents/OtpInputContainer/OtpInputContainer";
import RegisterLogo from "../../../components/CssComponents/RegisterLogo/RegisterLogo";
import ArLogo from "../../../components/CssComponents/ArLogo/ArLogo";
import PhoneInputComponent from "../../../components/CssComponents/PhoneInput/PhoneInputComponent";
import ButtonComponent from "../../../components/CssComponents/ButtonComponent/ButtonComponent";

const LeaderRegister = ({ onToggle }) => {
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
    userTypes: "team_leader",
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

  const sendVerificationCode = async (e) => {
    e.preventDefault();

    // const appVerifier = window.recaptchaVerifier;
    // signInWithPhoneNumber(auth, `+91${formData.phone}`, appVerifier)
    //   .then((result) => {
    //     setConfirmationResult(result);
    //     setMessage('OTP sent to your phone');
    //     alert('OTP sent to your phone');
    //   })
    //   .catch((error) => {
    //     console.error('Error sending OTP:', error);
    //     setMessage('Failed to send OTP. Please try again.');
    //     alert('Failed to send OTP. Please try again.');
    //   });

    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, formData.phone, appVerifier);
      setConfirmationResult(result);
      setMessage('OTP sent to your phone');
      alert('OTP sent to your phone');
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Failed to send OTP. Please try again.');
      alert('Failed to send OTP. Please try again.');
    }
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
      }); return;
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
          // fetching the data if exists & updating formData
          const existingData = userDocSnapshot.data();
          setFormData(existingData);
        } else {
          // If user data does not exist, generate a new myARID
          const createdAt = getCurrentTimestamp();
          const myARID = generateMyARID();
          setFormData(prevData => ({ ...prevData, createdAt, myARID }));
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
    return `TL${randomNumbers}`;
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

  // handle changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updatePhoneNumber = (phoneNumber) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: phoneNumber,
    }));
  };



  // if uid present then data savings & updation
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
    <div className={styles.RegisterBackground}>
      <div className={styles.RegisterContainer}>

        <div className={styles.RegisterImage}>
          <RegisterLogo />
        </div>

        <div className={styles.formSection}>
          <ArLogo />
          <div className={styles.headingText}> Team Leader Registration</div>
          <form className={styles.formContainer}>
            <div id="recaptcha-container"></div>
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}>Phone Number <sup>*</sup></div>
              <PhoneInputComponent
                value={formData.phone}
                onChange={updatePhoneNumber}
              />
            </div>


            <ButtonComponent
              onClick={sendVerificationCode}
              className={""}
              buttonText={"Send OTP"}
            />

            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}>Enter OTP <sup>*</sup></div>
              <OtpInputContainer onOtpChange={handleOtpChange} />
            </div>

            <ButtonComponent
              onClick={verifyOtp}
              className={""}
              buttonText={"Verify OTP"}
            />


            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}> Name <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                required
              />
            </div>
            <div className={styles.labelInputWrapper}>
              <div className={styles.Label}>Last Name <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                required
              />
            </div>
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}>Email <sup>*</sup></div>
              <input
                type="email"
                className={styles.Input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="mail@simmmple.com"
                required
              />
            </div>
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}> of Birth <sup>*</sup></div>
              <input
                type="date"
                className={styles.Input}
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div >
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}>Aadhar Number <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="Aadhar Number"
                required
              />
            </div >
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}> Number <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                placeholder="Pan Number"
                required
              />
            </div >
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}>Address <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
              />
            </div >
            <h3 className={styles.headingText}>Bank Details</h3>
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}>Account Number <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
                required
              />
            </div >
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}>Account Type <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                placeholder="Account Type"
                required
              />
            </div >
            <div className={styles.labelInputWrapper}>
              <div className={styles.labelText}> Code <sup>*</sup></div>
              <input
                type="text"
                className={styles.Input}
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                placeholder="IFSC Code"
                required
              />
            </div>





            <ButtonComponent
              onClick={handleRegister}
              className={""}
              buttonText={"Register"}
            />


            <Link
              to="/teamleader?action=login"
              style={{
                textDecoration: 'none',
              }}
            >
              <div className={styles.alr}>already a member? <span>Login</span></div>
            </Link>

          </form >
        </div >
      </div >
    </div >
  );
};

export default LeaderRegister;
