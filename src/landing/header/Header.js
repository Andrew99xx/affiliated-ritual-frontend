// Header Component: Header.js
import React from "react";
import { motion } from "framer-motion";
import logo from "../../logo.png";
import styles from "./Header.module.css";

const Header = ({
    isNavbarVisible,
    toggleNavbar,
    activeHash,
    openLogin,
    openRegister,
    isHovered,
    setIsHovered,
}) => {
    return (
        <header className={styles.header}>
            {/* todo - check classname, check id, check thier css */}
            <div
                style={{
                    display: "none"
                }}
                id="menu-btn"
                className={`fas fa-bars ${isNavbarVisible ? "fa-times" : ""}`}
                onClick={toggleNavbar}
            >
                ☰
            </div>

            <a href="#home" className={styles.headerLogo}>
                <img width={200} src={logo} alt="Logo" />
            </a>

            <nav className={`${styles.navbar} ${isNavbarVisible ? styles.active : ""}`}>
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

            <div className={styles.headerBtns}>
                <button
                    className={styles.btnLogin}
                    onClick={openLogin}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : { rotate: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    Login
                </button>
                <button className={styles.btnSignup} onClick={openRegister}>
                    Sign up for Free
                </button>
            </div>
        </header>
    );
};

export default Header;

