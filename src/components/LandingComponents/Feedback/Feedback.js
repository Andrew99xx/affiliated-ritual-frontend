import React from 'react';
import styles from './Feedback.module.css';
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
        <div className={styles.feedbackMain}>
            <p className={styles.feedbackParagraph}>
                Some reviews that never lie. Check their stories and let's change your career in a snap. Change the system!
            </p>

            <div className={styles.sliderContainer}>
                <Slider {...settings} className={styles.feedbackContainer}>
                    {feedback.map((item, i) => (
                        <div key={i} className={styles.feedbackItem}>
                            <div className={styles.feedbackItpWrapper}>
                                <div className={styles.feedbackIcon}>{item.icon}</div>
                                <div className={styles.feedbackTpWrapper}>
                                    <div className={styles.feedbackTitle}>{item.title}</div>
                                    <div className={styles.feedbackPosition}>{item.position}</div>
                                </div>
                                <FaQuoteRight className={styles.feedbackQuoteRight} />
                            </div>
                            <div className={styles.feedbackDescription}>{item.description}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Feedback;
