import React from 'react';


const SlotDisplay = ({ credits }) => {
    return (
        <div id="slot-display">
            <div id="slot-overlay"></div>
            <div id="slot-overlay-line"></div>
            <div id="slot-credits">{credits}</div>
            <div id="slot-zeros">00000000000</div>
        </div>
    );
};

export default SlotDisplay;

