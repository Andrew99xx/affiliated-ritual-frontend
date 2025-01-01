import React from 'react';

const SlotLegend = () => {
    return (
        <div id="slot-legend">
            <div className="frame"></div>
            <ul className="wins">
                {/* Add all the win combinations here */}
                <li className="jackpot">
                    <span className="icon id1"></span>
                    <span className="icon id2"></span>
                    <span className="icon id3"></span>
                    <span className="count">500</span>
                </li>
                {/* Add more win combinations... */}
            </ul>
        </div>
    );
};

export default SlotLegend;

