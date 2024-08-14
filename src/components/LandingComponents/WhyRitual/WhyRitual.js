import React from 'react'
import './WhyRitual.css'
import advance from "./advance.png"
import certificate from "./certificate.png"
import freelance from "./freelance.png"
import placement from "./placement.png"
import sap_bussiness from "./sap_bussiness.png"
import trainers from "./trainers.png"
import twoStar from "./twoStar.png"

function WhyRitual() {
    const whyRitual = [
        {
            icon: trainers,
            title: "Expert Trainers",
            description: "Get live training from Industry experts, Step by step from scratch."
        },
        {
            icon: advance,
            title: "Most Advanced Training",
            description: "Loaded with trending and most advanced AI based tools. 90% Practical Class."
        },
        {
            icon: certificate,
            title: "Earn Certificate",
            description: "Undoubtedly the certificate will boost your career to get job fast. But, still you need to be skilled at first."
        },
        {
            icon: freelance,
            title: "Freelancing Opportunity",
            description: "Learn the secret of international freelancing client from marketplace like Upwork, Fiverr etc."
        },
        {
            icon: placement,
            title: "Placement Assistance",
            description: "We provide 100% placement asst. from our sister concern and placement partner Mahadev Enterprise"
        },
        {
            icon: sap_bussiness,
            title: "SAP Business",
            description: "An automated business software  where everything is free!"
        }
    ];

    return (
        <div className="whyRitual-container">
            {whyRitual.map((item, i) => (
                <div key={i} className="whyRitual-item">
                    < img src={twoStar} alt='twostar' className='whyRitual-sparkle' />
                    <div className='whyRitual-icon-title-wrapper'>
                        <div
                            className="whyRitual-icon">
                            <img
                                className='whyRitual-icon-img'
                                src={item.icon}
                                alt={item.title}
                            />
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