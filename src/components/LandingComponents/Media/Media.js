import React from 'react'
import './Media.css'
function Media() {
    const mediaData = [
        {
            logo: "https://via.placeholder.com/100x50.png?text=ANI+News",
            name: "ANI News"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=The+Print",
            name: "The Print"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=BBC+News",
            name: "BBC News"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=Reuters",
            name: "Reuters"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=CNN",
            name: "CNN"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=Al+Jazeera",
            name: "Al Jazeera"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=The+Hindu",
            name: "The Hindu"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=NDTV",
            name: "NDTV"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=The+Indian+Express",
            name: "The Indian Express"
        },
        {
            logo: "https://via.placeholder.com/100x50.png?text=Hindustan+Times",
            name: "Hindustan Times"
        }
    ];
    
  return (
    <div className='media-container'>
    <p className='media-paragraph'>Let's meet with the team of our  industry expert medias. We believe that you will be able to change your life with the most advanced AI integrated training module cooked by Affiliate Ritual.</p>
    <div className='media-items'>
        {mediaData.map((item, i) => (
            <div className='media-item-wrapper'>
                <img
                    key={i}
                    className="media-img"
                    src={item.logo}
                    alt={item.alt}
                />
                <p className='media-name'>{item.name}</p>
            </div>
        ))}
    </div>
</div>
  )
}

export default Media