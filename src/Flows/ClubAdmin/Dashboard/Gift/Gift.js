import React, { useState, useEffect } from 'react';
import "./Gift.css";
import AddGift from '../../../../components/AddGift/AddGift';
import Edit from "./edit.png"
import Deleteicon from "./delete.png"
import EditGift from '../../../../components/EditGift/EditGift';

import DeleteGift from '../../../../components/DeleteGift/DeleteGift';

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"; // Firebase imports
import { db } from '../../../../firebase-config';

const Gift = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const [gifts, setGifts] = useState([]);
  const [selectedGiftId, setSelectedGiftId] = useState('');

  const [showAddGift, setShowAddGift] = useState(false);
  const [showEditGift, setShowEditGift] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    const fetchGifts = async () => {
      const querySnapshot = await getDocs(collection(db, "gifts")); // Fetch data from 'gifts' collection
      const giftsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGifts(giftsData); // Set the fetched gifts to state
    };

    fetchGifts();
  }, []);
  // Empty dependency array to fetch data once on component mount

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

  const handleAddGift = () => {
    setShowAddGift(true);
  };

  const handleEditGift = (id) => {
    setSelectedGiftId(id); // Set the selected gift ID
    setShowEditGift(true); // Show the edit modal
  };

  const handleDeleteClick = (id) => {
    setSelectedGiftId(id); // Set the selected gift ID
    setShowDelete(true); // Show the delete modal
  };

  const handleCloseEditGift = () => {
    setShowEditGift(false);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleCloseAddGift = () => {
    setShowAddGift(false);
  };

  // function to delete 
  const deleteSelectedGiftId = async () => {
    try {
      const giftRef = doc(db, "gifts", selectedGiftId);
      await deleteDoc(giftRef);
      setGifts(gifts.filter((gift) => gift.id !== selectedGiftId));
      setShowDelete(false); // Close the delete modal
      alert("Gift deleted successfully."); // Alert on success
    } catch (error) {
      alert("Error deleting gift: " + error.message); // Alert on error
    }
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
                <th>Gift Name</th>
                <th>Expired On</th>
                <th>Coin Required</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tablebody">
              {gifts.slice(0, displayCount).map((gift) => (
                <tr key={gift.id}>
                  <td>{gift.id}</td>
                  <td>{gift.giftName}</td>
                  <td>{gift.expiryDate}</td>
                  <td>{gift.coinRequired}</td>
                  <td className="btns">
                    <img onClick={() => handleEditGift(gift.id)} src={Edit} alt="Edit" />
                    <img onClick={() => handleDeleteClick(gift.id)} src={Deleteicon} alt="Delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {gifts.length > displayCount && (
        // Conditionally render the Load More button
        <div className="load-more">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}

      {showAddGift && <AddGift showAddGift={showAddGift} closeDelete={handleCloseAddGift} />}
      {showEditGift && (
        <EditGift
          showEditGift={showEditGift}
          closeEditGift={handleCloseEditGift}
          selectedGiftId={selectedGiftId} // Pass the selected gift ID
        />
      )}

      {showDelete && (
        <DeleteGift
          showDelete={showDelete}
          closeDelete={handleCloseDelete}
          onDeleteClick={deleteSelectedGiftId} // Pass the delete function
        />
      )}
    </div>
  );
}

export default Gift;
