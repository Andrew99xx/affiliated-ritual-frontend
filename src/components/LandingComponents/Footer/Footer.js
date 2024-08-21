import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div class="box-container">
                <div class="box">
                    <h3>Affliliated Ritual</h3>
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
                    <a href="#package">Products </a>
                    <a href="#leaderboard_section">Leaderboard</a>
                    <a href="#media_section">Media Presence</a>
                    <a href="/teammember?action=register">Become a partner</a>
                    <a href="/trainer?action=register">Become a trainer</a>
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
                    <p>  © 2023-2024 Affiliate Ritual.  | All rights reserved.{" "}  </p>
                </div>

                <div>
                    <p>  Term of Use  | Privacy Policy{" "}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer