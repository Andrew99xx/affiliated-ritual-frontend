import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Aos from "aos";
import "./Landing.css";
import "aos/dist/aos.css";
import "swiper/css";

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
import Club from "./components/LandingComponents/Club/Club";
// import Features from "./components/LandingComponents/Features/Features";
// import Services from "./components/LandingComponents/Services/Services";
// import Courses from "./components/LandingComponents/Courses/Courses";

const Landing = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="body">
      {isRegisterOpen && (
        <div className="popup-overlay">
          <div className="landregister">
            <button className="popup-close" onClick={closeRegister}>
              &times;
            </button>
            <div className="popup-content">
              <h2>Log in</h2>
              <div className="landlog">
                <Link to="/student?action=login" className="st">
                  {" "}
                  <img src="/student.png" alt="" height={80} width={80} />{" "}
                  Student
                </Link>
                <Link className="tml" to="/teamleader?action=login" >
                  {" "}
                  <img src="/leader.png" alt="" height={80} width={80} /> Team
                  Leader
                </Link>
                <Link className="tra">
                  <img src="/trainer.png" alt="" height={80} width={80} />{" "}
                  Trainer
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className="popup-overlay">
          <div className="landlogin">
            <button className="popup-close" onClick={closeLogin}>
              &times;
            </button>
            <div className="popup-content">
              <h2>Sign In</h2>
              <div className="landlog">
                <Link to="/student?action=register" className="st">
                  {" "}
                  <img src="/student.png" alt="" height={80} width={80} />{" "}
                  Student
                </Link>
                <Link to="/teamleader?action=register" className="tml">
                  {" "}
                  <img src="/leader.png" alt="" height={80} width={80} /> Team
                  Leader
                </Link>
                <Link className="tra">
                  <img src="/trainer.png" alt="" height={80} width={80} />{" "}
                  Trainer
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <header class="header">
        <a href="#" class="logo">
          Affiliated Rituals{" "}
        </a>

        <nav className={`navbar ${isNavbarVisible ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#Courses">Courses</a>
          <a href="#features">Features</a>
          <a href="#faq">Faq</a>
        </nav>

        <div
          id="menu-btn"
          className={`fas fa-bars ${isNavbarVisible ? "fa-times" : ""}`}
          onClick={toggleNavbar}
        >
          ☰
        </div>
        <div className="btns">
          <a href="#" class="btn" onClick={openRegister}>
            Login
          </a>
          <a href="#" class="btn" onClick={openLogin}>
            Signin
          </a>
        </div>

      </header>
      <div className="page">

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
          < Club/>
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

        {/* footer section  */}
        <section class="footer-section">
          <Footer />
        </section>


        {/* 
        <section id="Courses">
          <Courses />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="features">
          <Features />
        </section> */}


      </div>
    </div>
  );
};

export default Landing;
