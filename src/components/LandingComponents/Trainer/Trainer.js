import React from 'react';
import './Trainer.css';
import trainerImage from "./trainer.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trainer() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    const trainerData = [
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        },
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        },
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        },
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        }
    ];

    return (
        <div className='trainer-container'>
            <p className='trainer-paragraph'>
                Let's meet with the team of our industry expert trainers. We believe that you will be able to change your life with the most advanced AI integrated training module cooked by Affiliate Ritual.
            </p>

            {/* slider-container = coming from slick-carousel */}
            <div className="slider-container">
                <Slider {...settings} className="trainer-item-wrapper">
                    {trainerData.map((item, i) => (
                        <div key={i} className="trainer-item">
                            <img
                                className="trainer-img"
                                src={item.imgLink}
                                alt={item.name}
                            />
                            <div className='trainer-name'> {item.name} </div>
                            <div className='trainer-position'> {item.position} </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Trainer;
