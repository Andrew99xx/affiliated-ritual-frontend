// PhoneInputComponent.tsx
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './PhoneInputComponent.module.css';

const PhoneInputComponent = ({
    value,
    onChange,
    placeholder = 'Enter phone number',
    defaultCountry = 'IN',
}) => {
    return (
        <div className={styles.phoneInputContainer}>
            <PhoneInput
                international
                defaultCountry={defaultCountry}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.phoneInput}
            />
        </div>
    );
};

export default PhoneInputComponent;
