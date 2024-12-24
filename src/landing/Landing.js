import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./header/Header";
import Footer from "./Footer/Footer"
import Main from "./main/Main"
import HeaderLoginOptions from "../components/LandingComponents/HeaderLoginOptions/HeaderLoginOptions"
import HeaderRegisterOptions from "../components/LandingComponents/HeaderRegisterOptions/HeaderRegisterOptions"


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
        // Initialize AOS
        Aos.init();
    }, []);


    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
    const [isHovered, setIsHovered] = useState(false);

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

    // Update `activeHash` when URL fragment changes
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || "#home");
        };

        // Listen for hash changes
        window.addEventListener("hashchange", handleHashChange);

        // Cleanup event listener
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);


    return (
        <>

            {/* login & register options - popup */}
            <HeaderLoginOptions isLoginOpen={isLoginOpen} closeLogin={closeLogin} />
            <HeaderRegisterOptions isRegisterOpen={isRegisterOpen} closeRegister={closeRegister} />



            <Header
                isNavbarVisible={isNavbarVisible}
                toggleNavbar={toggleNavbar}
                activeHash={activeHash}
                openLogin={openLogin}
                openRegister={openRegister}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
            />

            {
                /* important note
                   - header is given 12vh
                   - main - hero section is given 88vh 
                   --- hero section - home has given = 68vh
                   --- hero section - introstats has given = 20vh
                */
            }
            <Main openRegister={openRegister} />
            <Footer />
        </>
    );
};

export default Landing;
