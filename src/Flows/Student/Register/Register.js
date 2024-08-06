import React, { useState, useEffect } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";

import "./Register.css";
import OtpInputContainer from "../Signin/Signincomp/OtpInputContainer.js";

import { auth, db } from "../../../firebase-config.js";
import { findUserIdByReferral } from "../../../service/findUserIdByReferral.js";
import { findCoursePriceById } from "../../../service/findCoursePriceById.js";
import { updateUserEarnings } from "../../../service/updateUserEarnings.js";
import { getCurrentTimestamp } from "../../../service/getCurrentTimestamp.js";


const StudentRegister = ({ onToggle }) => {
  const [courses, setCourses] = useState([]);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');
  const [uid, setUid] = useState('');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    courseId: "",
    courseIdsArray: [], // Updated to match the key
    dateOfBirth: "",
    aadharNumber: "",
    panNumber: "",
    address: "",
    accountNumber: "",
    accountType: "",
    ifscCode: "",
    referralId: "",
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

  // Fetch courses from Firestore
  useEffect(() => {
    const fetchCourses = async () => {
      const courseCollection = collection(db, "courses");
      const courseSnapshot = await getDocs(courseCollection);
      const courseList = courseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCourses(courseList);
    };
    fetchCourses();
  }, []);


  const handleOtpChange = (otpComing) => {
    setOtp(otpComing);
  };

  const generateMyARID = () => {
    const randomNumbers = Math.floor(100000 + Math.random() * 900000);
    return `TL${randomNumbers}`;
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
          // fetching the data if exists & updating formData
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



  const addUserToFirestore = async () => {
    try {
      // updating data in firestore 
      // Add uid to formData
      const updatedFormData = { ...formData, uid: uid };
      await setDoc(doc(db, "users", uid), updatedFormData, { merge: true });
      alert("Registration successful! User data saved to Firestore!");
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
      alert("Error adding user to Firestore: ", error.message);
    }
  };


  // handle input changes 


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "courseId") {
      setFormData((prevData) => {
        // Check if courseId is already in courseIdsArray
        const isCourseIdPresent = prevData.courseIdsArray && prevData.courseIdsArray.includes(value);

        return {
          ...prevData,
          courseId: value,
          courseIdsArray: isCourseIdPresent
            ? prevData.courseIdsArray // Do not modify if courseId already exists
            : [...(prevData.courseIdsArray || []), value], // Add courseId if it doesn't exist
        };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  const handleRegister = async (e) => {
    e.preventDefault();

    const updatedAt = getCurrentTimestamp();
    setFormData({ ...formData, updatedAt })

    // Check if referral ID is provided, exits is our database or not 
    if (formData.referralId && formData.courseId && uid) {
      // do the money distribution things
      // add type checking here
      const referringUserId = await findUserIdByReferral(formData.referralId);
      const coursePrice = await findCoursePriceById(formData.courseId);

      if (referringUserId == null || coursePrice == null) {
        alert("Invalid referral ID or course ID");
      }

      if (referringUserId !== null) {
        updateUserEarnings(referringUserId, coursePrice, uid)
      }
    }

    // If referral ID is valid or not provided, still proceed with the registration
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
          <h3 className="logo">Dummy logo</h3>
        </div>
        <div className="heading">Registration</div>
        <form className="formcontainer">

          <div id="recaptcha-container"></div>

          <p>Phone Number <sup>*</sup></p>
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
          <input
            type="text"
            className="input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />

          <p>Date of Birth <sup>*</sup></p>
          <input type="date" className="input" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />

          <p>Aadhar Number <sup>*</sup></p>
          <input type="text" className="input" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder="Aadhar Number" required />

          <p>Pan Number <sup>*</sup></p>
          <input type="text" className="input" name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="Pan Number" required />

          <p>Address <sup>*</sup></p>
          <input type="text" className="input" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />

          <p>Select a course <sup>*</sup></p>
          <select
            className="selectCourse"
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a course</option>
            {courses.map((course, index) => (
              <option
                key={index}
                value={course.id}
              >
                {course.courseName}
              </option>
            ))}
          </select>

          <p>Referral ID</p>
          <input
            type="text"
            className="input"
            name="referralId"
            value={formData.referralId}
            onChange={handleChange}
            placeholder="Enter Referral ID"
          />

          <h3>Bank Details</h3>
          <p>Account Number <sup>*</sup></p>
          <input type="text" className="input" name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" required />
          <p>Account Type <sup>*</sup></p>
          <input type="text" className="input" name="accountType" value={formData.accountType} onChange={handleChange} placeholder="Account Type" required />
          <p>Ifsc Code <sup>*</sup></p>
          <input type="text" className="input" name="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder="Ifsc Code" required />

          {/* you may change the value of Register to Update, if user is already registered */}
          <button className="btn" onClick={handleRegister}>Register</button>

          <p className="alr">Already a member? <span onClick={onToggle}>Sign in</span></p>

          {/* keep this recaptcha-container within the form, may be external css may intefere in css */}
        </form>
      </div>

      {message && <div>{message}</div>}
    </div>
  );
};

export default StudentRegister;
