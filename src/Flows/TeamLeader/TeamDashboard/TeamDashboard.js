import React, { useState, useEffect } from "react";
import "./TeamDashboard.css";
import Direct from "./Direct/Direct";
import Game from "./Game/Game";
import Reviews from "./Reviews/Reviews";
import Sales from "./Sales/Sales";
import TeamRep from "./TeamRep/TeamRep";
import Logout from "../../../components/LogoutModal/Logout";

// importing assets

import logout from "./logout.png"
import direct from "./assets/direct.png";
import directActive from "./assets/directActive.png";
import game from "./assets/game.png";
import gameActive from "./assets/gameActive.png";
import reviews from "./assets/reviews.png";
import reviewsActive from "./assets/reviewsActive.png";
import sales from "./assets/sales.png";
import salesActive from "./assets/salesActive.png";
import teamRep from "./assets/teamRep.png";
import teamRepActive from "./assets/teamRepActive.png";

import menu from "./assets/menu.png";
import coin from "./assets/coin.png";
import notif from "./assets/notif.png";
import profile from "./assets/profile.png";
import expand from "./assets/expand.png";

const TeamDashboard = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [activeElement, setActiveElement] = useState('sales');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1168) {
        setIsMenuExpanded(true);
      } else {
        setIsMenuExpanded(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (element) => {
    setActiveElement(element);
  };

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <div className={`dashboard ${isMenuExpanded ? 'expanded' : ''}`}>
      <div className="sidebar">
        <h1 className="heading">Dummy logo</h1>

        <div className={activeElement === 'sales' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('sales')}>
          <img src={activeElement === 'sales' ? salesActive : sales} alt="" />
          <span>Sales & Stats</span>
        </div>

        <div className={activeElement === 'teamRep' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('teamRep')}>
          <img src={activeElement === 'teamRep' ? teamRepActive : teamRep} alt="" />
          <span>Team Report</span>
        </div>
        <div className={activeElement === 'direct' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('direct')}>
          <img src={activeElement === 'direct' ? directActive : direct} alt="" />
          <span>Direct Sale Report</span>
        </div>
        <div className={activeElement === 'game' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('game')}>
          <img src={activeElement === 'game' ? gameActive : game} alt="" />
          <span>Win a Game</span>
        </div>
        <div className={activeElement === 'reviews' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('reviews')}>
          <img src={activeElement === 'reviews' ? reviewsActive : reviews} alt="" />
          <span>Reviews</span>
        </div>

        <div className="logout" onClick={openModal}> <img src={logout} alt="" /> <span>Logout</span></div>

      </div>
      <Logout showModal={showModal} closeModal={closeModal} />
      <div className="maincontent">
        <div className="header">
          <div className="left">
            <div className="menugrid" onClick={toggleMenu} style={{ cursor: "pointer" }}>
              <img src={menu} alt="" />
            </div>
            <div className="searchbar">
              {" "}
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <div className="coins"><img src={coin} height={25} alt="" />00</div>
              <div className="maximise"><img src={expand} height={25} alt="" /></div>
              <div className="notifications"><img src={notif} height={30} alt="" /></div>
              <div className="profile"><img src={profile} height={35} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="content">
          {activeElement === 'direct' ? <Direct /> : null}
          {activeElement === 'game' ? <Game /> : null}
          {activeElement === 'reviews' ? <Reviews /> : null}
          {activeElement === 'sales' ? <Sales /> : null}
          {activeElement === 'teamRep' ? <TeamRep /> : null}
        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;
