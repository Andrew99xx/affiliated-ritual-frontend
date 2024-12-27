import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import ButtonComponent from '../../CssComponents/ButtonComponent';

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
            <ButtonComponent
                buttonText="Sign In - GET OTP"
                onClick={handleSignIn}
                className={""}
            />
        </div>
    );
}

export default LoginInput;