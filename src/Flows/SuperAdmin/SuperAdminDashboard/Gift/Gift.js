import React, { useState } from 'react';
import "./Gift.css";
import AddGift from '../../../../components/AddGift/AddGift';
import data from "./Data"
import Edit from "./edit.png"
import Deleteicon from "./delete.png"
import EditGift from '../../../../components/EditGift/EditGift';
import Delete from '../../../../components/Delete/Delete';
const Gift = () => {
  const [displayCount, setDisplayCount] = useState(5);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };
  const [showAddGift, setShowAddGift] = useState(false);
  const [showEditGift, setShowEditGift] = useState(false);
  const [showDelete, setShowDelete]=useState(false)


  const handleAddGift = () => {
    setShowAddGift(true);
  };
  const handleEditGift = () => {
    setShowEditGift(true);
  };
  const handleDeleteClick = () => {
    setShowDelete(true); // Show the modal when the eye icon is clicked
  };
  const handleCloseDelete = () => {
    setShowDelete(false); // Hide the modal when close button is clicked
  };

  const handleCloseEditGift = () => {
    setShowEditGift(false);
  };
  const handleCloseAddGift = () => {
    setShowAddGift(false);
  };

  return (
    <div className='Gift'>
      <div className="sl">
        <h1 className="heading">Gift</h1>
        <div className="btn" onClick={handleAddGift}>Add New Gift</div>
 </div>
        <div className="tb">
          <div className="tablecon">
            <table className="table" cellSpacing={0}>
              <thead className="tablehead">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Jan</th>
                  <th>Feb</th>
                  <th>Mar</th>
                  <th>Apr</th>
                  <th>May</th>
                  <th>June</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="tablebody">
                {data.slice(0, displayCount).map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.Jan}</td>
                    <td>{item.Feb}</td>
                    <td>{item.Mar}</td>
                    <td>{item.Apr}</td>
                    <td>{item.May}</td>
                    <td>{item.June}</td>
                    <td>{item.Total}</td>

                    <td className="btns">
                      <img  onClick={handleEditGift} src={Edit} alt="" />
                      <img onClick={handleDeleteClick}  src={Deleteicon} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

     
      {showAddGift && <AddGift showAddGift={showAddGift} closeDelete={handleCloseAddGift} />}
      {showEditGift && <EditGift showEditGift={showEditGift} closeEditGift={handleCloseEditGift} />}
      {showDelete && <Delete showDelete={showDelete} closeDelete={handleCloseDelete} />}

    </div>
  );
}

export default Gift;