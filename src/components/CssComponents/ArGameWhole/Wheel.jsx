import React from 'react';


const Wheel = ({ id, spinning, result }) => {
    return (
        <div id={`wheel${id}`} className="wheel">
            <div className="overlay"></div>
            <img
                src="path_to_wheel_image.png"
                alt={`Wheel ${id}`}
                style={{
                    top: spinning ? '100%' : `-${result * 44 + 16}px`,
                    transition: spinning ? 'none' : 'top 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                }}
            />
        </div>
    );
};

export default Wheel;

