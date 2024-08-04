import React from 'react';
import './Feedback.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa6";

function Feedback() {
    const feedback = [
        {
            icon: "⭐",
            title: "Expert Trainers",
            description: "Get live training from Industry experts, Step by step from scratch. Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc.",
            position: "UI/UX Designer"
        },
        {
            icon: "👨‍🏫",
            title: "Most Advanced Training",
            description: "Loaded with trending and most advanced AI based tools. 90% Practical Class. Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc.",
            position: "Developer"
        },
        {
            icon: "🎓",
            title: "Earn Certificate",
            description: "Undoubtedly the certificate will boost your career to get job fast. But, still you need to be skilled at first.",
            position: "Project Manager"
        },
        {
            icon: "⭐",
            title: "Freelancing Opportunity",
            description: "Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc. Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc.",
            position: "Freelancer"
        },
        {
            icon: "🎓",
            title: "Placement Assistance",
            description: "We provide 100% placement asst. from our sister concern and placement partner Mahadev Enterprise. Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc.",
            position: "Consultant"
        },
        {
            icon: "⭐",
            title: "SAP Business",
            description: "An automated business software where everything is free!. Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc.",
            position: "Business Analyst"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className='feedback-main'>
            <p className='feedback-paragraph'>Some reviews that never lies. check their stories and let's change your career in a snap. Change the system!</p>

            {/* slider-container = coming from slick-carousel */}
            <div className="slider-container">
                <Slider {...settings} className='feedback-container'>
                    {feedback.map((item, i) => (
                        <div key={i} className="feedback-item">
                            <div className='feedback-itp-wrapper'>
                                <div className="feedback-icon">{item.icon}</div>
                                <div className='feedback-tp-wrapper'>
                                    <div className="feedback-title">{item.title}</div>
                                    <div className="feedback-position">{item.position}</div>
                                </div>
                                < FaQuoteRight className='feedback-quote-right'/>
                            </div>
                            <div className="feedback-description">{item.description}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
}

export default Feedback;
