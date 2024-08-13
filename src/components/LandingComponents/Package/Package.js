import React, { useEffect, useState } from 'react'
import './Package.css'
import english from "./english.png"
import freelance from "./freelance.png"
import marketing from "./marketing.png"
import { RiArrowRightUpLine } from "react-icons/ri";
import { getCourses } from "../../../service/courses/getCourses"

function Package() {

    const [packageData, setPackageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch Package data when the component mounts
        const fetchPackageData = async () => {
            try {
                const data = await getCourses();
                setPackageData(data);
            } catch (err) {
                setError('Failed to load Package data');
            } finally {
                setLoading(false);
            }
        };

        fetchPackageData();
    }, []); // Empty dependency array ensures this runs only once


    const packageDataDummy = [
        {
            packageImage: freelance,
            packageTitle: "Freelancing Mastery",
            packageDetails: ["3 months", "3 classes/week", "Recording"],
            points: ["Free Doubt Session", "Live Q&A Support", "Affiliate Ritual Certificate"],
            packagePrice: "1,800",
            packagePriceCross: "4,000"
        },
        {
            packageImage: marketing,
            packageTitle: "Digital Marketing Mastery",
            packageDetails: ["6 months", "2 classes/week", "Recording"],
            points: ["Free Doubt Session", "Live Q&A Support", "Affiliate Ritual Certificate"],
            packagePrice: "1,800",
            packagePriceCross: "4,000"
        },
        {
            packageImage: english,
            packageTitle: "Speak in English",
            packageDetails: ["1 year", "1 class/week", "Recording"],
            points: ["Free Doubt Session", "Live Q&A Support", "Affiliate Ritual Certificate"],
            packagePrice: "1,800",
            packagePriceCross: "4,000"
        }
    ];

    return (
        <div className='package-container'>
            <p className='package-paragraph'>With our exclusive packages, now you can be assured to acquire the best knowledge and expertise from our team of experts. We believe you can empower the world with industry-leading courses.</p>
            <div className='package-items'>
                {packageDataDummy.map((item, i) => (
                    <div key={i} className='package-item-wrapper'>
                        <img
                            className="package-img"
                            src={item.packageImage}
                            alt={item.packageTitle}
                        />
                        <div className='package-title'>{item.packageTitle}</div>

                        <div className='package-details' >
                            {item.packageDetails.map((detail, index) => (
                                <li key={index}>
                                    <span className='package-dots'></span>
                                    {detail}
                                </li>
                            ))}
                        </div>

                        <div className='package-points'>
                            {item.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </div>

                        <div className='hr-line'></div>

                        <div className='package-price-wrapper'>
                            <div>
                                <span className='package-price'>
                                    {item.packagePrice}
                                </span>
                                <span className='package-price-cross'>
                                    {item.packagePriceCross}
                                </span>
                            </div>

                            <div className='package-buy'>
                                <RiArrowRightUpLine className='package-buy-icon' />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Package
