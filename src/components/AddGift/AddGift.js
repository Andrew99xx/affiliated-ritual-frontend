import React, { useState } from "react";
import "./AddGift.css";
import close from "./blackcr.png";
import Plimg from "./plimg.png";
import bin from "./bin.png";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

import { db, storage } from "../../firebase-config";


const AddGift = ({ showAddGift, closeDelete }) => {
  const initialPlaceholders = Array(4).fill(Plimg);
  const [images, setImages] = useState(initialPlaceholders);
  const [giftName, setGiftName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [coinRequired, setCoinRequired] = useState(0);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => {
      const newImages = [...prevImages];
      files.forEach((file) => {
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

  const handleAddGift = async () => {
    
    
    // Filter out placeholder images
    const validImages = images.filter((image) => image !== Plimg);

    // Upload images to Firebase Storage
    const uploadPromises = validImages.map(async (image, index) => {
      const storageRef = ref(storage, `/images/clubAdmin/giftImages/${giftName}-${index}-${Date.now()}/${image.name}`);
      await uploadBytes(storageRef, image);
      return await getDownloadURL(storageRef);
    });

    try {
      const imageUrls = await Promise.all(uploadPromises);

      // Add the gift data to Firestore
      await addDoc(collection(db, "gifts"), {
        giftName,
        expiryDate,
        coinRequired,
        imageUrls,
      });

      alert("Gift added successfully!");
      setImages(initialPlaceholders);
      setGiftName("");
      setExpiryDate("");
      setCoinRequired(0);
    } catch (error) {
      console.error("Error adding gift: ", error);
    }
  };

  return (
    <div className={showAddGift ? "modal display-block" : "modal display-none"}>
      <section className="modal-main4">
        <div className="addheader">
          <h1 className="heading">Add New Gift</h1>
          <div className="closebtn" onClick={closeDelete}>
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
            onChange={(e) => setCoinRequired(e.target.value)}
          />
          <p className="label">Images</p>
          <input
            type="file"
            className="inputinstalll"
            onChange={handleImageChange}
            multiple
          />
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
            <div className="btn" onClick={handleAddGift}>Add New</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddGift;
