import React, { useEffect, useState } from 'react'
import { CiLock } from "react-icons/ci";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";

import logo from "./logo.png"
// import "./Landing.css";
import { motion } from "framer-motion";
import HeaderLoginOptions from '../LandingComponents/HeaderLoginOptions/HeaderLoginOptions';
import HeaderRegisterOptions from '../LandingComponents/HeaderRegisterOptions/HeaderRegisterOptions';


const Header = () => {
    useEffect(() => {

        const originalStyles = {
          fontFamily: document.body.style.fontFamily,
          margin: document.body.style.margin,
          padding: document.body.style.padding,
          boxSizing: document.body.style.boxSizing,
          outline: document.body.style.outline,
          border: document.body.style.border,
          textDecoration: document.body.style.textDecoration,
          fontSize: document.documentElement.style.fontSize,
          overflowX: document.documentElement.style.overflowX,
          scrollBehavior: document.documentElement.style.scrollBehavior,
          scrollPaddingTop: document.documentElement.style.scrollPaddingTop,
        };
    
        // Apply global styles
        document.body.style.fontFamily = '"DM Sans", sans-serif';
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.boxSizing = "border-box";
        document.body.style.outline = "none";
        document.body.style.border = "none";
        document.body.style.textDecoration = "none";
        // document.documentElement.style.fontSize = "62.5%";
        document.documentElement.style.overflowX = "hidden";
        document.documentElement.style.scrollBehavior = "smooth";
        document.documentElement.style.scrollPaddingTop = "7rem";
    
        return () => {
          // Cleanup global styles
          document.body.style.fontFamily = originalStyles.fontFamily;
          document.body.style.margin = originalStyles.margin;
          document.body.style.padding = originalStyles.padding;
          document.body.style.boxSizing = originalStyles.boxSizing;
          document.body.style.outline = originalStyles.outline;
          document.body.style.border = originalStyles.border;
          document.body.style.textDecoration = originalStyles.textDecoration;
          document.documentElement.style.fontSize = originalStyles.fontSize;
          document.documentElement.style.overflowX = originalStyles.overflowX;
          document.documentElement.style.scrollBehavior =
            originalStyles.scrollBehavior;
          document.documentElement.style.scrollPaddingTop =
            originalStyles.scrollPaddingTop;
        };
      }, []);
    
      useEffect(() => {
        const headerElement = document.getElementById('custom-header');
        if (headerElement) {
            headerElement.style.fontSize = '1.6rem';
        }
        Aos.init();
      }, []);
    
    
      const [isNavbarVisible, setIsNavbarVisible] = useState(false);
      const [isRegisterOpen, setIsRegisterOpen] = useState(false);
      const [isLoginOpen, setIsLoginOpen] = useState(false);
    
      const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
      };
    
      const openRegister = () => {
        setIsRegisterOpen(true);
      };
    
      const closeRegister = () => {
        setIsRegisterOpen(false);
      };
    
      const openLogin = () => {
        setIsHovered(false)
        setIsLoginOpen(true);
      };
    
      const closeLogin = () => {
        setIsLoginOpen(false);
      };
    
    
      const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    <HeaderLoginOptions isLoginOpen={isLoginOpen} closeLogin={closeLogin} />
    <HeaderRegisterOptions isRegisterOpen={isRegisterOpen} closeRegister={closeRegister} />
    <header id="custom-header" class="header" style={{fontSize:'1.6rem'}}>

        <div
          id="menu-btn"
          className={`fas fa-bars ${isNavbarVisible ? "fa-times" : ""}`}
          onClick={toggleNavbar}
        >
          ☰
        </div>

        <a href="#" class="header-logo">
          <img width={200} src={logo} />
        </a>

        <nav className={`navbar ${isNavbarVisible ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#package">Product</a>
          <a href="#contact_section">Contact Us</a>
          <a href="#leaderboard_section">Leaderboard</a>
        </nav>

        {/* className="header-btns" */}
        <div className="header-btns">
          <button
            className="btn-login"
            onClick={openLogin} // Reset hover state when clicked
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
          >
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : { rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <CiLock size={24} />
            </motion.div>
            Login
          </button>
          <button class="btn-signup" onClick={openRegister}>
            Sign up for Free
          </button>
        </div>

      </header>
    </>
  )
}

export default Header