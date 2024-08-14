import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'
import "./Dashboard.css";
import logo from "../../../logo.png"

import AdminDash from "./AdminDash/AdminDash";
import Couselist from "./CourseList/Couselist";
import Gift from "./Gift/Gift";
import Payout from "./Payout/Payout";
import SalesTarget from "./SaleTarget/SalesTarget";
import Logout from "../../../components/LogoutModal/Logout";
import AddTeamLeader from "./AddTeamLeader/AddTeamLeader";


import logout from "./logout.png"
import menu from "./assets/menu.png";
import coin from "./assets/coin.png";
import notif from "./assets/notif.png";
import profile from "./assets/profile.png";
import expand from "./assets/expand.png";
import dashActive from "./assets/dashActive.png";
import dash from "./assets/dash.png";
import CourseActive from "./assets/CourseActive.png";
import Course from "./assets/Course.png";
import GiftsActive from "./assets/giftActive.png";
import Gifts from "./assets/gift.png";
import PayoutsActive from "./assets/payoutActive.png";
import Payouts from "./assets/payout.png";
import SaleTargetActive from "./assets/SaleActive.png";
import SaleTarget from "./assets/Sale.png";


const Dashboard = () => {
  // const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [activeElement, setActiveElement] = useState('admindash');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


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

      {/* sidebar  */}
      <div className="sidebar">
        <h1 className="heading">
          <img width={300} src={logo} />
        </h1>

        <div className={activeElement === 'admindash' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('admindash')}>
          <img src={activeElement === 'admindash' ? dashActive : dash} alt="" />
          <span>Dashboard</span>
        </div>

        <div className={activeElement === 'couselist' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('couselist')}>
          <img src={activeElement === 'couselist' ? CourseActive : Course} alt="" />
          <span>Course List</span>
        </div>

        <div className={activeElement === 'payout' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('payout')}>
          <img src={activeElement === 'payout' ? PayoutsActive : Payouts} alt="" />
          <span>Payout</span>
        </div>

        <div className={activeElement === 'gift' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('gift')}>
          <img src={activeElement === 'gift' ? GiftsActive : Gifts} alt="" />
          <span>Gift</span>
        </div>

        <div className={activeElement === 'saletarget' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('saletarget')}>
          <img src={activeElement === 'saletarget' ? SaleTargetActive : SaleTarget} alt="" />
          <span>Sale & Target</span>
        </div>

        <div className={activeElement === 'addTeamLeader' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('addTeamLeader')}>
          {/* change the image here, todo */}
          <img src={activeElement === 'saletarget' ? SaleTargetActive : SaleTarget} alt="" />
          <span>Add Team Leader</span>
        </div>

        <div className="logout" onClick={openModal}> <img src={logout} alt="" /> <span>Logout</span></div>
      </div>

      {/* logout  */}
      <Logout showModal={showModal} closeModal={closeModal} />


      <div className="maincontent">

        {/* headers */}
        <div className="header">
          <div className="left">
            <div className="menugrid" onClick={toggleMenu} style={{ cursor: "pointer" }}>
              <img src={menu} alt="" />
            </div>
            <div className="searchbar">
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

        {/* conditional rendering of content */}
        <div className="content">
          {activeElement === 'admindash' ? <AdminDash /> : null}
          {activeElement === 'couselist' ? <Couselist /> : null}
          {activeElement === 'gift' ? <Gift /> : null}
          {activeElement === 'payout' ? <Payout /> : null}
          {activeElement === 'saletarget' ? <SalesTarget /> : null}
          {activeElement === 'addTeamLeader' ? <AddTeamLeader /> : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
