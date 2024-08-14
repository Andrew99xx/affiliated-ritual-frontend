import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";

import Aos from "aos";
import "./Landing.css";
import "aos/dist/aos.css";
import "swiper/css";

// components 
import Faq from "./components/LandingComponents/Faq/Faq";
import HowItWorks from "./components/LandingComponents/HowItWorks/HowItWorks";
import IntroStats from "./components/LandingComponents/IntroStats/IntroStats";
import Footer from "./components/LandingComponents/Footer/Footer";
import Home from "./components/LandingComponents/Home/Home";
import WhyRitual from "./components/LandingComponents/WhyRitual/WhyRitual";
import Leaderboard from "./components/LandingComponents/Leaderboard/Leaderboard";
import Proof from "./components/LandingComponents/Proof/Proof";
import Feedback from "./components/LandingComponents/Feedback/Feedback";
import Trainer from "./components/LandingComponents/Trainer/Trainer";
import Media from "./components/LandingComponents/Media/Media";
import System from "./components/LandingComponents/System/System";
import Package from "./components/LandingComponents/Package/Package";
import Banner from "./components/LandingComponents/Banner/Banner";
import Club from "./components/LandingComponents/Club/Club";
import HeaderLoginOptions from "./components/LandingComponents/HeaderLoginOptions/HeaderLoginOptions";
import HeaderRegisterOptions from "./components/LandingComponents/HeaderRegisterOptions/HeaderRegisterOptions.js"

// import Features from "./components/LandingComponents/Features/Features";
// import Services from "./components/LandingComponents/Services/Services";
// import Courses from "./components/LandingComponents/Courses/Courses";


const Landing = () => {

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
    document.documentElement.style.fontSize = "62.5%";
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
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };




  return (
    <div className="body">

      {/* login & register options */}
      <HeaderLoginOptions isLoginOpen={isLoginOpen} closeLogin={closeLogin} />
      <HeaderRegisterOptions isRegisterOpen={isRegisterOpen} closeRegister={closeRegister} />

      <header class="header">

        <div
          id="menu-btn"
          className={`fas fa-bars ${isNavbarVisible ? "fa-times" : ""}`}
          onClick={toggleNavbar}
        >
          ☰
        </div>

        <a href="#" class="header-logo">
          Affiliated Rituals{" "}
        </a>

        <nav className={`navbar ${isNavbarVisible ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#contact_section">Contact Us</a>
          <a href="#leaderboard_section">Leaderboard</a>
        </nav>

        {/* className="header-btns" */}
        <div className="header-btns">
          <button class="btn-login" onClick={openLogin}>
            <CiLock size={24} />
            Login
          </button>
          <button class="btn-signup" onClick={openRegister}>
            Sign up for Free
          </button>
        </div>

      </header>







      <main>

        {/* home section */}
        <section class="home-section" id="home">
          <Home />
        </section>

        {/* Intro Stats */}
        <section className="introStats-section">
          <IntroStats />
        </section>

        {/* how it works */}
        <section className="howItWorkSection">
          <h1 className="heading">Learn how it works?</h1>
          <HowItWorks />
        </section>

        {/* system forever */}
        <section className="system-section" id="system">
          <h1 className="heading">This Will Change The Sytem Forever!</h1>
          <System />
        </section>

        {/* packages */}
        <section className="package-section" id="package">
          <h1 className="heading">Our Exclusive Packages</h1>
          <Package />
        </section>

        {/* why affiliated ritual */}
        <section className="whyRitual" id="whyRitual">
          <h1 className="heading">Why Affiliated Rituals</h1>
          <WhyRitual />
        </section>

        {/* trainer section */}
        <section className="trainer-section" id="trainer">
          <h1 className="heading">Our Trainer</h1>
          <Trainer />
        </section>

        {/* media section */}
        <section className="media-section" id="media">
          <h1 className="heading">Media Presence</h1>
          <Media />
        </section>

        {/* club section */}
        <section className="club-section" id="club">
          <h1 className="heading">Our Leader & Members</h1>
          <Club />
        </section>

        {/* banner section */}
        <section className="banner-section" id="banner">
          <Banner />
        </section>

        {/* feedback section - voice of our students */}
        <section className="feedback-section" id="feedback">
          <h1 className="heading">Voice of Our Students</h1>
          <Feedback />
        </section>

        {/* proof section */}
        <section className="proof-section" id="proof">
          <h1 className="heading">More Proof</h1>
          <Proof />
        </section>

        {/* frequently asked */}
        <section className="faq-section" id="faq">
          <h1 className="heading">Frequently Asked Questions</h1>
          <Faq />
        </section>

        {/* leaderboard section */}
        <section className="leaderboard-section" id="leaderboard">
          <h1 className="heading">Leaderboard</h1>
          <Leaderboard />
        </section>

        {/* <section id="Courses">
          <Courses />
        </section> * */}

        {/* 
        <section id="services">
          <Services />
        </section> */}

        {/* 
        <section id="features">
          <Features />
        </section>  */}
      </main>

      {/* footer */}
      <footer class="footer-section">
        <Footer />
      </footer>


    </div>
  );
};

export default Landing;
