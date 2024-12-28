// PhoneInputComponent.tsx
import React from 'react';
import styles from './PhoneInputComponent.module.css';
import PhoneInput from 'react-phone-number-input';

const PhoneInputComponent = ({
    value,
    onChange,
    placeholder = 'Enter phone number',
    defaultCountry = 'IN',
}) => {
    return (
        <PhoneInput
            international
            defaultCountry={defaultCountry}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.phoneInput}
        />
    );
};

export default PhoneInputComponent;
