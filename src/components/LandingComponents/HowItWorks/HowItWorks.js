import React from 'react';
import { motion } from 'framer-motion';
import "./HowItWorks.css";
import jackpot from './jackpot.png';
import learn from './learn.png';
import money from './money.png';

function HowItWorks() {
    const data = [
        {
            imgLink: learn,
            name: "01. Learn ",
            description: "Follow the System. Learn step by step. Say no to Hurry."
        },
        {
            imgLink: money,
            name: "02. Earn",
            description: "Implement our system step by step and start earning from home."
        },
        {
            imgLink: jackpot,
            name: "03. Jackpot",
            description: "Play Jackpot every month by using your free affiliate coin. Learn, Earn and Jackpot!"
        }
    ];

    return (
        <div className="howItWorks-container">
            {data.map((item, i) => (
                <React.Fragment key={i}>
                    <motion.div
                        className="howItWorks-items"
                        whileInView={{
                            rotate: [0, 10, -10, 10, 0], // Jiggle effect
                            transition: { duration: 0.5, ease: "easeInOut" }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                        >
                        <img
                            className="howItWorks-imglink"
                            src={item.imgLink}
                            alt={item.name}
                           
                        />
                        <div className="howItWorks-name">
                            {item.name}
                        </div>
                        <div className="howItWorks-description">
                            {item.description}
                        </div>
                    </motion.div>
                    {i < data.length - 1 && <div className="howItWorks-divider" />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default HowItWorks;
