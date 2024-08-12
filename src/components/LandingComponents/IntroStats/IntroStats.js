import React from 'react';
import "./IntroStats.css";
import fiveStar from "./fiveStar.png"
import recording from "./recording.png"
import users from "./users.png"
import videoIcon from "./video.png"

function IntroStats() {
    const stats = [
        {
            icon: fiveStar,
            title: "5 star ",
            description: "Rating on Google"
        },
        {
            icon: users,
            title: "5 Star",
            description: "Rating on Trustpilot"
        },
        {
            icon: recording,
            title: "Live",
            description: "Personal Mentorship"
        },
        {
            icon: videoIcon,
            title: "Class Recording",
            description: "Lifetime Accesss"
        }
    ];

    return (
        <div className="introStats-container">
            {stats.map((item, i) => (
                <div key={i} className="introStats-item">
                    <div className="introStats-icon">
                        <img 
                        className='introStats-img'
                        src={item.icon} 
                        alt={item.title} 
                        />
                    </div>
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
