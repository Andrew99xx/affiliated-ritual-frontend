import React, { useState } from 'react';
import "./CourseList.css";
import data from "./Data";
import eye from "./eye.png";
import deleteicon from "./delete.png";
import edit from "./edit.png";
import Installments from "../../../../components/installments/Installments";
import AddCourse from '../../../../components/AddCourse/AddCourse';
import EditCourse from '../../../../components/EditCouse/EditCourse';
import Delete from '../../../../components/Delete/Delete';

const Couselist = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const [showInstallment, setShowInstallment] = useState(false); // State to control the display of the modal
  const [showAddCourse, setShowAddCourse]=useState(false)
  const [showEditCourse, setShowEditCourse]=useState(false)
  const [showDelete, setShowDelete]=useState(false)
  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

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
  };
  const handleCloseInstallment = () => {
    setShowInstallment(false); // Hide the modal when close button is clicked
  };
  const handleCloseDelete = () => {
    setShowDelete(false); // Hide the modal when close button is clicked
  };
  const handleCloseAddCourse = () => {
    setShowAddCourse(false); // Hide the modal when close button is clicked
  };
  const handleCloseEditCourse = () => {
    setShowEditCourse(false); // Hide the modal when close button is clicked
  };

  return (
    <div className='courselist'>
      <div className="courseheader">
        <h1 className="heading">Course List</h1>
        <a className="btn" onClick={handleAddCourse}>Add a New Course +</a>
      </div>

      <div className="courselist">
        <div className='tablecon'>
          <table className='table' cellSpacing={0}>
            <thead className='tablehead'>
              <tr>
                <th>ID</th>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
