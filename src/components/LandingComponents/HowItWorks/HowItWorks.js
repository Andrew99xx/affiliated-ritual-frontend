import React from 'react'
import "./HowItWorks.css"
import jackpot from './jackpot.png'
import learn from './learn.png'
import money from './money.png'

function HowItWorks() {
    const data = [
        {
            imgLink: jackpot,
            name: "01. Learn ",
            description: "Follow the System. Learn step by step. Say no to Hurry."
        },
        {
            imgLink: learn,
            name: "02. Earn",
            description: "Implement our system step by step and start earning from home."
        },
        {
            imgLink: money,
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