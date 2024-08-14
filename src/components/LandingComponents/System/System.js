import React from 'react'
import './System.css'
import playIcon from "./playIcon.png"

function System() {
    const systemData = [
        {
            videoId: "qSne6OD6EcE",
            name: "describing about our system"
        },
        {
            videoId: "OGXtEdfsnNA",
            name: "describing about our system"
        },
    ];

    return (
        <div className='system-container'>
            <p className='system-paragraph'>
                Affiliate Ritual is introducing India's first ever Super Affiliate Passive business model. Where anyone can join and start earning from their home and it totally free! Why we are calling it Super Affiliate or why we are calling it Passive business model? Do you want to know? Take a look at the videos.
            </p>
            <div className='system-items'>
                {systemData.map((item, i) => (
                    <div key={i} className='system-item-wrapper'>
                        <iframe
                            className="system-video"
                            // src={`https://www.youtube.com/embed/${item.videoId}`}
                            // src={`https://www.youtube.com/embed/${item.videoId}?controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&showinfo=0&autohide=1`}
                            src={`https://www.youtube.com/embed/${item.videoId}?controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&showinfo=0`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen={false}

                        ></iframe>
                        {/* <div className="play-icon-overlay">
                            <img src={playIcon} alt="Play Icon" className="play-icon" />
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default System
