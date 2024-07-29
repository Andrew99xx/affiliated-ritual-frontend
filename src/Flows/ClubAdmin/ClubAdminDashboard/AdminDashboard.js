import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import { useNavigate } from 'react-router-dom'
>>>>>>> 11cb80b (major update)
import "./AdminDashboard.css";
import AdminDa from "./AdminDash/AdminDashboard";
import Couselist from "./CourseList/Couselist";
import Gift from "./Gift/Gift";
import Payout from "./Payout/Payout";
import SalesTarget from "./SaleTarget/SalesTarget";
import Logout from "../../../components/LogoutModal/Logout";


import logout from "./logout.png"
<<<<<<< HEAD

=======
>>>>>>> 11cb80b (major update)
import menu from "./assets/menu.png";
import coin from "./assets/coin.png";
import notif from "./assets/notif.png";
import profile from "./assets/profile.png";
import expand from "./assets/expand.png";
import AdminDashActive from "./assets/dashActive.png";
import AdminDash from "./assets/dash.png";
import CourseActive from "./assets/CourseActive.png";
import Course from "./assets/Course.png";
import GiftsActive from "./assets/giftActive.png";
import Gifts from "./assets/gift.png";
import PayoutsActive from "./assets/payoutActive.png";
import Payouts from "./assets/payout.png";
import SaleTargetActive from "./assets/SaleActive.png";
import SaleTarget from "./assets/Sale.png";

const AdminDashboard = () => {
<<<<<<< HEAD
  const [showModal, setShowModal] = useState(false);
=======
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [activeElement, setActiveElement] = useState('admindash');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
>>>>>>> 11cb80b (major update)


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
<<<<<<< HEAD
  const [activeElement, setActiveElement] = useState('admindash');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
=======

>>>>>>> 11cb80b (major update)

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

        <div className={activeElement === 'admindash' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('admindash')}>
          <img src={activeElement === 'admindash' ? AdminDashActive : AdminDash} alt="" />
          <span>Dashboard</span>
        </div>

        <div className={activeElement === 'couselist' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('couselist')}>
          <img src={activeElement === 'couselist' ? CourseActive : Course} alt="" />
          <span>Course List</span>
        </div>
<<<<<<< HEAD
 <div className={activeElement === 'payout' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('payout')}>
=======
        <div className={activeElement === 'payout' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('payout')}>
>>>>>>> 11cb80b (major update)
          <img src={activeElement === 'payout' ? PayoutsActive : Payouts} alt="" />
          <span>Payout</span>
        </div>
        <div className={activeElement === 'gift' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('gift')}>
          <img src={activeElement === 'gift' ? GiftsActive : Gifts} alt="" />
          <span>Gift</span>
        </div>
<<<<<<< HEAD
       
=======

>>>>>>> 11cb80b (major update)
        <div className={activeElement === 'saletarget' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('saletarget')}>
          <img src={activeElement === 'saletarget' ? SaleTargetActive : SaleTarget} alt="" />
          <span>Sale & Target</span>
        </div>
<<<<<<< HEAD
         <div className="logout" onClick={openModal}> <img src={logout} alt="" /> <span>Logout</span></div>
      </div>
 <Logout showModal={showModal} closeModal={closeModal} />
=======

        <div className={activeElement === 'registerAsTeamLeader' ? "sidebarelementactive" : "sidebarelement"} onClick={ () => navigate("/teamleader")}>
          {/* change the image here, todo */}
          <img src={activeElement === 'saletarget' ? SaleTargetActive : SaleTarget} alt="" />
          <span>Register as Team Leader</span>
        </div>

        <div className="logout" onClick={openModal}> <img src={logout} alt="" /> <span>Logout</span></div>
      </div>
      <Logout showModal={showModal} closeModal={closeModal} />
>>>>>>> 11cb80b (major update)
      <div className="maincontent">
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
<<<<<<< HEAD
            </div> 
=======
            </div>
>>>>>>> 11cb80b (major update)
          </div>
        </div>
        <div className="content">
          {activeElement === 'admindash' ? <AdminDa /> : null}
          {activeElement === 'couselist' ? <Couselist /> : null}
          {activeElement === 'gift' ? <Gift /> : null}
          {activeElement === 'payout' ? <Payout /> : null}
          {activeElement === 'saletarget' ? <SalesTarget /> : null}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
