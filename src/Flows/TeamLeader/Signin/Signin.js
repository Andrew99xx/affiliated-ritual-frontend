import React, { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import styles from "../../../styles/Signin.module.css"
import { Link } from 'react-router-dom';

// import Sign from './Signincomp/Sign';
// import Signotp from './Signincomp/Signotp';
import { auth } from '../../../firebase-config';
import { checkUserExists } from '../../../service/checkUserExists';
import { notification } from 'antd';
import LoginInput from '../../../components/FlowComponents/LoginInput/LoginInput';
import LoginOtpVerify from '../../../components/FlowComponents/LoginOtpVerify/LoginOtpVerify';
import ArLogo from '../../../components/CssComponents/ArLogo/ArLogo';

const Signin = ({ onSignin }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showSign, setShowSign] = useState(true);

  useEffect(() => {
    const recaptchaContainer = document.getElementById('recaptcha-container');
    if (recaptchaContainer) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
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

  const handleSignInClick = (email, phone) => {
    setEmail(email);
    setPhone(phone);
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

        // checking if user exists or not 
        const userExists = await checkUserExists(user.uid);
        alert(userExists)
        if (userExists) {

          // Store the new 'uid' in localStorage
          // storing should before calling onSingIn()
          localStorage.setItem('team_leader_uid', user.uid);

          // Call onSignin to handle the successful sign-in or if user uid exits
          onSignin(user);
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
    <>
      <div className={styles.signin}>
        <div className={styles.container}>
          <div id="recaptcha-container"></div>

          <ArLogo />
          <div className={styles.heading}>Team Leader Login</div>
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
            to="/teamleader?action=register"
            style={{
              textDecoration: 'none',
            }}
          >
            <p className={styles.naa}>Need an account? <span>Register</span></p>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Signin;
