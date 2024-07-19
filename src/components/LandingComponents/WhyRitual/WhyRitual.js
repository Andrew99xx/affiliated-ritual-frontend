import React from 'react'
import './WhyRitual.css'

function WhyRitual() {
    const whyRitual = [
        {
            icon: "⭐",
            title: "Expert Trainers",
            description: "Get live training from Industry experts, Step by step from scratch."
        },
        {
            icon: "👨‍🏫",
            title: "Most Advanced Training",
            description: "Loaded with trending and most advanced AI based tools. 90% Practical Class."
        },
        {
            icon: "🎓",
            title: "Earn Certificate",
            description: "Undoubtedly the certificate will boost your career to get job fast. But, still you need to be skilled at first."
        },
        {
            icon: "⭐",
            title: "Freelancing Opportunity",
            description: "Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc."
        },
        {
            icon: "🎓",
            title: "Placement Assistance",
            description: "We provide 100% placement asst. from our sister concern and placement partner Mahadev Enterprise"
        },
        {
            icon: "⭐",
            title: "SAP Business",
            description: "An automated business software  where everything is free!"
        }
    ];

    return (
        <div className="whyRitual-container">
            {whyRitual.map((item, i) => (
                <div key={i} className="whyRitual-item">
                    <div className='whyRitual-icon-title-wrapper'>
                        <div className="whyRitual-icon">{item.icon}
                            
                        </div>
                        <div className="whyRitual-title">{item.title}</div>

                    </div>
                    <div className="whyRitual-description">{item.description}</div>
                </div>
            ))}
        </div>
    )
}

export default WhyRitual