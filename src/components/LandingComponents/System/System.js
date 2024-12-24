import React from 'react';
import { motion } from 'framer-motion';
import styles from './System.module.css'; // Import the CSS Module
import playIcon from "./playIcon.png";

function System() {
    const systemData = [
        {
            videoId: "qSne6OD6EcE",
            name: "Describing about our system"
        },
        {
            videoId: "OGXtEdfsnNA",
            name: "Describing about our system"
        },
    ];

    return (
        <div className={styles.container}>
            <p className={styles.paragraph}>
                Affiliate Ritual is introducing India's first ever Super Affiliate Passive business model. Where anyone can join and start earning from their home and it totally free! Why we are calling it Super Affiliate or why we are calling it Passive business model? Do you want to know? Take a look at the videos.
            </p>
            <div className={styles.items}>
                {systemData.map((item, i) => (
                    <motion.div
                        key={i}
                        className={styles.itemWrapper}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the item is in the viewport
                    >
                        <iframe
                            className={styles.video}
                            src={`https://www.youtube.com/embed/${item.videoId}?controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen={false}
                        ></iframe>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default System;
