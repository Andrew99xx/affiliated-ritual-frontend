import React, { useState } from "react";
import OtpInputContainer from "../OtpInputContainer/OtpInputContainer";
import styles from "./LoginOtpVerify.module.css"

// signin components - after receiving otp
const LoginOtpVerify = ({ onOtpVerify }) => {

    const [otp, setOtp] = useState('');

    const handleOtpChange = (otpComing) => {
        setOtp(otpComing);
    };


    // onClick of button
    const handleSignIn = (e) => {
        e.preventDefault();
        onOtpVerify(otp)
    };

    return (
        <div className="formcontainer">
            <p>Enter OTP</p>
            <OtpInputContainer onOtpChange={handleOtpChange} />
            <div className="info">
                <div
                    className="rememberme"
                >
                    <input type="checkbox" />
                    <p> Keep me logged in</p>
                </div>
                <button>Resend OTP</button>
            </div>
            <button
                onClick={handleSignIn}
                className="btn">
                Sign In - verify OTP
            </button>
        </div>
    );
};

export default LoginOtpVerify;
