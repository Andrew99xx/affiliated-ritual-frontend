import React, { useState } from "react";
import "./EditGift.css";
import close from "./blackcr.png";
import Plimg from "./plimg.png";
import bin from "./bin.png";

const EditGift = ({ showEditGift, closeEditGift }) => {
  const initialPlaceholders = Array(4).fill(Plimg);
  const [images, setImages] = useState(initialPlaceholders);

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

  return (
    <div className={showEditGift ? "modal display-block" : "modal display-none"}>
      <section className="modal-main4">
        <div className="addheader">
          <h1 className="heading">Add New Gift</h1>
          <div className="closebtn" onClick={closeEditGift}>
            <img src={close} alt="Close" />
          </div>
        </div>
        <div className="mainc">
          <p className="label">Gift name</p>
          <input type="text" className="inputinstalll" placeholder="Enter Gift name" />
          <p className="label">Expired On</p>
          <input type="date" className="inputinstalll" />
          <p className="label">Coin Required</p>
          <input type="number" className="inputinstalll" placeholder="Enter Coin" min={0} />
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
            <div className="btn">Add New</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditGift;
