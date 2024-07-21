import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div class="box-container">
                <div class="box">
                    <h3>Affliliated Rituals</h3>
                    <p>
                        {" "}
                        Welcome to India's 1st ever Super Affiliate Passive business Model.
                    </p>
                    <p>Office address</p>
                    <p>customer care number</p>
                </div>
                <div class="box">
                    <h3>Useful Links</h3>
                    <a href="#home">Products </a>
                    <a href="#services">Leaderboard</a>
                    <a href="#Courses">Media Presence</a>
                    <a href="#features">Become a partner</a>
                    <a href="#faq">Become a trainer</a>
                    <a href="#faq">Quizlet Plus</a>
                </div>

                <div class="box">
                    <h3>Our Company</h3>
                    <a href="#_">Contact Us</a>
                    <a href="#_">Disclaimer</a>
                    <a href="#_">Terms and Conditions</a>
                    <a href="#_">Refund Policy</a>
                    <a href="#_">Documents</a>
                </div>

                <div class="box">
                    <h3>Get In Touch</h3>
                    <p>Like, Share, Follow and Subcribe.
                    If you love Affiliate Ritual</p>
                    <a href="#">+123-456-7890</a>
                    <a href="#">example@gmail.com</a>
                    <a href="#">Kolkata, india - 400104</a>
                </div>
            </div>

            <div class="credit">
                <span> Afflilated Rituals </span> | all rights reserved{" "}
            </div>
        </div>
    )
}

export default Footer