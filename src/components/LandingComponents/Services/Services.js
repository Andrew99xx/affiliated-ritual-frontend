import React from 'react';
import styles from './Services.module.css';

function Services() {
    return (
        <div className={styles.services}>
            <div className={styles.heading}>
                <h1>What we provide?</h1>
            </div>

            <div className={styles.boxContainer}>
                <div className={styles.box} data-aos="flip-left">
                    <img src="images/icon-1.svg" alt="" />
                    <h3>Service name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                        corporis.
                    </p>
                    <a href="" className="btn">
                        Learn more
                    </a>
                </div>

                <div className={styles.box} data-aos="flip-left">
                    <img src="images/icon-2.svg" alt="" />
                    <h3>Service name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                        corporis.
                    </p>
                    <a href="" className="btn">
                        Learn more
                    </a>
                </div>

                <div className={styles.box} data-aos="flip-left">
                    <img src="images/icon-3.svg" alt="" />
                    <h3>Service name</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                        corporis.
                    </p>
                    <a href="" className="btn">
                        Learn more
                    </a>
                </div>

                <div className={styles.box} data-aos="flip-left">
                    <img src="images/icon-3.svg" alt="" />
                    <h3>Service name</h3>
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
    );
}

export default Services;
