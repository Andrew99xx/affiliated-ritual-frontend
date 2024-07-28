import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import videoImage from './videoImage.jpg';
import "./Club.css"

function Club() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
        // centerMode: false,
        // centerPadding: '0px', 
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: false,
                    // centerMode: false,
                    //centerPadding: '0px', 
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    const clubData = [
        {
            mediaLink: videoImage,
            name: "ANI News"
        },
        {
            mediaLink: videoImage,
            name: "The Print"
        },
        {
            mediaLink: videoImage,
            name: "ANI News"
        },
        {
            mediaLink: videoImage,
            name: "The Print"
        },
        {
            mediaLink: videoImage,
            name: "ANI News"
        },
        {
            mediaLink: videoImage,
            name: "The Print"
        },
    ];
    return (
        <div>
            <p className='club-paragraph'>
                Hear From Our Club Leader And Club Member
            </p>

            {/* slider-container = coming from slick-carousel */}
            <div className="slider-container">
                <Slider {...settings} className="club-item-wrapper">
                    {clubData.map((item, i) => (
                        <div key={i} className="club-item">
                            <img
                                className="club-img"
                                src={item.mediaLink}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default Club;
