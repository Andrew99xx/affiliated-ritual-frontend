import React from 'react'
import './Club.css'
function Club() {
    const clubData = [
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
                        <div className='club-name'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Club