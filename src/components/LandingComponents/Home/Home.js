import React from 'react'
import "./Home.css"
import image from './image.png'

function Home() {
    return (
        <div className='home'>

            <div className='home-text-wrapper'>
                <div className='home-heading'>Welcome to the future!</div>
                <div className='home-hook'>The only place where you can earn Real Cash.</div>
                <div className='home-tag'>Learn, Earn and Jackpot - Zero Investment!</div>
                <button className='home-btn'>
                    LAUNCH
                </button>
            </div>

            <div className='home-img-svg-wrapper'>
                {/* add svg - todo */}
                <div className='home-svg'></div>
                <div children='home-img-wrapper'>
                    <img
                        src={image}
                        alt='home-img'
                        className='home-img'
                    />
                    <div className='home-top-card'>BUSINESS OPPORTUNITY</div>
                    <div className='home-left-card'>110% Placement Asst.</div>
                </div>
            </div>
        </div>
    )
}

export default Home