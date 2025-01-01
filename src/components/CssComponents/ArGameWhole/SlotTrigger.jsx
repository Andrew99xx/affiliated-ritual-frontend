import React from 'react';


const SlotTrigger = ({ onSpin, disabled }) => {
    return (
        <div
            id="slot-trigger"
            className={disabled ? 'slot-triggerDisabled' : ''}
            onClick={onSpin}
        >
            <div className="arm">
                <div className="knob"></div>
            </div>
            <div className="arm-shadow"></div>
            <div className="ring1">
                <div className="shadow"></div>
            </div>
            <div className="ring2">
                <div className="shadow"></div>
            </div>
        </div>
    );
};

export default SlotTrigger;

