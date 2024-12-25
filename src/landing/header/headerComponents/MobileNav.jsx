import React from "react";
import styles from "../Header.module.css";
import HeaderButtons from "./HeaderButtons";

const MobileNav = ({ isNavbarVisible, activeHash, openLogin, openRegister, isHovered, setIsHovered }) => {
    return (
        <div
            className={`${styles.mobileView} ${isNavbarVisible ? styles.mobileViewActive : ""}`}
            aria-expanded={isNavbarVisible}
        >
            <nav className={styles.navbar}>
                <a className={activeHash === "#home" ? styles.activeLink : ""} href="#home">
                    Home
                </a>
                <a className={activeHash === "#product" ? styles.activeLink : ""} href="#product">
                    Product
                </a>
                <a className={activeHash === "#contact" ? styles.activeLink : ""} href="#contact">
                    Contact Us
                </a>
                <a
                    className={activeHash === "#leaderboard" ? styles.activeLink : ""}
                    href="#leaderboard"
                >
                    Leaderboard
                </a>
            </nav>
            <div className={styles.headerButtonsContainer}>
                <HeaderButtons
                    openLogin={openLogin}
                    openRegister={openRegister}
                    isHovered={isHovered}
                    setIsHovered={setIsHovered}
                />
            </div>
        </div>
    );
};

export default MobileNav;
