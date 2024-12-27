// ButtonComponent.tsx
import React from 'react';
import styles from './ButtonComponent.module.css';

const ButtonComponent = ({ buttonText, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.btn} ${className ? className : ''}`}
        >
            {buttonText}
        </button>
    );
};

export default ButtonComponent;
