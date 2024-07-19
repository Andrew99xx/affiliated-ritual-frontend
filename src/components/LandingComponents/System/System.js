import React from 'react'
import './System.css'

function System() {
    const systemData = [
        {
            mediaLink: "https://via.placeholder.com/100x50.png?text=ANI+News",
            name: "ANI News"
        },
        {
            mediaLink: "https://via.placeholder.com/100x50.png?text=The+Print",
            name: "The Print"
        },
    ];

    return (
        <div className='system-container'>
            <p className='system-paragraph'>Affiliate Ritual is introducing India's first ever Super Affiliate Passive business model. Where anyone can join and start earning from their home and it totally free! Why we are calling it Super Affiliate or why we are calling it Passive business model? Do you want to know? Take a look at the videos.</p>
            <div className='system-items'>
                {systemData.map((item, i) => (
                    <div key={i} className='system-item-wrapper'>
                        <img
                            className="system-img"
                            src={item.mediaLink}
                            alt={item.name}
                        />
                        <div className='system-name'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default System
