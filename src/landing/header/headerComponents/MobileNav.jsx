import React from "react";
import styles from "../Header.module.css";
import HeaderButtons from "./HeaderButtons";

const MobileNav = ({ isNavbarVisible, toggleNavbar, activeHash, openLogin, openRegister, isHovered, setIsHovered }) => {
    return (
        <div
            className={`${styles.mobileView} ${isNavbarVisible ? styles.mobileViewActive : ""}`}
            aria-expanded={isNavbarVisible}
        >
            <nav className={styles.navbar}>
                <a
                    onClick={toggleNavbar}
                    className={activeHash === "#home" ? styles.activeLink : ""} href="#home">
                    Home
                </a>
                <a
                    onClick={toggleNavbar}
                    className={activeHash === "#product" ? styles.activeLink : ""} href="#product">
                    Product
                </a>
                <a
                    onClick={toggleNavbar}
                    className={activeHash === "#contact" ? styles.activeLink : ""} href="#contact">
                    Contact Us
                </a>
                <a
                    onClick={toggleNavbar}
                    className={activeHash === "#leaderboard" ? styles.activeLink : ""}
                    href="#leaderboard"
                >
                    Leaderboard
                </a>
            </nav>

            <HeaderButtons
                openLogin={openLogin}
                openRegister={openRegister}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
            />

        </div>
    );
};

export default MobileNav;
