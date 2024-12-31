import React, { useState } from "react";
import OtpInputContainer from "../OtpInputContainer/OtpInputContainer";
import styles from "./LoginOtpVerify.module.css";  // Import the CSS module
import ButtonComponent from "../../CssComponents/ButtonComponent/ButtonComponent";

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
        <div className={styles.verifyContainer}> {/* Use styles from CSS module */}
            <p>Enter OTP</p>
            <OtpInputContainer onOtpChange={handleOtpChange} />
            <div className={styles.info}>
                <div className={styles.rememberme}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                    />
                    <p> Keep me logged in</p>
                </div>
                <button className={styles.resendButton}>Resend OTP</button>
            </div>
            <ButtonComponent
                onClick={handleSignIn}
                className={styles.verifyButton}
                buttonText={"Sign In - Verify OTP"}
            />
        </div>
    );
};

export default LoginOtpVerify;
