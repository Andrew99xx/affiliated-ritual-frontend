<<<<<<< HEAD
import React from "react";
import "./Register.css";

const TrainerRegister = ({ onToggle }) => {
=======
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import "./Register.css";
import { auth, db } from "../../../firebase-config.js";


const TrainerRegister = ({ onToggle }) => {
 
  // take password as input, we are missing that
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // set password here - 
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, "defaultPassword"); // Use a default password for now
      const user = userCredential.user;

      // Add additional user data to Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        ...formData
      });

      alert("Registration successful!");
      // redirect to login after registration
    } catch (error) {
      // custom handle if email already registered
      console.error("Error registering user: ", error);
      alert("Error registering user: ", error.message);
    }
  };
>>>>>>> 11cb80b (major update)
  return (
    <div className="Register">
      <div className="container">
        <div>
          <h3 className="logo">Dummy logo</h3>
        </div>
        <div className="heading">Registration</div>
<<<<<<< HEAD
        <div className="formcontainer">
          <p>First Name <sup>*</sup></p>
          <input type="text" className="input" placeholder="Enter first name" />
          <p>Last Name <sup>*</sup></p>
          <input type="text" className="input" placeholder="Enter Last name" />
          <p>Email <sup>*</sup></p>
          <input type="text" className="input" placeholder="mail@simmmple.com" />
          <p>Date of Birth <sup>*</sup></p>
          <input type="date" className="input" />
          <p>Adhar number <sup>*</sup></p>
          <input type="text" className="input" placeholder="Adhar Number" />
          <p>Pan Number <sup>*</sup></p>
          <input type="text" className="input" placeholder="Pan Number" />
          <p>Address <sup>*</sup></p>
          <input type="text" className="input" placeholder="Address" />
          <h3>Bank Details</h3>
          <p>Account number <sup>*</sup></p>
          <input type="text" className="input" placeholder="Account Number" />
          <p>Account Type <sup>*</sup></p>
          <input type="text" className="input" placeholder="Account Type" />
          <p>Ifsc Code <sup>*</sup></p>
          <input type="text" className="input" placeholder="Ifsc Code" />
          <button className="btn">Register</button>
         <p className="alr">Already a member? <span onClick={onToggle}> Sign in</span></p>
        </div>
=======
        <form className="formcontainer" onSubmit={handleSubmit}>
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
          <p>Phone <sup>*</sup></p>
          <input type="tel" className="input" name="phone" value={formData.phone} onChange={handleChange} placeholder="9876543210" required />
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
          <button className="btn" type="submit">Register</button>
          <p className="alr">Already a member? <span onClick={onToggle}>Sign in</span></p>
        </form>
>>>>>>> 11cb80b (major update)
      </div>
    </div>
  );
};

export default TrainerRegister;
