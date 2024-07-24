import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div class="box-container">
                <div class="box">
                    <h3>Affliliated Rituals</h3>
                    <div className='footer-banner'></div>
                    <p>
                        {" "}
                        Welcome to India's 1st ever Super Affiliate Passive business Model.
                    </p>
                    <p>Office address</p>
                    <p>customer care number</p>
                </div>
                <div class="box">
                    <h3>Useful Links</h3>
                    <div className='footer-banner'></div>
                    <a href="#products">Products </a>
                    <a href="#leaderboard">Leaderboard</a>
                    <a href="#Courses">Media Presence</a>
                    <a href="#features">Become a partner</a>
                    <a href="#faq-section">Become a trainer</a>
                    <a href="#faq-section">Quizlet Plus</a>
                </div>

                <div class="box">
                    <h3>Our Company</h3>
                    <div className='footer-banner'></div>
                    <a href="#_">Contact Us</a>
                    <a href="#_">Disclaimer</a>
                    <a href="#_">Terms and Conditions</a>
                    <a href="#_">Refund Policy</a>
                    <a href="#_">Documents</a>
                </div>

                <div class="box">
                    <h3>Get In Touch</h3>
                    <div className='footer-banner'></div>
                    <p>Like, Share, Follow and Subcribe.
                        If you love Affiliate Ritual</p>

                    <div className='footer-media'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaWhatsapp />
                        <FaLinkedin />
                        <FaYoutube />
                    </div>

                </div>
            </div>

            <div class="credit">
                <div>
                    <span>  © 2023-2024 Affiliate Ritual.  </span> | All rights reserved.{" "}
                </div>

                <div>
                    <span>  Term of Use </span> | Privacy Policy{" "}
                </div>
            </div>
        </div>
    )
}

export default Footer