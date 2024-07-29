<<<<<<< HEAD

import React from 'react'
import "./Delete.css"

import close from "./close.png"
import log from "./log.png"
const Delete = ({ showDelete, closeDelete }) => {
  return (
    <div className={showDelete ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
          <div className="closebtn" onClick={closeDelete}>
              <img src={close} alt="" />
          </div>
          <div className="mainc">
              <img src={log} alt="" />
              <h1 className="heading">Are you sure?</h1>
<p className='para'>Do you really want to delete these records? This process cannot be undone.</p>
              <div className="btnc">
                  <div onClick={closeDelete} className="btn">Cancel</div>
                  <div className="btn">Delete</div>
              </div>
          </div>
        
      </section>
    </div>
  )
}

export default Delete
=======
import React, { useState, useEffect } from 'react';
import "./Delete.css";
import close from "./close.png";
import log from "./log.png";

import { db } from '../../firebase-config';
import { doc, getDoc, deleteDoc } from "firebase/firestore"; // Import Firestore methods

const Delete = ({ showDelete, closeDelete, courseId }) => {
  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    if (courseId) {
      const fetchCourseData = async () => {
        const courseRef = doc(db, "courses", courseId);
        const courseSnap = await getDoc(courseRef);
        if (courseSnap.exists()) {
          const courseData = courseSnap.data();
          setCourseName(courseData.name);
        } else {
          console.log("No such document!");
        }
      };

      fetchCourseData();
    }
  }, [courseId]);

  const handleDeleteCourse = async () => {
    try {
      const courseRef = doc(db, "courses", courseId);
      await deleteDoc(courseRef);
      console.log('Course deleted successfully');
      alert("Course deleted successfully");
      closeDelete();
    } catch (e) {
      console.error("Error deleting course: ", e);
    }
  };

  return (
    <div className={showDelete ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="closebtn" onClick={closeDelete}>
          <img src={close} alt="Close" />
        </div>
        <div className="mainc">
          <img src={log} alt="Log" />
          <h1 className="heading">Are you sure?</h1>
          <p className='para'>
            Do you really want to delete the course "<strong>{courseName}</strong>"? This process cannot be undone.
          </p>
          <div className="btnc">
            <div onClick={closeDelete} className="btn">Cancel</div>
            <div onClick={handleDeleteCourse} className="btn">Delete</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Delete;
>>>>>>> 11cb80b (major update)
