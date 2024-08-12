import React, { useState, useEffect } from 'react';
import "./CourseList.css";
import { db } from '../../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods

import eye from "./assests/eye.png";
import deleteicon from "./assests/delete.png";
import edit from "./assests/edit.png";

import Installments from "./Installments/Installments";
import AddCourse from './AddCourse/AddCourse';
import EditCourse from './EditCourse/EditCourse';
import DeleteCourse from './DeleteCourse/DeleteCourse';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);

  const [showInstallment, setShowInstallment] = useState(false); // State to control the display of the modal
  const [showAddCourse, setShowAddCourse] = useState(false)
  const [showEditCourse, setShowEditCourse] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [selectedCourseId, setSelectedCourseId] = useState(null);

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

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };


  // add 
  const handleAddCourse = () => {
    setShowAddCourse(true); // Show the modal when the add icon is clicked
  };
  const handleCloseAddCourse = () => {
    setShowAddCourse(false); // Hide the modal when close button is clicked
  };


  // installment 
  const handleEyeClick = (courseId) => {
    setSelectedCourseId(courseId);
    setShowInstallment(true); // Show the modal when the eye icon is clicked
  };
  const handleCloseInstallment = () => {
    setShowInstallment(false); // Hide the modal when close button is clicked
  };


  // delete 
  const handleDeleteClick = (courseId) => {
    setSelectedCourseId(courseId);
    setShowDelete(true); // Show the modal when the delete icon is clicked
  };
  const handleCloseDelete = () => {
    setShowDelete(false); // Hide the modal when close button is clicked
  };


  // edit 
  const handleEditCourse = (courseId) => {
    setSelectedCourseId(courseId);
    setShowEditCourse(true); // Show the modal when the edit icon is clicked
  };
  const handleCloseEditCourse = () => {
    setShowEditCourse(false); // Hide the modal when close button is clicked
  };

  return (
    <div className='courselist'>
      <div className="courseheader">
        <h1 className="heading">Course List</h1>
        <button className="btn" onClick={handleAddCourse}>Add a New Course +</button>
      </div>

      <div className="courselist">
        <div className='tablecon'>
          <table className='table' cellSpacing={0}>
            <thead className='tablehead'>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
                <th>Trainer Id </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='tablebody'>
              {courses.slice(0, displayCount).map((course) => (
                <tr key={course.id}>
                  <td>{course.id.slice(0,7) + "..." || "Not Found"}</td>
                  <td>{course.courseName}</td>
                  <td>{course.startDate}</td>
                  <td>{course.endDate}</td>
                  <td>{course.coursePrice}</td>
                  <td>{course.selectedTrainer.slice(0,7) + "..." || "Not Found"}</td>
                  <td className='btns'>
                    <img className='icon' src={eye} alt="View" onClick={() => handleEyeClick(course.id)} />
                    <img className='icon' src={edit} alt="Edit" onClick={() => handleEditCourse(course.id)} />
                    <img className='icon' src={deleteicon} alt="Delete" onClick={() => handleDeleteClick(course.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {courses.length > displayCount && (
            <button className="btn-load-more" onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      </div>

      {/* Render components when their respective states are true */}
      {showInstallment && <Installments showInstallment={showInstallment} closeInstallment={handleCloseInstallment} courseId={selectedCourseId} />}
      {showAddCourse && <AddCourse showAddCourse={showAddCourse} closeAddCourse={handleCloseAddCourse} />}
      {showEditCourse && <EditCourse showEditCourse={showEditCourse} closeEditCourse={handleCloseEditCourse} courseId={selectedCourseId} />}
      {showDelete && <DeleteCourse showDelete={showDelete} closeDelete={handleCloseDelete} courseId={selectedCourseId} />}
    </div>
  );
};

export default CourseList;
