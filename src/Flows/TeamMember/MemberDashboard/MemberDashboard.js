import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Logout from "../../../components/LogoutModal/Logout";

// importing assets
import edu from "./assets/edu.png";
import logout from "./logout.png"

import eduactive from "./assets/eduactive.png";
import prize from "./assets/prize.png";
import prizeactive from "./assets/prizeactive.png";
import review from "./assets/review.png";
import reviewactive from "./assets/reviewactive.png";
import menu from "./assets/menu.png";
import coin from "./assets/coin.png";
import notif from "./assets/notif.png";
import profile from "./assets/profile.png";
import expand from "./assets/expand.png";
import Prize from "./Prizes/Prize";

import Dash from "./Dash/Dash";
import MemberReviews from "./Reviews/MemberReviews";

const MemberDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [activeElement, setActiveElement] = useState('dashboard');
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

        <div className={activeElement === 'dashboard' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('dashboard')}>
          <img src={activeElement === 'dashboard' ? eduactive : edu} alt="" />
          <span>Dashboard</span>
        </div>
        <div className={activeElement === 'prizes' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('prizes')}>
          <img src={activeElement === 'prizes' ? prizeactive : prize} alt="" />
          <span>Prizes</span>
        </div>
        <div className={activeElement === 'reviews' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('reviews')}>
          <img src={activeElement === 'reviews' ? reviewactive : review} alt="" />
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
              <div className="coins"><img src={coin} height={25} alt="" />  00</div>
              <div className="maximise"><img src={expand} height={25} alt="" /></div>
              <div className="notifications"><img src={notif} height={30} alt="" /></div>
              <div className="profile"><img src={profile} height={35} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="content">
          {activeElement === 'dashboard' ? <Dash /> : null}
          {activeElement === 'prizes' ? <Prize /> : null}
          {activeElement === 'reviews' ? <MemberReviews /> : null}
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
