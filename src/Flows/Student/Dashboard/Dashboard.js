import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase-config";
import styles from './Dashboard.module.css';

import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Edu from "./EduProg/Edu.js"
import Certificate from "./Certificate/Certificate.js"

import Logout from "../../../components/LogoutModal/Logout";
import { getCoinsOfUser } from "../../../service/coins/getCoinsOfUser";


const Dashboard = ({ handleLogout }) => {
  const [totalCoins, setTotalCoins] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeElement, setActiveElement] = useState('education');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const getTotalCoins = await getCoinsOfUser(user.uid);
        setTotalCoins(getTotalCoins);
      } else {
        alert("No user is signed in");
      }
    });

    const handleResize = () => {
      setIsMenuExpanded(window.innerWidth < 1168);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleClick = (element) => setActiveElement(element);
  const toggleMenu = () => setIsMenuExpanded(!isMenuExpanded);

  return (
    <div className={`${styles.dashboard} ${isMenuExpanded ? styles.expanded : ''}`}>
      <Sidebar
        activeElement={activeElement}
        handleClick={handleClick}
        openModal={openModal}
        isMenuExpanded={isMenuExpanded}
      />
      <div className={styles.maincontent}>
        <Header totalCoins={totalCoins} toggleMenu={toggleMenu} />
        <div>
          {activeElement === 'education' ? <Edu /> : <Certificate />}
        </div>
      </div>

      {/* this is modal, it will open when true, independent in itself */}
      <Logout showModal={showModal} closeModal={closeModal} handleLogout={handleLogout} />
    </div>
  );
};

export default Dashboard;
