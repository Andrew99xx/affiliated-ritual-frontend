import React from 'react';
import './Feedback.css';

function Feedback() {
    const feedback = [
        {
            icon: "⭐",
            title: "Expert Trainers",
            description: "Get live training from Industry experts, Step by step from scratch.",
            position: "UI/UX Designer"
        },
        {
            icon: "👨‍🏫",
            title: "Most Advanced Training",
            description: "Loaded with trending and most advanced AI based tools. 90% Practical Class.",
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
            description: "Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc.",
            position: "Freelancer"
        },
        {
            icon: "🎓",
            title: "Placement Assistance",
            description: "We provide 100% placement asst. from our sister concern and placement partner Mahadev Enterprise",
            position: "Consultant"
        },
        {
            icon: "⭐",
            title: "SAP Business",
            description: "An automated business software where everything is free!",
            position: "Business Analyst"
        }
    ];

    return (

        <div className='feedback-main'>
            <p className='feedback-paragraph'>Some reviews that never lies. check their stories and let's change your career in a snap. Change the system!</p>
            <div className="feedback-container">
                {feedback.map((item, i) => (
                    <div key={i} className="feedback-item">
                        <div className='feedback-itp-wrapper'>
                            <div className="feedback-icon">{item.icon}</div>
                            <div className='feedback-tp-wrapper'>
                                <div className="feedback-title">{item.title}</div>
                                <div className="feedback-position">{item.position}</div>
                            </div>
                        </div>
                        <div className="feedback-description">{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feedback;
