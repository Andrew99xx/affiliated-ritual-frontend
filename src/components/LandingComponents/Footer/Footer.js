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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Repudiandae sit qui voluptate amet ad quasi doloremque accusamus
                        aperiam beatae culpa.
                    </p>
                </div>
                <div class="box">
                    <h3>quick links</h3>
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#Courses">Courses</a>
                    <a href="#features">features</a>
                    <a href="#faq">Faq</a>
                </div>

                <div class="box">
                    <h3>extra links</h3>
                    <a href="#_">Blogs</a>
                    <a href="#_">Documentation</a>
                    <a href="#_">Terms & conditions</a>
                </div>

                <div class="box">
                    <h3>contact info</h3>
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