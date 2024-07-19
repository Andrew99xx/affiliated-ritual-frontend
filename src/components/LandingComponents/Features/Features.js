import React from 'react'
import "./Features.css"

function Features() {
    return (
        <div className='features'>
            <div class="heading">
                <h1>some of our key features</h1>
            </div>

            <div class="box-container">
                <div class="box">
                    <div class="image" data-aos="zoom-in-right">
                        <img src="/feature-1.svg" height={600} alt="" />
                    </div>
                    <div class="content" data-aos="zoom-in-left">
                        <h3>
                            pick a course <span class="line-down"> location!</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Iusto nisi fugit saepe quisquam adipisci. Consectetur ipsum
                            cumque beatae accusantium similique mollitia commodi, atque
                            laborum, id, eos illo recusandae!
                        </p>
                    </div>
                </div>

                <div class="box">
                    <div class="image" data-aos="zoom-in-left">
                        <img src="/feature-2.svg" alt="" />
                    </div>
                    <div class="content" data-aos="zoom-in-right">
                        <h3>
                            Learn and <span class="line-down">explore</span> designs
                        </h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Iusto nisi fugit saepe quisquam adipisci. Consectetur ipsum
                            cumque beatae accusantium similique mollitia commodi, atque
                            laborum, id, eos illo recusandae!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features