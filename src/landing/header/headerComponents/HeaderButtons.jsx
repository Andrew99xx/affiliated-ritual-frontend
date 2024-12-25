import React from "react";
import { motion } from "framer-motion";
import styles from "../Header.module.css";

const HeaderButtons = ({ toggleNavbar, openLogin, openRegister, isHovered, setIsHovered }) => {
    return (
        <div className={styles.headerBtns}>
            <button
                className={styles.btnLogin}
                onClick={() => {
                    openLogin();
                    toggleNavbar();
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : { rotate: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                Login
            </button>
            <button
                className={styles.btnSignup}
                onClick={() => {
                    openRegister();
                    toggleNavbar();
                }}>
                Sign up for Free
            </button>
        </div>
    );
};

export default HeaderButtons;
