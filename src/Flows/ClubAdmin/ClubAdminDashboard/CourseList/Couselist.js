<<<<<<< HEAD
import React, { useState } from 'react';
import "./CourseList.css";
import data from "./Data";
import eye from "./eye.png";
import deleteicon from "./delete.png";
import edit from "./edit.png";
=======
import React, { useState, useEffect } from 'react';
import "./CourseList.css";
import { db } from '../../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods

import eye from "./eye.png";
import deleteicon from "./delete.png";
import edit from "./edit.png";


>>>>>>> 11cb80b (major update)
import Installments from "../../../../components/installments/Installments";
import AddCourse from '../../../../components/AddCourse/AddCourse';
import EditCourse from '../../../../components/EditCouse/EditCourse';
import Delete from '../../../../components/Delete/Delete';

<<<<<<< HEAD
const Couselist = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const [showInstallment, setShowInstallment] = useState(false); // State to control the display of the modal
  const [showAddCourse, setShowAddCourse]=useState(false)
  const [showEditCourse, setShowEditCourse]=useState(false)
  const [showDelete, setShowDelete]=useState(false)
=======
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

>>>>>>> 11cb80b (major update)
  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

<<<<<<< HEAD
  const handleEyeClick = () => {
    setShowInstallment(true); // Show the modal when the eye icon is clicked
  };
  const handleDeleteClick = () => {
    setShowDelete(true); // Show the modal when the eye icon is clicked
  };
  const handleAddCourse = () => {
    setShowAddCourse(true); // Show the modal when the eye icon is clicked
  };
  const handleEditCourse = () => {
    setShowEditCourse(true); // Show the modal when the eye icon is clicked
=======
  const handleAddCourse = () => {
    setShowAddCourse(true); // Show the modal when the add icon is clicked
  };
  const handleCloseAddCourse = () => {
    setShowAddCourse(false); // Hide the modal when close button is clicked
  };

  const handleEyeClick = (courseId) => {
    setSelectedCourseId(courseId);
    setShowInstallment(true); // Show the modal when the eye icon is clicked
>>>>>>> 11cb80b (major update)
  };
  const handleCloseInstallment = () => {
    setShowInstallment(false); // Hide the modal when close button is clicked
  };
<<<<<<< HEAD
  const handleCloseDelete = () => {
    setShowDelete(false); // Hide the modal when close button is clicked
  };
  const handleCloseAddCourse = () => {
    setShowAddCourse(false); // Hide the modal when close button is clicked
=======

  const handleDeleteClick = (courseId) => {
    setSelectedCourseId(courseId);
    setShowDelete(true); // Show the modal when the delete icon is clicked
  };
  const handleCloseDelete = () => {
    setShowDelete(false); // Hide the modal when close button is clicked
  };

  const handleEditCourse = (courseId) => {
    setSelectedCourseId(courseId);
    setShowEditCourse(true); // Show the modal when the edit icon is clicked
>>>>>>> 11cb80b (major update)
  };
  const handleCloseEditCourse = () => {
    setShowEditCourse(false); // Hide the modal when close button is clicked
  };

  return (
    <div className='courselist'>
      <div className="courseheader">
        <h1 className="heading">Course List</h1>
<<<<<<< HEAD
        <a className="btn" onClick={handleAddCourse}>Add a New Course +</a>
=======
        <button className="btn" onClick={handleAddCourse}>Add a New Course +</button>
>>>>>>> 11cb80b (major update)
      </div>

      <div className="courselist">
        <div className='tablecon'>
          <table className='table' cellSpacing={0}>
            <thead className='tablehead'>
              <tr>
                <th>ID</th>
<<<<<<< HEAD
                <th>First Name</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>Apr</th>
                <th>May</th>
                <th>Status</th>
                <th>Action</th> 
              </tr>
            </thead>
            <tbody className='tablebody'>
              {data.slice(0, displayCount).map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.Jan}</td>
                  <td>{item.Feb}</td>
                  <td>{item.Mar}</td>
                  <td>{item.Apr}</td>
                  <td><img className='eye' src={eye} alt="" onClick={handleEyeClick} /></td>
                  <td>status</td>
                  <td className='btns'>
                    <img onClick={handleEditCourse} className='iconedoit' src={edit} alt="" />
                    <img onClick={handleDeleteClick} className='iconedoit' src={deleteicon} alt="" />
=======
                <th>Course Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
                <th>Instructor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='tablebody'>
              {courses.slice(0, displayCount).map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.startDate}</td>
                  <td>{course.endDate}</td>
                  <td>{course.price}</td>
                  <td>{course.instructor}</td>
                  <td className='btns'>
                    <img className='icon' src={eye} alt="View" onClick={() => handleEyeClick(course.id)} />
                    <img className='icon' src={edit} alt="Edit" onClick={() => handleEditCourse(course.id)} />
                    <img className='icon' src={deleteicon} alt="Delete" onClick={() => handleDeleteClick(course.id)} />
>>>>>>> 11cb80b (major update)
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
<<<<<<< HEAD
        </div>
      </div>

      {/* Render Installments component when showInstallment is true */}
      {showInstallment && <Installments showInstallment={showInstallment} closeInstallment={handleCloseInstallment} />}
      {showAddCourse && <AddCourse showAddCourse={showAddCourse} closeAddCourse={handleCloseAddCourse} />}
      {showEditCourse && <EditCourse showEditCourse={showEditCourse} closeEditCourse={handleCloseEditCourse} />}
      {showDelete && <Delete showDelete={showDelete} closeDelete={handleCloseDelete} />}


    </div>
  );
}

export default Couselist;
=======
          {courses.length > displayCount && (
            <button className="btn-load-more" onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      </div>

      {/* Render components when their respective states are true */}
      {showInstallment && <Installments showInstallment={showInstallment} closeInstallment={handleCloseInstallment} courseId={selectedCourseId} />}
      {showAddCourse && <AddCourse showAddCourse={showAddCourse} closeAddCourse={handleCloseAddCourse} />}
      {showEditCourse && <EditCourse showEditCourse={showEditCourse} closeEditCourse={handleCloseEditCourse} courseId={selectedCourseId} />}
      {showDelete && <Delete showDelete={showDelete} closeDelete={handleCloseDelete} courseId={selectedCourseId} />}
    </div>
  );
};

export default CourseList;
>>>>>>> 11cb80b (major update)
