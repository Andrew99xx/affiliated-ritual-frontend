import React from 'react';
import { motion } from 'framer-motion';
import styles from './Banner.module.css';

function Banner({ openSignup }) {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerParagraph}>
                Do you want to be one of them?
                <br />
                Join Affiliate Ritual Now
            </div>

            <motion.button
                className={styles.bannerBtn}
                onClick={openSignup}
                whileHover={{
                    scale: 1.05,
                    rotate: [0, 2, -2, 0],
                    transition: { duration: 0.5, ease: "easeInOut" },
                }}
                whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.2 }
                }}
                initial="initial"
                animate="animate"
                variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { delay: 0.3, duration: 1 } }
                }}
            >
                Signup for free
                <motion.div
                    className={styles.shimmer}
                    initial={{ x: "-150%" }}
                    animate={{ x: "150%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
            </motion.button>
        </div>
    );
}

export default Banner;
