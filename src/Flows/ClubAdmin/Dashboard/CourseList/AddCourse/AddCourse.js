import React, { useState } from "react";
import close from "./blackcr.png";
import "./AddCourse.css";

import { db } from "../../../../../firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

const AddCourse = ({ showAddCourse, closeAddCourse }) => {
  const [formState, setFormState] = useState({
    courseName: '',
    courseDuration: 1,
    selectedDate: '',
    startDate: '',
    endDate: '',
    coursePrice: '',
    registrationFees: '',
    numInstallments: 1,
    numModules: 1,
    selectedInstructor: '',
    modules: [{ name: '', description: '', date: '' }],
    installments: [{ date: '' }],
  });

  const instructors = ["Instructor 1", "Instructor 2", "Instructor 3"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === 'courseDuration') {
      const duration = parseInt(value);
      const endDate = calculateEndDate(formState.startDate, duration);
      setFormState({
        ...formState,
        courseDuration: duration,
        numInstallments: duration - 1,
        endDate
      });
    }

    if (name === 'startDate') {
      const endDate = calculateEndDate(value, formState.courseDuration);
      setFormState({ ...formState, startDate: value, endDate });
    }
  };

  const calculateEndDate = (startDate, duration) => {
    if (startDate && duration) {
      const start = new Date(startDate);
      start.setMonth(start.getMonth() + duration);
      return start.toISOString().split('T')[0];
    }
    return '';
  };

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...formState.modules];
    updatedModules[index] = { ...updatedModules[index], [field]: value };
    setFormState({ ...formState, modules: updatedModules });
  };

  const handleInstallmentChange = (index, value) => {
    const updatedInstallments = [...formState.installments];
    updatedInstallments[index] = { ...updatedInstallments[index], date: value };
    setFormState({ ...formState, installments: updatedInstallments });
  };

  const handleNumModulesChange = (event) => {
    const modules = parseInt(event.target.value);
    const updatedModules = Array.from({ length: modules }, (_, i) => formState.modules[i] || { name: '', description: '', date: '' });
    setFormState({ ...formState, numModules: modules, modules: updatedModules });
  };

  const handleAddCourse = async () => {
    try {
      await addDoc(collection(db, "courses"), formState);
      console.log('Course added:', formState);
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
              name="courseName"
              value={formState.courseName}
              onChange={handleChange}
            />

            <p>Upload image</p>
            <input
              type="file"
              className="inputinstall"
              accept="image/*"
            />

            <div className="tworow">
              <div>
                <p>Course Duration<span className="small"> In months</span></p>
                <input
                  type="number"
                  className="inputinstall"
                  placeholder="Enter Duration"
                  min={1}
                  name="courseDuration"
                  value={formState.courseDuration}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>Course Price</p>
                <input
                  type="text"
                  className="inputinstall"
                  placeholder="Enter Price"
                  name="coursePrice"
                  value={formState.coursePrice}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="tworow">
              <div>
                <p>Course Start Date</p>
                <input
                  type="date"
                  className="inputinstall"
                  name="startDate"
                  value={formState.startDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>Course End Date</p>
                <input
                  type="date"
                  className="inputinstall"
                  value={formState.endDate}
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
              name="registrationFees"
              value={formState.registrationFees}
              onChange={handleChange}
            />

            <div className="sep">
              <h3>Select Instructor</h3>
              <select
                className="inputinstall"
                name="selectedInstructor"
                value={formState.selectedInstructor}
                onChange={handleChange}
              >
                <option value="" disabled>Select Instructor</option>
                {instructors.map((instructor, index) => (
                  <option
                    key={index}
                    value={instructor}
                  >
                    {instructor}
                  </option>
                ))}
              </select>
            </div>

            <div className="tworow">
              {Array.from({ length: formState.numInstallments }, (_, index) => (
                <div key={index}>
                  <p>Installment {index + 1}</p>
                  <input
                    type="date"
                    className="inputinstall"
                    placeholder="Enter Date"
                    value={formState.installments[index]?.date || ''}
                    onChange={(e) => handleInstallmentChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="sep">
              <h3>Select Modules</h3>
              <p>Number of modules</p>
              <input
                type="number"
                className="inputinstall"
                placeholder="Enter Number of Modules"
                min={1}
                name="numModules"
                value={formState.numModules}
                onChange={handleNumModulesChange}
              />
              <div>
                {Array.from({ length: formState.numModules }, (_, index) => (
                  <div key={index}>
                    <p>Module {index + 1}</p>
                    <input
                      type="text"
                      className="inputinstall"
                      placeholder={`Module ${index + 1} Name`}
                      value={formState.modules[index]?.name || ''}
                      onChange={(e) => handleModuleChange(index, 'name', e.target.value)}
                    />
                    <input
                      type="text"
                      className="inputinstall"
                      placeholder={`Module ${index + 1} Description`}
                      value={formState.modules[index]?.description || ''}
                      onChange={(e) => handleModuleChange(index, 'description', e.target.value)}
                    />
                    <input
                      type="date"
                      className="inputinstall"
                      placeholder={`Module ${index + 1} Date`}
                      value={formState.modules[index]?.date || ''}
                      onChange={(e) => handleModuleChange(index, 'date', e.target.value)}
                    />
                  </div>
                ))}
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
