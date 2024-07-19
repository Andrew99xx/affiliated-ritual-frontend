import React from 'react'
import './Package.css'

function Package() {
    const packageData = [
        {
            packageImage: "https://via.placeholder.com/100x100.png?text=Package+Image",
            packageTitle: "Package 1",
            duration: "3 months",
            weeklyClasses: "3 classes/week",
            recording: "Available",
            points: ["Point 1", "Point 2", "Point 3"],
            packagePrice: "$300"
        },
        {
            packageImage: "https://via.placeholder.com/100x100.png?text=Package+Image",
            packageTitle: "Package 2",
            duration: "6 months",
            weeklyClasses: "2 classes/week",
            recording: "Available",
            points: ["Point 1", "Point 2", "Point 3"],
            packagePrice: "$500"
        },
        {
            packageImage: "https://via.placeholder.com/100x100.png?text=Package+Image",
            packageTitle: "Package 3",
            duration: "1 year",
            weeklyClasses: "1 class/week",
            recording: "Available",
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
                        <div className='package-details'>
                            <div className='package-title'>{item.packageTitle}</div>
                            <div className='package-duration'>{item.duration}</div>
                            <div className='package-weeklyClasses'>{item.weeklyClasses}</div>
                            <div className='package-recording'>{item.recording}</div>
                            <ul className='package-points'>
                                {item.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            <div className='package-price'>{item.packagePrice}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Package
