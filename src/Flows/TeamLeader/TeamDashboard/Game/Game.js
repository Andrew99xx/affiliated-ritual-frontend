import React, { useRef, useState } from 'react'
import "./Game.css"
import lever from "./lever1.png"
import SlotCounter from "react-slot-counter";
import item1 from "./icons/cherries.png";
import item2 from "./icons/diamond.png";
import item3 from "./icons/lemon.png";
import item4 from "./icons/plum.png";
import item5 from "./icons/orange.png";
import item6 from "./icons/cherries.png";
const Game = () => {
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotate = () => {
    setIsRotated(!isRotated);
  };

  const counterRef = useRef(null);
  // Create state to hold the random images
  const [randomImages, setRandomImages] = useState([]);

  // Function to reset and start the animation with new random images
  const resetAndStartAnimation = () => {
    // Generate random images for the value prop
    const newRandomImages = [
      <img className="item" src={getRandomImage()} height={80} alt="" />,
      <img className="item" src={getRandomImage()} height={80} alt="" />,
      <img className="item" src={getRandomImage()} height={80} alt="" />,
    ];

    // Set the new random images
    setRandomImages(newRandomImages);
    // Start the animation
    counterRef.current?.startAnimation({
      duration: 6,
      dummyCharacterCount: 20,
    });
  };

  // Function to get a random image
  const getRandomImage = () => {
    const images = [item1, item2, item3, item4, item5, item6];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  return (
    <div className='game'>
      <h1 className="heading">Win a Game</h1>

      <div className="gamecontainer">
        <div className="textb">
          <h1 className="heading">Get a chance to win a trip to Goa, Mandarmani, etc.</h1>
        </div>

        <div className="slotcontainer">
        <div className="slotgame">
          <div className="mr-2"></div>
        <SlotCounter

          ref={counterRef}
          startValueOnce
          autoAnimationStart={false}
          startValue={[
            <img className="item" src={item1} height={80} width={80} alt="" />,
            <img className="item" src={item2} height={80}width={80} alt="" />,
            <img className="item" src={item3} height={80}width={80} alt="" />,
          ]}
          value={randomImages} // Set value prop to randomImages state
          dummyCharacters={[
            <img className="item" src={item1} height={80}width={80} alt="" />,
            <img className="item" src={item2} height={80}width={80} alt="" />,
            <img className="item" src={item3} height={80}width={80} alt="" />,
            <img className="item" src={item4} height={80} width={80}alt="" />,
            <img className="item" src={item5} height={80} width={80}alt="" />,
            <img className="item" src={item6} height={80}width={80} alt="" />,
          ]}
        />
          <img
      className={`leverimage ${isRotated ? 'rotated' : ''}`}
      src={lever}
      alt=""
      onClick={() => {
        toggleRotate();
        resetAndStartAnimation();
      }}
    />
        </div></div>

      </div>

      <h2 className="subheading">Big Prize</h2>
      
    </div>
  )
}

export default Game