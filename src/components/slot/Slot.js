import React, { useRef, useState } from "react";
import SlotCounter from "react-slot-counter";
import "./Slot.css";
import item1 from "./icons/cherries.png";
import item2 from "./icons/diamond.png";
import item3 from "./icons/lemon.png";
import item4 from "./icons/plum.png";
import item5 from "./icons/orange.png";
import item6 from "./icons/cherries.png";
import slotimg from "./slot.png";
const Slot = () => {
  // Create a ref to the SlotCounter component
  const counterRef = useRef(null);
  // Create state to hold the random images
  const [randomImages, setRandomImages] = useState([]);

  // Function to reset and start the animation with new random images
  const resetAndStartAnimation = () => {
    // Generate random images for the value prop
    const newRandomImages = [
      <img className="item" src={getRandomImage()} height={120} alt="" />,
      <img className="item" src={getRandomImage()} height={120} alt="" />,
      <img className="item" src={getRandomImage()} height={120} alt="" />,
    ];

    // Set the new random images
    setRandomImages(newRandomImages);
    // Start the animation
    counterRef.current?.startAnimation({
      duration: 3,
      dummyCharacterCount: 10,
      direction: "top-down",
    });
  };

  // Function to get a random image
  const getRandomImage = () => {
    const images = [item1, item2, item3, item4, item5, item6];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="slotmachine">
      <div className="center">
        <img className="imageslot" src={slotimg} height={900} alt="" />
      </div>
      <div className="slotcounter">
        <SlotCounter
          ref={counterRef} // Add ref attribute here
          startValueOnce
          autoAnimationStart={false}
          startValue={[
            <img className="item" src={item1} height={120} alt="" />,
            <img className="item" src={item2} height={120} alt="" />,
            <img className="item" src={item3} height={120} alt="" />,
          ]}
          value={randomImages} // Set value prop to randomImages state
          dummyCharacters={[
            <img className="item" src={item1} height={120} alt="" />,
            <img className="item" src={item2} height={120} alt="" />,
            <img className="item" src={item3} height={120} alt="" />,
            <img className="item" src={item4} height={120} alt="" />,
            <img className="item" src={item5} height={120} alt="" />,
            <img className="item" src={item6} height={120} alt="" />,
          ]}
        />
      </div>
      {/* Button to reset and start the animation */}
      <div className="buttn">
        {" "}
        <button onClick={resetAndStartAnimation}>
          Reset and Start Animation
        </button>
      </div>{" "}
    </div>
  );
};

export default Slot;
