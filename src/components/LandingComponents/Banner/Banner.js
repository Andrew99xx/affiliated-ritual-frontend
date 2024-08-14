import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className='banner-container'>
            <div className="banner-paragraph">
                Do you want to be one of them?
                <br />
                Join Affiliate Ritual Now
            </div>

            <Link to={'/student?action=register'}>
                <button className='banner-btn'>
                    Signup for free
                </button>
            </Link>

        </div>
    )
}

export default Banner