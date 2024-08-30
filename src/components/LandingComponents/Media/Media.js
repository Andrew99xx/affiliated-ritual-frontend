import React from 'react'
import './Media.css'

import abpBengala from "./abpBengala.png"
import ahmedabadMirror from "./ahmedabadMirror.png"
import Alj from "./Alj.png"
import ani from "./ani.jpeg"
import bbc from "./bbc.png"
import cnn from "./cnn.jpeg"
import hindustanMetro from "./HindustanMetro.png"
import htimes from "./htimes.jpeg"
import lokmatTimes from "./lokmatTimes.png"
import ly from "./ly.png"
import ndtv from "./ndtv.jpeg"
import reuters from "./reuters.jpeg"
import someNews from "./someNews.png"
import the_hindu from "./the_hindu.jpeg"
import the_print from "./the_print.jpeg"
import theIndianExpress from "./theIndianExpress.jpeg"

function Media() {
    const mediaData = [
        {
            logo: someNews,
            name: "News Nation"
        },
        {
            logo: hindustanMetro,
            // name: "Hindustan Bytes"
        },
        {
            logo: ahmedabadMirror,
            // name: "Ahmedabad Mirror"
        },
        {
            logo: reuters,
            name: "REVOI"
        },
       
        {
            logo: hindustanMetro,
            // name: "Hindustan Metro"
        },
        {
            logo: ly,
            name: "Everyday Subjects"
        },
        {
            logo: abpBengala,
            name: "ABP Ananda"
        },
        {
            logo: hindustanMetro,
            // name: "The Hindustan Express"
        },
        {
            logo: someNews,
            name: "Daily Hunt"
        },
        {
            logo: ly,
            name: "123 Men Life"
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