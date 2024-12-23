import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyRitual.module.css'; // Import the CSS Module
import advance from "./advance.png";
import certificate from "./certificate.png";
import freelance from "./freelance.png";
import placement from "./placement.png";
import sap_bussiness from "./sap_bussiness.png";
import trainers from "./trainers.png";
import twoStar from "./twoStar.png";

function WhyRitual() {
    const whyRitual = [
        {
            icon: trainers,
            title: "Expert Trainers",
            description: "Get live training from Industry experts, Step by step from scratch."
        },
        {
            icon: advance,
            title: "Most Advanced Training",
            description: "Loaded with trending and most advanced AI based tools. 90% Practical Class."
        },
        {
            icon: certificate,
            title: "Earn Certificate",
            description: "Undoubtedly the certificate will boost your career to get job fast. But, still you need to be skilled at first."
        },
        {
            icon: freelance,
            title: "Freelancing Opportunity",
            description: "Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc."
        },
        {
            icon: placement,
            title: "Placement Assistance",
            description: "We provide 100% placement asst. from our sister concern and placement partner Mahadev Enterprise"
        },
        {
            icon: sap_bussiness,
            title: "SAP Business",
            description: "An automated business software where everything is free!"
        }
    ];

    return (
        <div className={styles.container}>
            {whyRitual.map((item, i) => (
                <motion.div
                    key={i}
                    className={styles.item}
                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 1
                    }}
                >
                    <img src={twoStar} alt='twostar' className={styles.sparkle} />
                    <div className={styles.iconTitleWrapper}>
                        <div className={styles.icon}>
                            <img
                                className={styles.iconImg}
                                src={item.icon}
                                alt={item.title}
                            />
                        </div>
                        <div className={styles.title}>{item.title}</div>
                    </div>
                    <div className={styles.description}>{item.description}</div>
                </motion.div>
            ))}
        </div>
    );
}

export default WhyRitual;
