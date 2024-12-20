import React, { useEffect, useState } from 'react'
import './Package.css'
import english from "./english.png"  // You might want to use these as placeholders
import freelance from "./freelance.png"
import marketing from "./marketing.png"
import { RiArrowRightUpLine } from "react-icons/ri";
import { getCoursesWithModification } from "../../../service/courses/getCoursesWithModification"

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

    return (
        <div className='package-container'>
            <p className='package-paragraph'>With our exclusive packages, now you can be assured to acquire the best knowledge and expertise from our team of experts. We believe you can empower the world with industry-leading courses.</p>
            <div className='package-items'>
                {packageData.map((item, i) => (
                    <div key={i} className='package-item-wrapper'>
                        <img
                            className="package-img"
                            src={item.packageImage || english} // Use a placeholder if image is not available
                            alt={item.packageTitle}
                        />

                        <div className='package-title'>{item.packageTitle}</div>

                        <div className='package-details'>
                            {item.packageDetails.map((detail, index) => (
                                <li key={index}>
                                    <span className='package-dots'></span>
                                    <span> {detail}</span>
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

export default Package;
