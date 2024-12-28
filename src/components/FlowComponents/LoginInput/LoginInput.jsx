import React, { useState } from 'react';
import ButtonComponent from '../../CssComponents/ButtonComponent/ButtonComponent';
import styles from "./LoginInput.module.css"
import PhoneInputComponent from '../../CssComponents/PhoneInput/PhoneInputComponent';


const LoginInput = ({ onSignInClick }) => {
    const [phone, setPhone] = useState('');

    const handleSignIn = () => {
        if (!phone) {
            alert('Please enter phone number');
            return;
        }
        onSignInClick(phone);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.phoneInputWrapper}>
                <p className={styles.label}>Enter Phone <sup>*</sup></p>
                <PhoneInputComponent
                    value={phone}
                    onChange={setPhone}
                    placeholder="Enter phone number"
                />
            </div>
            <ButtonComponent
                buttonText="Sign In - GET OTP"
                onClick={handleSignIn}
                className=""
            />
        </div>
    );
};

export default LoginInput;
