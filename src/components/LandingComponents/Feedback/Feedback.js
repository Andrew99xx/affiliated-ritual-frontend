import React from 'react';
import './Feedback.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

    return (
        <div className='feedback-main'>
            <p className='feedback-paragraph'>Some reviews that never lies. check their stories and let's change your career in a snap. Change the system!</p>

            <Swiper
                slidesPerView={3}
                loop={true}
                spaceBetween={30}
                className="feedback-container"
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
            >
                {feedback.map((item, i) => (
                    <SwiperSlide key={i} className="feedback-item">
                        <div className='feedback-itp-wrapper'>
                            <div className="feedback-icon">{item.icon}</div>
                            <div className='feedback-tp-wrapper'>
                                <div className="feedback-title">{item.title}</div>
                                <div className="feedback-position">{item.position}</div>
                            </div>
                        </div>
                        <div className="feedback-description">{item.description}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Feedback;
