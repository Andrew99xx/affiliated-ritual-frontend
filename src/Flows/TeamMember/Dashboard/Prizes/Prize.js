import React, { useRef, useState } from 'react'
import lever from "./lever1.png"
import SlotCounter from "react-slot-counter";
import item1 from "./icons/cherries.png";
import item2 from "./icons/diamond.png";
import item3 from "./icons/lemon.png";
import item4 from "./icons/plum.png";
import item5 from "./icons/orange.png";
import item6 from "./icons/cherries.png";
import "./prize.css"

const Prize = () => {
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotate = () => {
    setIsRotated(!isRotated);
  };
  const counterRef = useRef(null);
  const [randomImages, setRandomImages] = useState([]);

  const resetAndStartAnimation = () => {
    const newRandomImages = [
      <img className="item" src={getRandomImage()} height={80} alt="" />,
      <img className="item" src={getRandomImage()} height={80} alt="" />,
      <img className="item" src={getRandomImage()} height={80} alt="" />,
    ];

    setRandomImages(newRandomImages);
    counterRef.current?.startAnimation({
      duration: 4,
      dummyCharacterCount: 20,
    });
  };

  const getRandomImage = () => {
    const images = [item1, item2, item3, item4, item5, item6];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  return (
    <div className='Prize'>
        <h1 className="heading">Prizes</h1>

        <div className="gamecontainerr">
          <div className="conmt">
            <div className="top"><h1 className="heading">Target Sale: 1,50,000 <span className='red'>Expire in 4 day</span></h1></div>
            <div className=""><h1 className="heading2">Your Sale: 50,000 to become team Leader</h1></div>
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
        

      </div><div className="textb">
          <h1 className="heading">Get a chance to win a trip to Goa, Mandarmani, etc.</h1>
        </div>
    </div>
  )
}

export default Prize