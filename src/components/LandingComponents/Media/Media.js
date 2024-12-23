import React from 'react';
import { motion } from 'framer-motion';
import styles from './Media.module.css';

import abpBengala from "./abpBengala.png"
import ahmedabadMirror from "./ahmedabadMirror.png"
import Alj from "./Alj.png"
import ani from "./ani.jpeg"
import bbc from "./bbc.png"
import cnn from "./cnn.jpeg"
import hindustanMetro from "./HindustanMetro.png"
import htimes from "./htimes.jpeg"
import lokmatTimes from "./lokmatTimes.png"
import ly from "./ly.png"
import ndtv from "./ndtv.jpeg"
import reuters from "./reuters.jpeg"
import someNews from "./someNews.png"
import the_hindu from "./the_hindu.jpeg"
import the_print from "./the_print.jpeg"
import theIndianExpress from "./theIndianExpress.jpeg"

function Media() {
    const mediaData = [
        {
            logo: someNews,
            name: "News Nation"
        },
        {
            logo: hindustanMetro,
        },
        {
            logo: ahmedabadMirror,
        },
        {
            logo: reuters,
            name: "REVOI"
        },
        {
            logo: hindustanMetro,
        },
        {
            logo: ly,
            name: "Everyday Subjects"
        },
        {
            logo: abpBengala,
            name: "ABP Ananda"
        },
        {
            logo: hindustanMetro,
        },
        {
            logo: someNews,
            name: "Daily Hunt"
        },
        {
            logo: ly,
            name: "123 Men Life"
        }
    ];

    return (
        <div className={styles.mediaContainer}>
            <p className={styles.mediaParagraph}>Let's meet with the team of our industry expert medias. We believe that you will be able to change your life with the most advanced AI integrated training module cooked by Affiliate Ritual.</p>
            <div className={styles.mediaItems}>
                {mediaData.map((item, i) => (
                    <motion.div
                        key={i}
                        className={styles.mediaItemWrapper}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }}
                    >
                        <img
                            className={styles.mediaImg}
                            src={item.logo}
                            alt={item.name || 'Media Logo'}
                        />
                        {item.name && <p className={styles.mediaName}>{item.name}</p>}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Media;
