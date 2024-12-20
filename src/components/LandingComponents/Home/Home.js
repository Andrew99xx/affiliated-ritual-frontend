import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./Home.css";
import image from './image.webp';
import jackpot from "./jackpot.png";
import newBanner from "./newBanner.png";

function Home({ onOpenLaunch }) {
    const navigate = useNavigate();

    useEffect(() => {
        // Add the 'revealed' class after a small delay to trigger the animation
        const highlightElements = document.querySelectorAll('.home-hook-highlight');
        highlightElements.forEach(el => {
            setTimeout(() => el.classList.add('revealed'), 500);
        });
    }, []);

    return (
        <div className='home'>
            <div className='home-text-wrapper'>
                <div className='home-heading'>Welcome to the future!</div>
                <div className='home-hook'>
                    The only <span className='home-hook-highlight'>place</span> where you can earn Real <span className='home-hook-highlight'>Cash</span>.
                </div>
                <div className='home-tag'>Learn, Earn and Jackpot - Zero Investment!</div>
                <button
                    className='home-btn'
                    onClick={onOpenLaunch}
                >
                    LAUNCH
                </button>
            </div>

            <div className='home-img-svg-wrapper'>
                <div className='home-img-wrapper'>
                    {/* Framer Motion Animation Here */}
                    <motion.img
                        src={newBanner}
                        alt='home-img'
                        className='home-img'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                    {/* <motion.div
                        className='home-top-card'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Work From Home <br /> 100%
                    </motion.div> */}
                    {/* <motion.div
                        className='home-left-card'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className='home-left-card-percent'>
                            WIN A JACKPOT
                        </div>
                        <div className="home-left-card-image-container">
                            <img
                                className='home-left-card-jackpot-img'
                                src={jackpot}
                                alt={"Jackpot"}
                            />
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
