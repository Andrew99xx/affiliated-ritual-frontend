import React from 'react';
import './Trainer.css';

function Trainer() {
    const trainer = [
        {
            imgLink: "https://via.placeholder.com/250x300.png?text=Placeholder+Image",
            alt: "alt name",
            name: "Jacob",
            position: "UI Ux expert"
        },
        {
            imgLink: "https://via.placeholder.com/250x300.png?text=Placeholder+Image",
            alt: "alt name",
            name: "Jacob",
            position: "UI Ux expert"
        },
        {
            imgLink: "https://via.placeholder.com/250x300.png?text=Placeholder+Image",
            alt: "alt name",
            name: "Jacob",
            position: "UI Ux expert"
        },
        {

            imgLink: "https://via.placeholder.com/250x300.png?text=Placeholder+Image",
            alt: "alt name",
            name: "Jacob",
            position: "UI Ux expert"
        }
    ];

    return (
        <div className='trainer-container'>
            <p className='trainer-paragraph'>Let's meet with the team of our  industry expert trainers. We believe that you will be able to change your life with the most advanced AI integrated training module cooked by Affiliate Ritual.</p>
            <div className='trainer-items'>
                {trainer.map((item, i) => (

                    <div className='trainer-item-wrapper'>
                        <img
                            key={i}
                            className="trainer-img"
                            src={item.imgLink}
                            alt={item.alt}
                        />
                        <p className='trainer-name'>{item.name}</p>
                        <p className='trainer-position'>{item.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trainer;
