import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoImage from './videoImage.jpg';
import styles from "./Club.module.css";  // Highlighted: Importing CSS module

function Club() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    const clubData = [
        {
            videoId: "qSne6OD6EcE",
            mediaLink: videoImage,
            name: "ANI News"
        },
        {
            videoId: "qSne6OD6EcE",
            mediaLink: videoImage,
            name: "The Print"
        },
        {
            videoId: "qSne6OD6EcE",
            mediaLink: videoImage,
            name: "ANI News"
        },
        {
            videoId: "qSne6OD6EcE",
            mediaLink: videoImage,
            name: "The Print"
        },
        {
            videoId: "qSne6OD6EcE",
            mediaLink: videoImage,
            name: "ANI News"
        },
        {
            videoId: "qSne6OD6EcE",
            mediaLink: videoImage,
            name: "The Print"
        },
    ];

    return (
        <div>
            <p className={styles.clubParagraph}> {/* Highlighted: Using CSS module */}
                Hear From Our Club Leader And Club Member
            </p>

            {/* slider-container = coming from slick-carousel */}
            <div className="slider-container">
                <Slider {...settings} className={styles.clubItemContainer}> {/* Highlighted: Using CSS module */}
                    {clubData.map((item, i) => (
                        <div key={i} className={styles.clubItem}> {/* Highlighted: Using CSS module */}
                            <iframe
                                className={styles.clubImg}
                                src={`https://www.youtube.com/embed/${item.videoId}?controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen={false}
                            ></iframe>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Club;
