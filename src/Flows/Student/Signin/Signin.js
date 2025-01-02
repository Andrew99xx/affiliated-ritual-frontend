import React, { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase-config';
import { checkUserExists } from '../../../service/checkUserExists';
import { checkUserIsActive } from '../../../service/checkUserIsActive';
import { notification } from 'antd';
import styles from "../../../styles/Signin.module.css"
import LoginInput from '../../../components/FlowComponents/LoginInput/LoginInput';
import LoginOtpVerify from '../../../components/FlowComponents/LoginOtpVerify/LoginOtpVerify';
import logo from "../../../logo.png"
import ArLogo from "../../../components/CssComponents/ArLogo/ArLogo"

const Signin = ({ onSignin }) => {

  const [message, setMessage] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showSign, setShowSign] = useState(true);

  useEffect(() => {
    // Ensure the recaptcha-container element exists
    const recaptchaContainer = document.getElementById('recaptcha-container');
    if (recaptchaContainer) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainer, {
        'size': 'invisible',
        'callback': (response) => {
          console.log('reCAPTCHA solved');
        }
      });
    }

    // Cleanup on component unmount
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);


  const handleSignInClick = (phone) => {
    sendVerificationCode(phone);
    setShowSign(false);
  };

  const handleOtpVerify = (otpComing) => {
    verifyOtp(otpComing);
  };

  const sendVerificationCode = (phone) => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setMessage('OTP sent to your phone');
        alert('OTP sent to your phone');
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        setMessage('Failed to send OTP. Please try again.');
        alert('Failed to send OTP. Please try again.');
      });
  };

  const verifyOtp = (otp) => {
    if (!confirmationResult) {
      setMessage('First request the OTP');
      notification.info({
        message: 'OTP Request Needed',
        description: 'First request the OTP',
        placement: 'topRight',
        duration: 3, // Display for 3 seconds
      }); return;
    }
    confirmationResult.confirm(otp)
      .then(async (result) => {
        const user = result.user;
        setMessage(`Phone number verified! User: ${user.uid}`);
        alert(`Phone number verified! User: ${user.uid}`);

        const userExists = await checkUserExists(user.uid);
        if (userExists) {
          localStorage.setItem('student_uid', user.uid);

          const isActive = await checkUserIsActive(user.uid);

          if (isActive == true) {
            onSignin(user);
          }
          else {
            setMessage("Your account is not active. please contact the admin")
          }

        } else {
          alert("You are not registered");
        }
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        setMessage('Failed to verify OTP. Please try again.');
        alert('Failed to verify OTP. Please try again.');
      });
  };

  return (
    <div className={styles.signin}>
      <div className={styles.container}>
        <div id="recaptcha-container"></div>
        <ArLogo />
        <div className={styles.heading}>Student Login</div>
        {
          showSign ?
            <LoginInput
              onSignInClick={handleSignInClick}
            /> :
            <LoginOtpVerify
              onOtpVerify={handleOtpVerify}
            />
        }
        <Link
          to="/student?action=register"
          style={{
            textDecoration: 'none',
          }}
        >
          <p className={styles.naa}>Need an account? <span>Register</span></p>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
