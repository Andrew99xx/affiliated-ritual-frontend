import React, { useEffect, useState } from 'react';
import styles from './Package.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import english from "./english.png";
import freelance from "./freelance.png";
import marketing from "./marketing.png";
import { RiArrowRightUpLine } from "react-icons/ri";
import { getCoursesWithModification } from "../../../service/courses/getCoursesWithModification";

function Package() {

    const [packageData, setPackageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const data = await getCoursesWithModification();
                setPackageData(data);
            } catch (err) {
                setError('Failed to load Package data');
            } finally {
                setLoading(false);
            }
        };

        fetchPackageData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, // Enables automatic sliding
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.packageContainer}>
            <p className={styles.packageParagraph}>
                With our exclusive packages, now you can be assured to acquire the best knowledge and expertise from our team of experts. We believe you can empower the world with industry-leading courses.
            </p>
            <div className={styles.packageItems}>
                <Slider {...settings}>
                    {packageData.map((item, i) => (
                        <div key={i} className={styles.packageItemWrapper}>
                            
                            <img
                                className={styles.packageImg}
                                src={item.packageImage || english} // Use placeholder if image not available
                                alt={item.packageTitle}
                            />

                            <div className={styles.packageTitle}>{item.packageTitle}</div>

                            <div className={styles.packageDetails}>
                                {item.packageDetails.map((detail, index) => (
                                    <li key={index}>
                                        <span className={styles.packageDots}></span>
                                        <span> {detail}</span>
                                    </li>
                                ))}
                            </div>

                            <div className={styles.packagePoints}>
                                {item.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </div>

                            <div className={styles.hrLine}></div>

                            <div className={styles.packagePriceWrapper}>
                                <div>
                                    <span className={styles.packagePrice}>
                                        {item.packagePrice}
                                    </span>
                                    <span className={styles.packagePriceCross}>
                                        {item.packagePriceCross}
                                    </span>
                                </div>

                                <div className={styles.packageBuy}>
                                    <RiArrowRightUpLine className={styles.packageBuyIcon} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Package;
