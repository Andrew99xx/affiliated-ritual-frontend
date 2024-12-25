import React, { useState } from "react";
import styles from "./Header.module.css";
import DesktopNav from "./headerComponents/DesktopNav";
import MobileNav from "./headerComponents/MobileNav";
import logo from "../../logo.png"

const Header = ({
    activeHash,
    openLogin,
    openRegister,
    isHovered,
    setIsHovered,
}) => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };


    return (
        <header className={styles.header}>
            <div
                className={styles.menuBtn}
                onClick={toggleNavbar}
            >
                ☰
            </div>

            <a href="#home" className={styles.headerLogo}>
                <img width={200} src={logo} alt="Logo" />
            </a>

            <MobileNav
                isNavbarVisible={isNavbarVisible}
                activeHash={activeHash} openLogin={openLogin}
                openRegister={openRegister}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
            />
            <DesktopNav
                activeHash={activeHash}
                openLogin={openLogin}
                openRegister={openRegister}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
            />
        </header>
    );
};

export default Header;
