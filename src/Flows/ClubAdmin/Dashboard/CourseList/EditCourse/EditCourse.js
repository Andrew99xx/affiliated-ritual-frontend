import React, { useState, useEffect } from "react";
import close from "./blackcr.png";
import "./EditCourse.css";
import { db } from "../../../../../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditCourse = ({ showEditCourse, closeEditCourse, courseId }) => {
  const [formState, setFormState] = useState({
    courseName: '',
    courseDuration: 1,
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

  useEffect(() => {
    if (courseId) {
      const fetchCourseData = async () => {
        const courseRef = doc(db, "courses", courseId);
        const courseSnap = await getDoc(courseRef);
        if (courseSnap.exists()) {
          const courseData = courseSnap.data();
          setFormState({
            courseName: courseData.courseName || '',
            courseDuration: courseData.courseDuration || 1,
            startDate: courseData.startDate || '',
            endDate: courseData.endDate || '',
            coursePrice: courseData.coursePrice || '',
            registrationFees: courseData.registrationFees || '',
            selectedInstructor: courseData.selectedInstructor || '',
            numInstallments: courseData.installments.length || 1,
            numModules: parseInt(courseData.numModules) || 1,
            modules: courseData.modules || [{ name: '', description: '', date: '' }],
            installments: courseData.installments || [{ date: '' }],
          });
        } else {
          console.log("No such document!");
        }
      };

      fetchCourseData();
    }
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => {
      const updatedState = { ...prevState, [name]: value };

      if (name === 'courseDuration') {
        const duration = parseInt(value);
        const endDate = calculateEndDate(updatedState.startDate, duration);
        updatedState.endDate = endDate;
        updatedState.numInstallments = duration - 1;
      }

      if (name === 'startDate') {
        const endDate = calculateEndDate(value, updatedState.courseDuration);
        updatedState.endDate = endDate;
      }

      return updatedState;
    });
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
    setFormState(prevState => ({ ...prevState, modules: updatedModules }));
  };

  const handleInstallmentChange = (index, value) => {
    const updatedInstallments = [...formState.installments];
    updatedInstallments[index] = { ...updatedInstallments[index], date: value };
    setFormState(prevState => ({ ...prevState, installments: updatedInstallments }));
  };

  const handleNumModulesChange = (event) => {
    const modules = parseInt(event.target.value);
    const updatedModules = Array.from({ length: modules }, (_, i) => formState.modules[i] || { name: '', description: '', date: '' });
    setFormState(prevState => ({ ...prevState, numModules: modules, modules: updatedModules }));
  };

  const handleEditCourse = async () => {
    const updatedCourse = {
      courseName: formState.courseName,
      courseDuration: formState.courseDuration,
      startDate: formState.startDate,
      endDate: formState.endDate,
      coursePrice: formState.coursePrice,
      registrationFees: formState.registrationFees,
      selectedInstructor: formState.selectedInstructor,
      modules: formState.modules,
      installments: formState.installments,
      numInstallments: formState.installments.length,
      numModules: formState.numModules.toString(),
    };

    try {
      const courseRef = doc(db, "courses", courseId);
      await updateDoc(courseRef, updatedCourse);
      console.log('Course updated:', updatedCourse);
      alert("Course updated successfully");
      closeEditCourse();
    } catch (e) {
      alert("Error updating course");
      console.error("Error updating course: ", e);
    }
  };

  return (
    <div className={showEditCourse ? "modal display-block" : "modal display-none"}>
      <section className="modal-main2">
        <div className="modal1header">
          <div className="closebtn" onClick={closeEditCourse}>
            <img src={close} alt="Close" />
          </div>
          <h1 className="heading">Edit a Course</h1>
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
                    value={instructor}>
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
            <div className="btn" onClick={handleEditCourse}>Save Changes</div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EditCourse;
