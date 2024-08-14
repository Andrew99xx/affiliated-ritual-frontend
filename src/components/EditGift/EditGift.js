import React, { useState, useEffect } from "react";
import "./EditGift.css";
import close from "./blackcr.png";
import Plimg from "./plimg.png";
import bin from "./bin.png";
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Firebase imports
import { db } from "../../firebase-config";

const EditGift = ({ showEditGift, closeEditGift, selectedGiftId }) => {
  const initialPlaceholders = Array(4).fill(Plimg);
  const [images, setImages] = useState(initialPlaceholders);
  const [giftName, setGiftName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [coinRequired, setCoinRequired] = useState(0);

  useEffect(() => {
    const fetchGiftDetails = async () => {
      try {
        const giftDoc = await getDoc(doc(db, "gifts", selectedGiftId));
        if (giftDoc.exists()) {
          const giftData = giftDoc.data();
          setGiftName(giftData.giftName || '');
          setExpiryDate(giftData.expiryDate || '');
          setCoinRequired(giftData.coinRequired || 0);
          // You might want to fetch and display images too if stored in Firestore
        } else {
          alert("Gift not found");
        }
      } catch (error) {
        alert("Error fetching gift details: " + error.message);
      }
    };

    if (selectedGiftId) {
      fetchGiftDetails();
    }
  }, [selectedGiftId]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => {
      const newImages = [...prevImages];
      files.forEach((file, index) => {
        const placeholderIndex = newImages.findIndex((img) => img === Plimg);
        if (placeholderIndex !== -1) {
          newImages[placeholderIndex] = file;
        }
      });
      return newImages;
    });
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = Plimg;
      return newImages;
    });
  };

  const handleEditGift = async () => {
    try {
      const giftRef = doc(db, "gifts", selectedGiftId);
      await updateDoc(giftRef, {
        giftName,
        expiryDate,
        coinRequired
        // Include any other fields you want to update
      });
      alert("Gift updated successfully");
      closeEditGift(); // Close the modal on success
    } catch (error) {
      alert("Error updating gift: " + error.message);
    }
  };

  return (
    <div className={showEditGift ? "modal display-block" : "modal display-none"}>
      <section className="modal-main4">
        <div className="addheader">
          <h1 className="heading">Edit Gift</h1>
          <div className="closebtn" onClick={closeEditGift}>
            <img src={close} alt="Close" />
          </div>
        </div>
        <div className="mainc">
          <p className="label">Gift name</p>
          <input
            type="text"
            className="inputinstalll"
            placeholder="Enter Gift name"
            value={giftName}
            onChange={(e) => setGiftName(e.target.value)}
          />
          <p className="label">Expired On</p>
          <input
            type="date"
            className="inputinstalll"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <p className="label">Coin Required</p>
          <input
            type="number"
            className="inputinstalll"
            placeholder="Enter Coin"
            min={0}
            value={coinRequired}
            onChange={(e) => setCoinRequired(Number(e.target.value))}
          />
          <p className="label">Images</p>
          <input type="file" className="inputinstalll" onChange={handleImageChange} multiple />
          <div className="imgcontainer">
            {images.map((image, index) => (
              <div key={index} className="image-wrapper">
                {image === Plimg ? (
                  <img src={Plimg} alt="Placeholder" className="selected-img" />
                ) : (
                  <img src={URL.createObjectURL(image)} alt={`Selected ${index}`} className="selected-img" />
                )}
                {image !== Plimg && (
                  <img src={bin} alt="Delete" className="delete-icon" onClick={() => handleDeleteImage(index)} />
                )}
              </div>
            ))}
          </div>
          <div className="btnc">
            <div className="btn" onClick={handleEditGift}>Save Changes</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditGift;
