import React from 'react'
import './Proof.css'
function Proof() {
    const proof = [
        {
            imgLink: "https://via.placeholder.com/286x393.png?text=Placeholder+Image",
             alt : "alt name"
        },
        {
            imgLink: "https://via.placeholder.com/286x393.png?text=Placeholder+Image",
       alt : "alt name"
        },
        {
            imgLink: "https://via.placeholder.com/286x393.png?text=Placeholder+Image",
             alt : "alt name"
        },
        {
            imgLink: "https://via.placeholder.com/286x393.png?text=Placeholder+Image",
             alt : "alt name"
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