import React from 'react';
import { motion } from 'framer-motion';
import styles from './Media.module.css';

import abpBengala from "./abpBengala.png"
import ahmedabadMirror from "./ahmedabadMirror.png"
import Alj from "./Alj.png"
import ani from "./ani.jpeg"
import bbc from "./bbc.png"
import cnn from "./cnn.jpeg"
import dailyhunt from "./dailyhunt.png"
import hindustanMetro from "./HindustanMetro.png"
import htimes from "./htimes.jpeg"
import lokmatTimes from "./lokmatTimes.png"
import ly from "./ly.png"
// import hindustanMetro from "./HindustanMetro.png"
import hindustan from "./hindustan-bytes.jpg"
import ndtv from "./ndtv.jpeg"
import reuters from "./reuters.jpeg"
import newsNation from "./newsNation.png"
import someNews from "./someNews.png"
import the_hindu from "./the_hindu.jpeg"
import the_print from "./the_print.jpeg"
import theIndianExpress from "./theIndianExpress.jpeg"

function Media() {
    const mediaData = [
        {
            logo: dailyhunt,
            // name: "Daily Nation",
            link: "https://m.dailyhunt.in/news/india/english/republic+news+india-epaper-dhfacc36dfce9c4bb68db0e89d033c921b/affiliate+ritual+leading+edtech+platform+empowering+educated+youths+to+become+financially+independent-newsid-dhfacc36dfce9c4bb68db0e89d033c921b_5794bad0854411efbfc5cb9e96709a27?sm=Y"
        },
        {
            logo: hindustan,
            name: "Hindustan Bytes",
            link: "https://www.hindustanbytes.com/affiliate-ritual-leading-ed-tech-platform-empowering-educated-youths-to-become-financially-independent"
        },

        {
            logo: hindustanMetro,
            // name: "Hindustan Metro",
            link: "https://hindustanmetro.com/navigating-the-new-wave-of-online-earning-with-affiliate-ritual/"
        },
        {
            logo: newsNation,
            name: "News Nation",
            link: "https://english.newsnationtv.com/brand-stories/brand-stories-english/supriyo-chatterjee-the-man-behind-affiliate-ritual-and-his-inspiring-journey-of-self-resilience-and-tenacity-6943939"
        },
        {
            logo: abpBengala,
            name: "ABP Ananda",
            link: "https://bengali.abplive.com/brand-wire/revolution-in-affiliate-marketing-affiliate-ritual-2-point-0-launched-1091006"
        },

        {
            logo: ahmedabadMirror,
            // name: "Ahemdabad Mirror",
            link: "https://www.ahmedabadmirror.com/affiliate-ritual-20-by-supriyo-chatterjee-a-revolutionary-move-towards-online-success/81874460.html"
        },

    ];

    return (
        <div className={styles.mediaContainer}>
            <p className={styles.mediaParagraph}>Let's meet with the team of our industry expert medias. We believe that you will be able to change your life with the most advanced AI integrated training module cooked by Affiliate Ritual.</p>
            <div className={styles.mediaItems} >
                {mediaData.map((item, i) => (
                    <motion.div
                        onClick={() => {
                            window.open(item.link, "_blank"); // Open the link in a new tab
                        }}
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
