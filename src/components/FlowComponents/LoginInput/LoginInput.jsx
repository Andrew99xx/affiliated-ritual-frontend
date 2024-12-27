import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

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
        <div className="formcontainer">
            <p>Enter Phone <sup>*</sup></p>
            <PhoneInput
                international
                defaultCountry="IN"
                value={phone}
                onChange={setPhone}
                placeholder="Enter phone number"
                className="input"
            />
            <button
                onClick={handleSignIn}
                className="btn"
            >
                Sign In - GET OTP
            </button>
        </div>
    );
}

export default LoginInput;