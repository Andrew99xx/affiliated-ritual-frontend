<<<<<<< HEAD
import React, { useState } from "react";
import close from "./blackcr.png";
import "./EditCourse.css";

const EditCourse = ({ showEditCourse, closeEditCourse }) => {
  const [courseDuration, setCourseDuration] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numInstallments, setNumInstallments] = useState(1);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
=======
import React, { useState, useEffect } from "react";
import close from "./blackcr.png";
import "./EditCourse.css";
import { db } from "../../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Import Firestore methods

const EditCourse = ({ showEditCourse, closeEditCourse, courseId }) => {
  const [courseName, setCourseName] = useState('');
  const [courseDuration, setCourseDuration] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [coursePrice, setCoursePrice] = useState('');
  const [registrationFees, setRegistrationFees] = useState('');
  const [numInstallments, setNumInstallments] = useState(1);
  const [numModules, setNumModules] = useState(1);
  const [selectedInstructor, setSelectedInstructor] = useState('');

  // this is to update change instructor 
  const instructors = ["Instructor 1", "Instructor 2", "Instructor 3"]; 

  useEffect(() => {
    if (courseId) {
      const fetchCourseData = async () => {
        const courseRef = doc(db, "courses", courseId);
        const courseSnap = await getDoc(courseRef);
        if (courseSnap.exists()) {
          const courseData = courseSnap.data();
          setCourseName(courseData.name);
          setCourseDuration(courseData.duration);
          setStartDate(courseData.startDate);
          setEndDate(courseData.endDate);
          setCoursePrice(courseData.price);
          setRegistrationFees(courseData.registrationFees);
          setSelectedInstructor(courseData.instructor);
          setNumInstallments(courseData.installments);
          setNumModules(courseData.modules);
        } else {
          console.log("No such document!");
        }
      };

      fetchCourseData();
    }
  }, [courseId]);

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
    calculateEndDate(event.target.value, courseDuration);
>>>>>>> 11cb80b (major update)
  };

  // Function to handle changes in course duration
  const handleCourseDurationChange = (event) => {
    const duration = parseInt(event.target.value);
    setCourseDuration(duration);
<<<<<<< HEAD
    setNumInstallments(duration -1);
    calculateEndDate(startDate, duration);
  };

  // Function to handle changes in start date
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    calculateEndDate(event.target.value, courseDuration);
  };

=======
    setNumInstallments(duration - 1);
    calculateEndDate(startDate, duration);
  };

>>>>>>> 11cb80b (major update)
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

<<<<<<< HEAD
=======
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
          <input type="text" className="inputinstall" placeholder={`Module ${i} Name`} />
          <input type="text" className="inputinstall" placeholder={`Module ${i} Description`} />
          <input type="date" className="inputinstall" placeholder={`Module ${i} Date`} />
        </div>
      );
    }
    return moduleInputs;
  };

  const handleEditCourse = async () => {
    const updatedCourse = {
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

    try {
      const courseRef = doc(db, "courses", courseId);
      await updateDoc(courseRef, updatedCourse);
      console.log('Course updated:', updatedCourse);
      alert("Course updated successfully");
      closeEditCourse();
    } catch (e) {
      console.error("Error updating course: ", e);
    }
  };

>>>>>>> 11cb80b (major update)
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
<<<<<<< HEAD
=======
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
>>>>>>> 11cb80b (major update)
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
<<<<<<< HEAD
                />
              </div>
            </div>
=======
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(e.target.value)}
                />
              </div>
            </div>

>>>>>>> 11cb80b (major update)
            <div className="tworow">
              <div>
                <p>Course Start Date</p>
                <input
                  type="date"
                  className="inputinstall"
                  value={startDate}
<<<<<<< HEAD
                  onChange={handleStartDateChange}
=======
                  onChange={handleDateChange}
>>>>>>> 11cb80b (major update)
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
<<<<<<< HEAD
=======

>>>>>>> 11cb80b (major update)
            <p>Registration Fees</p>
            <input
              type="number"
              className="inputinstall"
              placeholder="Enter Amount"
              min={0}
<<<<<<< HEAD
              max={0} // course price
            />
            {/* Render installment input fields */}
            <div className="tworow">
              {renderInstallmentInputs()}
            </div>
          </div>
          <div className="btnc">
            <div className="btn">Add Now</div>
          </div>
=======
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
              <div>
                {renderModuleInputs()}
              </div>
            </div>

          </div>

          <div className="btnc">
            <div className="btn" onClick={handleEditCourse}>Save Changes</div>
          </div>

>>>>>>> 11cb80b (major update)
        </div>
      </section>
    </div>
  );
};

export default EditCourse;
