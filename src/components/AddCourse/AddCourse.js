import React, { useState } from "react";
import close from "./blackcr.png";
import "./AddCourse.css";

const AddCourse = ({ showAddCourse, closeAddCourse }) => {
  const [courseDuration, setCourseDuration] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numInstallments, setNumInstallments] = useState(1);
  const [numModules, setNumModules] = useState(1);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to handle changes in course duration
  const handleCourseDurationChange = (event) => {
    const duration = parseInt(event.target.value);
    setCourseDuration(duration);
    setNumInstallments(duration - 1);
    calculateEndDate(startDate, duration);
  };

  // Function to handle changes in start date
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    calculateEndDate(event.target.value, courseDuration);
  };

  // Function to calculate the end date based on start date and course duration
  const calculateEndDate = (startDate, duration) => {
    if (startDate && duration) {
      const start = new Date(startDate);
      const end = new Date(start.setMonth(start.getMonth() + duration));
      if (!isNaN(end.getTime())) {
        setEndDate(end.toISOString().split('T')[0]);
      }
    }
  };

  // Function to render the installment input fields dynamically
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

  // Function to handle changes in number of modules
  const handleNumModulesChange = (event) => {
    const modules = parseInt(event.target.value);
    setNumModules(modules);
  };

  // Function to render the module input fields dynamically
  const renderModuleInputs = () => {
    let moduleInputs = [];
    for (let i = 1; i <= numModules; i++) {
      moduleInputs.push(
        <div key={i}>
          <p>Module {i}</p>
          <input type="text" className="inputinstall" placeholder={` Module ${i} Name`} />
          <input type="text" className="inputinstall" placeholder={` Module ${i} Description`} />
          <input type="date" className="inputinstall" placeholder={` Module ${i} Description`} />
        </div>
      );
    }
    return moduleInputs;
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
              max={0} // course price
            />
            {/* Render installment input fields */}
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
            {/* Render module input fields */}
            <div >
              {renderModuleInputs()}
            </div></div>
          </div>
          <div className="btnc">
            <div className="btn">Add Now</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddCourse;
