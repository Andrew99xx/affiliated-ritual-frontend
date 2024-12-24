import React from 'react';
import { motion } from 'framer-motion';
import styles from './IntroStats.module.css';
import fiveStar from "./fiveStar.png";
import recording from "./recording.png";
import users from "./users.png";
import videoIcon from "./video.png";

function IntroStats() {
    const stats = [
        {
            icon: fiveStar,
            title: "5 star ",
            description: "Rating on Google"
        },
        {
            icon: users,
            title: "Learn & Earn",
            description: "Opportunity"
        },
        {
            icon: recording,
            title: "Live",
            description: "Personal Mentorship"
        },
        {
            icon: videoIcon,
            title: "Class Recording",
            description: "Lifetime Access"
        }
    ];

    return (
        <div className={styles.container}>
            {stats.map((item, i) => (
                <motion.div
                    key={i}
                    className={styles.item}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className={styles.icon}>
                        <img
                            className={styles.img}
                            src={item.icon}
                            alt={item.title}
                        />
                    </div>
                    <div className={styles.titleDesWrapper}>
                        <div className={styles.title}>{item.title}</div>
                        <div className={styles.description}>{item.description}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default IntroStats;
