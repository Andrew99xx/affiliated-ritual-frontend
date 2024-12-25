import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, // Enables automatic sliding
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.proofContainer}>
            <p className={styles.proofParagraph}>
                Not enough? Do you want more? Come with me. I have something for you and that will definitely give you satisfaction!
            </p>

            <div className={styles.proofItems}>
                <Slider {...settings}>
                    {proof.map((item, i) => (
                        <div key={i}>
                            <img
                                className={styles.proofImg}
                                src={item.imgLink}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default Proof;
