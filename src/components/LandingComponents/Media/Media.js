import React from 'react'
import './Media.css'

import Alj from "./Alj.png"
import ani from "./ani.jpeg"
import bbc from "./bbc.png"
import cnn from "./cnn.jpeg"
import htimes from "./htimes.jpeg"
import ndtv from "./ndtv.jpeg"
import reuters from "./reuters.jpeg"
import the_hindu from "./the_hindu.jpeg"
import the_print from "./the_print.jpeg"
import theIndianExpress from "./theIndianExpress.jpeg"

function Media() {
    const mediaData = [
        {
            logo: ani,
            name: "ANI News"
        },
        {
            logo: the_print,
            name: "The Print"
        },
        {
            logo: bbc,
            name: "BBC News"
        },
        {
            logo: reuters,
            name: "Reuters"
        },
        {
            logo: cnn,
            name: "CNN"
        },
        {
            logo: Alj,
            name: "Al Jazeera"
        },
        {
            logo: the_hindu,
            name: "The Hindu"
        },
        {
            logo: ndtv,
            name: "NDTV"
        },
        {
            logo: theIndianExpress,
            name: "The Indian Express"
        },
        {
            logo: htimes,
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