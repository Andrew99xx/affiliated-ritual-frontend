import React from 'react'
import "./Home.css"
import image from './image.png'
import yellow_background from "./yellow_background.jpg"
import companyLogo from './reuters.jpeg'

function Home() {
    const companyLogoes = [
        { src: companyLogo, alt: 'Image 1' },
        { src: companyLogo, alt: 'Image 2' },
        { src: companyLogo, alt: 'Image 3' },
        { src: companyLogo, alt: 'Image 4' },
        { src: companyLogo, alt: 'Image 5' }
    ];

    return (
        <div className='home'>

            <div className='home-text-wrapper'>
                <div className='home-heading'>Welcome to the future!</div>
                <div className='home-hook'>
                    The only <span className='home-hook-highlight'>place</span> where you can earn Real <span className='home-hook-highlight'>Cash</span>.
                </div>

                <div className='home-tag'>Learn, Earn and Jackpot - Zero Investment!</div>
                <button className='home-btn'>
                    LAUNCH
                </button>
            </div>

            <div className='home-img-svg-wrapper'>
                {/* add svg - todo - currently this is getting overlapped by image, why */}
                <div className='home-svg-wrapper'>
                    <img
                        src={yellow_background}
                        alt='home-svg'
                        className='home-svg'
                    />
                </div>
                <div children='home-img-wrapper'>
                    <img
                        src={image}
                        alt='home-img'
                        className='home-img'
                    />
                    <div className='home-top-card'>BUSINESS OPPORTUNITY</div>
                    <div className='home-left-card'>
                        <div className='home-left-card-percent'>
                            110%
                        </div>

                        <div>
                            Placement Asst.
                        </div>

                        <div className="home-left-card-image-container">
                            {companyLogoes.map((item, index) => (
                                <div key={index} className="home-left-card-image-item">
                                    <img src={item.src} alt={item.alt} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home