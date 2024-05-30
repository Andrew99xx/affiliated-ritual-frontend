import React, { useEffect, useState } from "react";
import "./Landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from "aos";
import "aos/dist/aos.css";
import Faq from "./components/Faq/Faq";
import "swiper/css";
import { Link } from "react-router-dom";
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
                <Link to="/student?action=register"  className="st">
                  {" "}
                  <img src="/student.png" alt="" height={80} width={80} />{" "}
                  Student
                </Link>
                <Link to="/teamleader?action=register"  className="tml">
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
        <section class="home" id="home">
          <div class="image">
            <img src="/feature-2.svg" height={450} alt="" />
          </div>

          <div class="content">
            <h3> Make learning fun!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              magnam id laborum consequuntur inventore aliquam perspiciatis
              explicabo eius iure dignissimos.
            </p>
            <a href="#" class="btn">
              {" "}
              Sign up for free
            </a>
          </div>
        </section>

        <section class="services" id="services">
          <div class="heading">
            <h1>what we provide?</h1>
          </div>

          <div class="box-container">
            <div class="box" data-aos="flip-left">
              <img src="images/icon-1.svg" alt="" />
              <h3>service name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                corporis.
              </p>
              <a href="" className="btn">
                Learn more
              </a>
            </div>

            <div class="box" data-aos="flip-left">
              <img src="images/icon-2.svg" alt="" />
              <h3>service name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                corporis.
              </p>
              <a href="" className="btn">
                Learn more
              </a>
            </div>

            <div class="box" data-aos="flip-left">
              <img src="images/icon-3.svg" alt="" />
              <h3>service name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                corporis.
              </p>
              <a href="" className="btn">
                Learn more
              </a>
            </div>

            <div class="box" data-aos="flip-left">
              <img src="images/icon-3.svg" alt="" />
              <h3>service name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                corporis.
              </p>
              <a href="" className="btn">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section className="courses" id="Courses">
          <h1 className="heading">Explore Trending courses</h1>

          <Swiper className="dialogs" slidesPerView={3} loop={true}>
            <SwiperSlide
              className="dialog"
              style={{ backgroundImage: "url('/bg.png')" }}
            >
              <div className="heading">Lorem, ipsum.</div>
              <p className="text">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sit provident, quas voluptatem minima explicabo ullam omnis
                dolore aut ratione.
              </p>
            </SwiperSlide>
            <SwiperSlide className="dialog">
              <div className="heading">Course Name</div>
              <p className="text">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, itaque?
              </p>
            </SwiperSlide>
            <SwiperSlide className="dialog">
              <div className="heading">Lorem, ipsum.</div>
              <p className="text">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, itaque?
              </p>
            </SwiperSlide>
            <SwiperSlide className="dialog">
              <div className="heading">Lorem, ipsum.</div>
              <p className="text">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, itaque?
              </p>
            </SwiperSlide>
            <SwiperSlide className="dialog">
              <div className="heading">Lorem, ipsum.</div>
              <p className="text">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, itaque?
              </p>
            </SwiperSlide>
            <SwiperSlide className="dialog">
              <div className="heading">Lorem, ipsum.</div>
              <p className="text">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, itaque?
              </p>
            </SwiperSlide>
            <SwiperSlide className="dialog">
              <div className="heading">Lorem, ipsum.</div>
              <p className="text">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, itaque?
              </p>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="video">
          <h1 className="heading">Learn how it works?</h1>
          {/* <video src="https://placehold.co/600x400/png"></video> */}
          <img
            src="https://placehold.co/500x200/png"
            alt=""
            data-aos="zoom-out"
          />
        </section>

        <section class="features" id="features">
          <div class="heading">
            <h1>some of our key features</h1>
          </div>

          <div class="box-container">
            <div class="box">
              <div class="image" data-aos="zoom-in-right">
                <img src="/feature-1.svg" height={600} alt="" />
              </div>
              <div class="content" data-aos="zoom-in-left">
                <h3>
                  pick a course <span class="line-down"> location!</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto nisi fugit saepe quisquam adipisci. Consectetur ipsum
                  cumque beatae accusantium similique mollitia commodi, atque
                  laborum, id, eos illo recusandae!
                </p>
              </div>
            </div>

            <div class="box">
              <div class="image" data-aos="zoom-in-left">
                <img src="/feature-2.svg" alt="" />
              </div>
              <div class="content" data-aos="zoom-in-right">
                <h3>
                  Learn and <span class="line-down">explore</span> designs
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto nisi fugit saepe quisquam adipisci. Consectetur ipsum
                  cumque beatae accusantium similique mollitia commodi, atque
                  laborum, id, eos illo recusandae!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="Faqsection" id="faq">
          <h1 className="heading">Frequently Asked Questions</h1>
          <Faq />
        </section>

        <section class="footer">
          <div class="box-container">
            <div class="box">
              <h3>Affliliated Rituals</h3>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae sit qui voluptate amet ad quasi doloremque accusamus
                aperiam beatae culpa.
              </p>
            </div>
            <div class="box">
              <h3>quick links</h3>
              <a href="#home">home</a>
              <a href="#services">services</a>
              <a href="#Courses">Courses</a>
              <a href="#features">features</a>
              <a href="#faq">Faq</a>
            </div>

            <div class="box">
              <h3>extra links</h3>
              <a href="#_">Blogs</a>
              <a href="#_">Documentation</a>
              <a href="#_">Terms & conditions</a>
            </div>

            <div class="box">
              <h3>contact info</h3>
              <a href="#">+123-456-7890</a>
              <a href="#">example@gmail.com</a>
              <a href="#">Kolkata, india - 400104</a>
            </div>
          </div>

          <div class="credit">
            <span> Afflilated Rituals </span> | all rights reserved{" "}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
