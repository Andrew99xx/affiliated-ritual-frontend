import React from 'react'
import './Club.css'
import videoImage from './videoImage.jpg'

function Club() {
    const clubData = [
        {
            mediaLink:videoImage,
            name: "ANI News"
        },
        {
            mediaLink:videoImage,
            name: "The Print"
        },
    ];

    return (
        <div className='club-container'>
            <p className='club-paragraph'>Hear From Our
            Club Leader And Club Member</p>
            <div className='club-items'>
                {clubData.map((item, i) => (
                    <div key={i} className='club-item-wrapper'>
                        <img
                            className="club-img"
                            src={item.mediaLink}
                            alt={item.name}
                        />
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Club