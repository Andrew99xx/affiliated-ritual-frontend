import React from 'react'
import "./HowItWorks.css"

function HowItWorks() {
    const data = [
        {
            imgLink: "https://placehold.co/80x80/png",
            name: "01. Learn ",
            description: "Follow the System. Learn step by step. Say no to Hurry."
        },
        {
            imgLink: "https://placehold.co/80x80/png",
            name: "02. Earn",
            description: "Implement our system step by step and start earning from home."
        },
        {
            imgLink: "https://placehold.co/80x80/png",
            name: "03. Jackpot",
            description: "Play Jackpot every month by using your free affiliate coin. Learn, Earn and Jackpot!"
        }
    ];

    return (
        <div className="howItWorks-container">
            {data.map((item, i) => (
                <div key={i} className="howItWorks-items" >
                    <img
                        className="howItWorks-imglink"
                        src={item.imgLink}
                    />
                    <div className="howItWorks-name">
                        {item.name}
                    </div>
                    <div className='howItWorks-description'>
                        {item.description}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default HowItWorks