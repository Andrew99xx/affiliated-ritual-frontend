import React from 'react'
import './Package.css'
import package01 from './package01.png'

function Package() {
    const packageData = [
        {
            packageImage:package01,
            packageTitle: "Package 1",
            packageDetails: ["3 months", "3 classes/week", "Available"],
            points: ["Point 1", "Point 2", "Point 3"],
            packagePrice: "$300"
        },
        {
            packageImage:package01,
            packageTitle: "Package 2",
            packageDetails: ["6 months", "2 classes/week", "Available"],
            points: ["Point 1", "Point 2", "Point 3"],
            packagePrice: "$500"
        },
        {
            packageImage:package01,
            packageTitle: "Package 3",
            packageDetails: ["1 year", "1 class/week", "Available"],
            points: ["Point 1", "Point 2", "Point 3"],
            packagePrice: "$900"
        }
    ];

    return (
        <div className='package-container'>
            <p className='package-paragraph'>With our exclusive packages, now you can be assured to acquire the best knowledge and expertise from our team of experts. We believe you can empower the world with industry-leading courses.</p>
            <div className='package-items'>
                {packageData.map((item, i) => (
                    <div key={i} className='package-item-wrapper'>
                        <img
                            className="package-img"
                            src={item.packageImage}
                            alt={item.packageTitle}
                        />
                        <div className='package-title'>{item.packageTitle}</div>


                        <div className='package-details' >
                            {item.packageDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </div>


                        <div className='package-points'>
                            {item.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </div>

                        <div className='hr-line'></div>

                        <div className='package-price'>{item.packagePrice}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Package
