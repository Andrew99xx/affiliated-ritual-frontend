import React, { useState, useEffect, useCallback } from 'react';
import Wheel from './Wheel';
import SlotTrigger from './SlotTrigger';
import SlotDisplay from './SlotDisplay';
import SlotLegend from './SlotLegend';
import './SlotMachine.css';

const SlotMachine = () => {
    const [credits, setCredits] = useState(15);
    const [spinning, setSpinning] = useState(false);
    const [spinResults, setSpinResults] = useState([0, 0, 0]);

    const slots = [
        ['orange', 'bell', 'orange', 'bar2', 'prune', 'orange',
            'bar3', 'prune', 'orange', 'bar1', 'bell', 'cherry', 'orange',
            'prune', 'bell', 'bar1', 'cherry', 'seven', 'orange', 'prune',
            'orange', 'bell', 'orange'],
        ['cherry', 'prune', 'orange', 'bell', 'bar1', 'cherry', 'prune',
            'bar3', 'cherry', 'bell', 'orange', 'bar1', 'seven', 'cherry',
            'bar2', 'cherry', 'bell', 'prune', 'cherry', 'orange', 'cherry',
            'prune', 'orange'],
        ['cherry', 'orange', 'bell', 'prune', 'bar2', 'cherry', 'prune',
            'orange', 'bar3', 'cherry', 'bell', 'orange', 'cherry', 'orange',
            'cherry', 'prune', 'bar1', 'seven', 'bell', 'cherry', 'cherry',
            'orange', 'bell'],
    ];

    const slotsTypes = {
        'cherry': [2, 5, 10],
        'orange': [0, 15, 30],
        'prune': [0, 40, 50],
        'bell': [0, 50, 80],
        'bar1': [0, 0, 100],
        'bar2': [0, 0, 150],
        'bar3': [0, 0, 250],
        'seven': [0, 0, 500],
        'anybar': [0, 0, 80]
    };

    const spin = useCallback(() => {
        if (!spinning && credits > 0) {
            setSpinning(true);
            setCredits(credits - 1);
            const newSpinResults = [
                Math.floor(Math.random() * 23),
                Math.floor(Math.random() * 23),
                Math.floor(Math.random() * 23)
            ];
            setSpinResults(newSpinResults);

            setTimeout(() => {
                endSpin(newSpinResults);
            }, 3000);
        }
    }, [spinning, credits]);

    const endSpin = (results) => {
        const slotType = slots[0][results[0]];
        let matches = 1;
        let barMatch = /bar/.test(slotType) ? 1 : 0;
        let winnedCredits = 0;

        if (slotType === slots[1][results[1]]) {
            matches++;
            if (slotType === slots[2][results[2]]) {
                matches++;
            } else if (barMatch !== 0 && /bar/.test(slots[2][results[2]])) {
                barMatch++;
            }
        } else if (barMatch !== 0 && /bar/.test(slots[1][results[1]])) {
            barMatch++;
            if (/bar/.test(slots[2][results[2]])) {
                barMatch++;
            }
        }

        if (matches !== 3 && barMatch === 3) {
            winnedCredits = slotsTypes['anybar'][2];
        } else {
            winnedCredits = slotsTypes[slotType][matches - 1];
        }

        setCredits(prevCredits => prevCredits + winnedCredits);
        setSpinning(false);
    };

    useEffect(() => {
        if (credits === 0) {
            // Game over logic
        }
    }, [credits]);

    return (
        <div id="slot-machine">
            <div id="slot-body">
                <div id="slot-block"></div>
                <div id="slot-frame"></div>
                <div id="slot-wheels">
                    <Wheel id={1} spinning={spinning} result={spinResults[0]} />
                    <Wheel id={2} spinning={spinning} result={spinResults[1]} />
                    <Wheel id={3} spinning={spinning} result={spinResults[2]} />
                </div>
                <SlotDisplay credits={credits} />
            </div>
            <SlotTrigger onSpin={spin} disabled={spinning} />
            <SlotLegend />
        </div>
    );
};

export default SlotMachine;

