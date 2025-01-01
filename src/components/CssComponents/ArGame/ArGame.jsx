import React, { useState, useEffect, useRef } from 'react';
import './ArGame.css'; // Add your custom CSS for styling

const ArGame = () => {
    const [credits, setCredits] = useState(15);
    const [spinning, setSpinning] = useState(3);
    const [spin, setSpin] = useState([0, 0, 0]);
    const [slots, setSlots] = useState([
        ['orange', 'bell', 'orange', 'bar2', 'prune', 'orange', 'bar3', 'prune', 'orange', 'bar1', 'bell', 'cherry', 'orange', 'prune', 'bell', 'bar1', 'cherry', 'seven', 'orange', 'prune', 'orange', 'bell', 'orange'],
        ['cherry', 'prune', 'orange', 'bell', 'bar1', 'cherry', 'prune', 'bar3', 'cherry', 'bell', 'orange', 'bar1', 'seven', 'cherry', 'bar2', 'cherry', 'bell', 'prune', 'cherry', 'orange', 'cherry', 'prune', 'orange'],
        ['cherry', 'orange', 'bell', 'prune', 'bar2', 'cherry', 'prune', 'orange', 'bar3', 'cherry', 'bell', 'orange', 'cherry', 'orange', 'cherry', 'prune', 'bar1', 'seven', 'bell', 'cherry', 'cherry', 'orange', 'bell'],
    ]);
    const slotsTypes = useRef({
        cherry: [2, 5, 10],
        orange: [0, 15, 30],
        prune: [0, 40, 50],
        bell: [0, 50, 80],
        bar1: [0, 0, 100],
        bar2: [0, 0, 150],
        bar3: [0, 0, 250],
        seven: [0, 0, 500],
        anybar: [0, 0, 80],
    });

    const handleSpin = () => {
        if (spinning > 0 || credits <= 0) return;

        setCredits((prev) => prev - 1);
        setSpinning(3);

        const newSpin = [
            Math.floor(Math.random() * 23),
            Math.floor(Math.random() * 23),
            Math.floor(Math.random() * 23),
        ];

        setSpin(newSpin);

        // Simulate wheel stop delays
        setTimeout(() => stopSpin(1), 1500);
        setTimeout(() => stopSpin(2), 2000);
        setTimeout(() => stopSpin(3), 2500);
    };

    const stopSpin = (slotIndex) => {
        setSpinning((prev) => prev - 1);
        if (spinning === 1) {
            calculateResults();
        }
    };

    const calculateResults = () => {
        const slotType = slots[0][spin[0]];
        let matches = 1;
        let barMatch = /bar/.test(slotType) ? 1 : 0;

        if (slotType === slots[1][spin[1]]) {
            matches++;
            if (slotType === slots[2][spin[2]]) {
                matches++;
            } else if (barMatch && /bar/.test(slots[2][spin[2]])) {
                barMatch++;
            }
        } else if (barMatch && /bar/.test(slots[1][spin[1]])) {
            barMatch++;
            if (/bar/.test(slots[2][spin[2]])) {
                barMatch++;
            }
        }

        if (matches !== 3 && barMatch === 3) {
            matches = 3;
        }

        const winnedCredits = slotsTypes.current[slotType]?.[matches - 1] || 0;
        if (winnedCredits > 0) {
            setCredits((prev) => prev + winnedCredits);
        }
    };

    const addBlinkEffect = (element) => {
        if (element) {
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.opacity = 1;
            }, 200);
        }
    };

    return (
        <div id="page">
            <div id="content">
                <div id="slot-machine">
                    <div id="slot-body">
                        <div id="slot-display">
                            <div id="slot-credits">Credits: {credits}</div>
                        </div>
                        <div id="slot-wheels">
                            {[0, 1, 2].map((wheelIndex) => (
                                <div key={wheelIndex} className="wheel">
                                    {slots[wheelIndex].map((slot, i) => (
                                        <div
                                            key={i}
                                            className={
                                                i === spin[wheelIndex] ? 'slot-active' : 'slot-inactive'
                                            }
                                        >
                                            {slot}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <button
                            id="slot-trigger"
                            onClick={handleSpin}
                            disabled={spinning > 0 || credits <= 0}
                        >
                            Spin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArGame;
