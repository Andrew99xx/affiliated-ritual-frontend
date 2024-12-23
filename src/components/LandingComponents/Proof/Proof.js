import React from 'react';
import styles from './Proof.module.css';
import proof01 from "./proof01.png";
import proof34 from "./proof34.jpg";
import proof35 from "./proof35.jpg";
import proof36 from "./proof36.jpg";

// import proof39 from "./proof39.jpg"
// import proof42 from "./proof42.jpg"

function Proof() {
    const proof = [
        {
            imgLink: proof01,
            alt: "alt name"
        },
        {
            imgLink: proof34,
            alt: "alt name"
        },
        {
            imgLink: proof35,
            alt: "alt name"
        },
        {
            imgLink: proof36,
            alt: "alt name"
        },
    ];

    return (
        <div className={styles.proofContainer}>
            <p className={styles.proofParagraph}>
                Not enough? Do you want more? Come with me. I have something for you and that will definitely give you satisfaction!
            </p>
            <div className={styles.proofItems}>
                {proof.map((item, i) => (
                    <img
                        key={i}
                        className={styles.proofImg}
                        src={item.imgLink}
                        alt={item.alt}
                    />
                ))}
            </div>
        </div>
    );
}

export default Proof;
