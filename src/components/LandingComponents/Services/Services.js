import React from 'react'
import "./Services.css"

function Services() {
    return (
        <div class="services">
            <div class="heading">
                <h1>what we provide?</h1>
            </div>

            <div class="box-container">
                <div class="box" data-aos="flip-left">
                    <img src="images/icon-1.svg" alt="" />
                    <h3>service name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                        corporis.
                    </p>
                    <a href="" className="btn">
                        Learn more
                    </a>
                </div>

                <div class="box" data-aos="flip-left">
                    <img src="images/icon-2.svg" alt="" />
                    <h3>service name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                        corporis.
                    </p>
                    <a href="" className="btn">
                        Learn more
                    </a>
                </div>

                <div class="box" data-aos="flip-left">
                    <img src="images/icon-3.svg" alt="" />
                    <h3>service name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                        corporis.
                    </p>
                    <a href="" className="btn">
                        Learn more
                    </a>
                </div>

                <div class="box" data-aos="flip-left">
                    <img src="images/icon-3.svg" alt="" />
                    <h3>service name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                        corporis.
                    </p>
                    <a href="" className="btn">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Services