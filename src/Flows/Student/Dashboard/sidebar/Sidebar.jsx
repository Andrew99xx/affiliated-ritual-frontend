import React from 'react';
import styles from './Sidebar.module.css';
import logo from "../../../../logo.png"

import logout from "../assets/logout.png";
import edu from "../assets/edu.png";
import eduactive from "../assets/eduactive.png";
import cer from "../assets/cer.png";
import ceractive from "../assets/ceractive.png";

const Sidebar = ({ activeElement, handleClick, openModal, isMenuExpanded }) => {
    return (
        <div className={`${styles.sidebar} ${isMenuExpanded ? styles.expanded : ''}`}>

            <div className={styles.elementWrapper}>
                <div className={styles.heading}>
                    <img
                        src={logo}
                        alt="Logo"
                        className={styles.headingLogo}
                    />
                </div>
                <div
                    className={activeElement === 'education' ? styles.sidebarelementactive : styles.sidebarelement}
                    onClick={() => handleClick('education')}
                >
                    <img src={activeElement === 'education' ? eduactive : edu} alt="Education" />
                    <p className={styles.elementText}>Education & Progress</p>
                </div>

                <div
                    className={activeElement === 'certificate' ? styles.sidebarelementactive : styles.sidebarelement}
                    onClick={() => handleClick('certificate')}
                >
                    <img
                        src={activeElement === 'certificate' ? ceractive : cer}
                        alt="Certificates"
                    />
                    <p className={styles.elementText}>Certificates</p>
                </div>
            </div>

            <div className={styles.logoutWrapper} onClick={openModal}>
                <img src={logout} alt="Logout" className={styles.logout} />
                <p className={styles.elementText}>Logout</p>
            </div>
        </div>
    );
};

export default Sidebar;
