import React from 'react'
import './Proof.css'
import proof01 from "./proof01.png"
import proof34 from "./proof34.jpg"
import proof35 from "./proof35.jpg"
import proof36 from "./proof36.jpg"

// import proof39 from "./proof39.jpg"
// import proof42 from "./proof42.jpg"


function Proof() {
    const proof = [
        {
            imgLink: proof01,
            alt: "alt name"
        },
        {
            imgLink: proof34,
            alt: "alt name"
        },
        {
            imgLink: proof35,
            alt: "alt name"
        },
        {
            imgLink: proof36,
            alt: "alt name"
        },

    ];
    return (
        <div className='proof-container'>
            <p className='proof-paragraph'>Not enough? Do you want more? Come with me. I have something for you and that will definitely give you satisfaction!</p>
            <div className='proof-items'>
                {proof.map((item, i) => (
                    <img
                        key={i}
                        className="proof-img"
                        src={item.imgLink}
                        alt='screenshot as proof'
                    />
                ))}
            </div>

        </div>
    )
}

export default Proof