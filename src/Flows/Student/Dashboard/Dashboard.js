import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase-config";

import Edu from "./EduProg/Edu";
import Certificate from "./Certificate/Certificate";
import Logout from "../../../components/LogoutModal/Logout";
import styles from './Dashboard.module.css'
import "./Dashboard.css";

import logo from "../../../logo.png"
import logout from "./logout.png"
import edu from "./assets/edu.png";
import eduactive from "./assets/eduactive.png";
import cer from "./assets/cer.png";
import ceractive from "./assets/ceractive.png";
import menu from "./assets/menu.png";
import coin from "./assets/coin.png";
import notif from "./assets/notif.png";
import profile from "./assets/profile.png";
import expand from "./assets/expand.png";
import { getCoinsOfUser } from "../../../service/coins/getCoinsOfUser";

const Dashboard = ({ handleLogout }) => {

  const [totalCoins, setTotalCoins] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const getTotalCoins = await getCoinsOfUser(user.uid);
        setTotalCoins(getTotalCoins);
      } else {
        alert("No user is signed in");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  // Empty dependency array ensures this effect runs only once


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


  const [activeElement, setActiveElement] = useState('education');
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
      <div className={styles.sidebar}>
        <h1 className={styles.heading}>
          <img width={300} src={logo} />
        </h1>

        <div className={activeElement === 'education' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('education')}>
          <img src={activeElement === 'education' ? eduactive : edu} alt="" />
          <span>Education & Progress</span>
        </div>

        <div className={activeElement === 'certificate' ? "sidebarelementactive" : "sidebarelement"} onClick={() => handleClick('certificate')}>
          <img src={activeElement === 'certificate' ? ceractive : cer} alt="" />
          <span>Certificated</span>
        </div>

        <div
          className={styles.logout}
          onClick={openModal}>
          <img src={logout} alt="" />
          <span>Logout</span>
        </div>

      </div>

      {/* Logout modal  */}
      <Logout showModal={showModal} closeModal={closeModal} handleLogout={handleLogout} />

      <div className={styles.maincontent}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.menugrid} onClick={toggleMenu} style={{ cursor: "pointer" }}>
              <img src={menu} alt="" />
            </div>
            <div className={styles.searchbar}>
              {" "}
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.icons}>
              {/* coins - total coins earns  */}
              <div className={styles.coins}><img src={coin} height={25} alt="" /> {totalCoins}</div>
              <div className={styles.maximise}><img src={expand} height={25} alt="" /></div>
              <div className={styles.notifications}><img src={notif} height={30} alt="" /></div>
              <div className={styles.profile}><img src={profile} height={35} alt="" /></div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {activeElement === 'education' ? <Edu /> : <Certificate />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;