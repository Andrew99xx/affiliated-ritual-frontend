import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className='home'>
            <div class="image">
                <img src="/feature-2.svg" height={450} alt="" />
            </div>

            <div class="content">
                <h3> Make learning fun!</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                    magnam id laborum consequuntur inventore aliquam perspiciatis
                    explicabo eius iure dignissimos.
                </p>
                <a href="#" class="btn">
                    {" "}
                    Sign up for free
                </a>
            </div>

        </div>
    )
}

export default Home