import React, { useState } from "react";
import close from "./blackcr.png";
import "./AddCourse.css";

import { db } from '../../firebase-config.js'
import { collection, addDoc } from "firebase/firestore";
import { courses } from "./data"; // Import the courses array

const AddCourse = ({ showAddCourse, closeAddCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coursePrice, setCoursePrice] = useState('');
  const [registrationFees, setRegistrationFees] = useState('');
  const [numInstallments, setNumInstallments] = useState(1);
  const [numModules, setNumModules] = useState(1);
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const instructors = ["Instructor 1", "Instructor 2", "Instructor 3"]; // update or fetch real instructor

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCourseDurationChange = (event) => {
    const duration = parseInt(event.target.value);
    setCourseDuration(duration);
    setNumInstallments(duration - 1);
    calculateEndDate(startDate, duration);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    calculateEndDate(event.target.value, courseDuration);
  };

  const calculateEndDate = (startDate, duration) => {
    if (startDate && duration) {
      const start = new Date(startDate);
      const end = new Date(start.setMonth(start.getMonth() + duration));
      if (!isNaN(end.getTime())) {
        setEndDate(end.toISOString().split('T')[0]);
      }
    }
  };

  const renderInstallmentInputs = () => {
    let installmentInputs = [];
    for (let i = 1; i <= numInstallments; i++) {
      installmentInputs.push(
        <div key={i}>
          <p>Installment {i}</p>
          <input type="date" className="inputinstall" placeholder="Enter Date" />
        </div>
      );
    }
    return installmentInputs;
  };

  const handleNumModulesChange = (event) => {
    const modules = parseInt(event.target.value);
    setNumModules(modules);
  };

  const renderModuleInputs = () => {
    let moduleInputs = [];
    for (let i = 1; i <= numModules; i++) {
      moduleInputs.push(
        <div key={i}>
          <p>Module {i}</p>
          <input type="text" className="inputinstall" placeholder={` Module ${i} Name`} />
          <input type="text" className="inputinstall" placeholder={` Module ${i} Description`} />
          <input type="date" className="inputinstall" placeholder={` Module ${i} Date`} />
        </div>
      );
    }
    return moduleInputs;
  };

  const handleAddCourse = async () => {
    const newCourse = {
      name: courseName,
      duration: courseDuration,
      startDate: startDate,
      endDate: endDate,
      price: coursePrice,
      registrationFees: registrationFees,
      instructor: selectedInstructor,
      modules: numModules,
      installments: numInstallments,
    };



    // firebase data store
    try {
      await addDoc(collection(db, "courses"), newCourse);
      console.log('Course added:', newCourse);
      alert("Course added successfully");
      closeAddCourse();
    } catch (e) {
      console.error("Error adding course: ", e);
    }
  };

  return (
    <div className={showAddCourse ? "modal display-block" : "modal display-none"}>
      <section className="modal-main2">
        <div className="modal1header">
          <div className="closebtn" onClick={closeAddCourse}>
            <img src={close} alt="Close" />
          </div>
          <h1 className="heading">Add a Course</h1>
        </div>

        <div className="mainc">
          <div className="inputcontainer">
            <p>Course Name</p>
            <input
              type="text"
              className="inputinstall"
              placeholder="Enter Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
            <p>Upload image</p>
            <input
              type="file"
              className="inputinstall"
              accept="image/*"
              placeholder="Upload Image"
            />
            <div className="tworow">
              <div>
                <p>Course Duration<span className="small"> In months</span></p>
                <input
                  type="number"
                  className="inputinstall"
                  placeholder="Enter Duration"
                  min={1}
                  value={courseDuration}
                  onChange={handleCourseDurationChange}
                />
              </div>
              <div>
                <p>Course Price</p>
                <input
                  type="text"
                  className="inputinstall"
                  placeholder="Enter Price"
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(e.target.value)}
                />
              </div>
            </div>

            <div className="tworow">
              <div>
                <p>Course Start Date</p>
                <input
                  type="date"
                  className="inputinstall"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>
              <div>
                <p>Course End Date</p>
                <input
                  type="date"
                  className="inputinstall"
                  value={endDate}
                  readOnly
                />
              </div>
            </div>

            <p>Registration Fees</p>
            <input
              type="number"
              className="inputinstall"
              placeholder="Enter Amount"
              min={0}
              value={registrationFees}
              onChange={(e) => setRegistrationFees(e.target.value)}
            />

            <div className="sep">
              <h3>Select Instructor</h3>
              <select
                className="inputinstall"
                value={selectedInstructor}
                onChange={(e) => setSelectedInstructor(e.target.value)}
              >
                <option value="" disabled>Select Instructor</option>
                {instructors.map((instructor, index) => (
                  <option
                    key={index}
                    value={instructor}>
                    {instructor}
                  </option>
                ))}
              </select>
            </div>

            <div className="tworow">
              {renderInstallmentInputs()}
            </div>

            <div className="sep">
              <h3>Select Modules</h3>
              <p>Number of modules</p>
              <input
                type="number"
                className="inputinstall"
                placeholder="Enter Number of Modules"
                min={1}
                value={numModules}
                onChange={handleNumModulesChange}
              />
              <div >
                {renderModuleInputs()}
              </div>
            </div>

          </div>

          <div className="btnc">
            <div className="btn" onClick={handleAddCourse}>Add Now</div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AddCourse;
