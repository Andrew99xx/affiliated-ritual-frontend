import React from 'react';
import "./IntroStats.css";

function IntroStats() {
    const stats = [
        {
            icon: "⭐",
            title: "5 star ",
            description: "Rating on Google"
        },
        {
            icon: "👨‍🏫",
            title: "5 Star",
            description: "Rating on Trustpilot"
        },
        {
            icon: "🎓",
            title: "Live",
            description: "Personal Mentorship"
        },
        {
            icon: "⭐",
            title: "Class Recording",
            description: "Lifetime Accesss"
        }
    ];

    return (
        <div className="introStats-container">
            {stats.map((item, i) => (
                <div key={i} className="introStats-item">
                    <div className="introStats-icon">{item.icon}</div>
                    <div className='introStats-title-des-wrapper'>
                        <div className="introStats-title">{item.title}</div>
                        <div className="introStats-description">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IntroStats;
