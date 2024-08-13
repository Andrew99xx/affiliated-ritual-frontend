import React, { useEffect, useState } from "react";
import close from "./blackcr.png";
import "./AddCourse.css";

import { collection, addDoc } from "firebase/firestore";
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../../../firebase-config.js";

import { getClubTrainers } from "../../../../../service/getUsers/getClubTrainers.js";

const AddCourse = ({ showAddCourse, closeAddCourse }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [formState, setFormState] = useState({
    courseName: '',
    courseDuration: 1,
    startDate: '',
    endDate: '',
    coursePrice: '',
    registrationFees: '',
    numInstallments: 1,
    numModules: 1,
    selectedTrainer: '',
    modules: [{ name: '', description: '', date: '' }],
    installments: [{ date: '', price: '' }],
  });

  const [clubTrainers, setClubTrainers] = useState([]);

  useEffect(() => {
    const fetchClubTrainers = async () => {
      const trainers = await getClubTrainers();
      setClubTrainers(trainers);
    };
    fetchClubTrainers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === 'courseDuration') {
      const duration = parseInt(value);
      const endDate = calculateEndDate(formState.startDate, duration);
      setFormState({
        ...formState,
        courseDuration: duration,
        numInstallments: duration,
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

    const updatedInstallments = updatedModules.map(module => ({
      date: module.date,
      price: (formState.coursePrice / updatedModules.length).toFixed(2)
    }));

    setFormState({
      ...formState,
      modules: updatedModules,
      installments: updatedInstallments,
      numInstallments: updatedModules.length,
      courseDuration: updatedModules.length,
    });
  };

  const handleNumModulesChange = (event) => {
    const modules = parseInt(event.target.value);
    const updatedModules = Array.from({ length: modules }, (_, i) => formState.modules[i] || { name: '', description: '', date: '' });

    const updatedInstallments = updatedModules.map(module => ({
      date: module.date,
      price: (formState.coursePrice / modules).toFixed(2)
    }));

    setFormState({
      ...formState,
      numModules: modules,
      modules: updatedModules,
      installments: updatedInstallments,
      numInstallments: modules,
      courseDuration: modules,
    });
  };

  // const handleAddCourse = async () => {
  //   try {
  //     await addDoc(collection(db, "courses"), formState);
  //     alert("Course added successfully");
  //     closeAddCourse();
  //   } catch (e) {
  //     console.error("Error adding course: ", e);
  //   }
  // };

  const handleAddCourse = async () => {
    try {
      let courseImageUrl = "";
      
      if (selectedFile) {
        const storageRef = ref(storage, `images/clubAdmin/courseImages/${selectedFile.name}`);
        const snapshot = await uploadBytes(storageRef, selectedFile);
        courseImageUrl = await getDownloadURL(snapshot.ref);
      }
  
      const courseData = {
        ...formState,
        courseImage: courseImageUrl,
      };
  
      await addDoc(collection(db, "courses"), courseData);
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

            <p>Upload course image</p>
            <input
              type="file"
              className="inputinstall"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />

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
              <h3>Select Trainer</h3>
              <select
                className="inputinstall"
                name="selectedTrainer"
                value={formState.selectedTrainer}
                onChange={handleChange}
              >
                <option value="" disabled>Select Instructor</option>
                {clubTrainers.map((instructor, index) => (
                  <option
                    key={index}
                    value={instructor.id}
                  >
                    {instructor.firstName}
                  </option>
                ))}
              </select>
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

            <div className="sep">
              <h3>Installments</h3>
              <p>Number of Installments</p>
              <input
                type="number"
                className="inputinstall"
                placeholder="Number of installments"
                min={1}
                name="numInstallments"
                value={formState.numInstallments}
                readOnly
              />
              <div>
                {Array.from({ length: formState.numModules }, (_, index) => (
                  <div key={index}>
                    <p>Installment {index + 1}</p>
                    <input
                      type="text"
                      className="inputinstall"
                      placeholder={`Installment ${index + 1} Price`}
                      value={formState.installments[index]?.price || ''}
                      readOnly
                    />
                    <input
                      type="date"
                      className="inputinstall"
                      placeholder={`Installment ${index + 1} Date`}
                      value={formState.installments[index]?.date || ''}
                      readOnly
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p>Course Duration<span className="small"> In months</span></p>
              <input
                type="number"
                className="inputinstall"
                placeholder="Enter Duration"
                min={1}
                name="courseDuration"
                value={formState.courseDuration}
                readOnly
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

          <div className="btnc">
            <div className="btn" onClick={handleAddCourse}>Add Now</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddCourse;
