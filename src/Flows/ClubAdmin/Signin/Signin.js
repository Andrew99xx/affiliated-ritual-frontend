import React, { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import "./Signin.css";
import Sign from './Signincomp/Sign';
import Signotp from './Signincomp/Signotp';
import { auth } from '../../../firebase-config';


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
        console.error('Error sending OTP:', error,phone);
        setMessage('Failed to send OTP. Please try again.');
        alert('Failed to send OTP. Please try again.');
      });
  };

  const verifyOtp = (otp) => {
    if (!confirmationResult) {
      setMessage('First request the OTP');
      alert('First request the OTP');
      return;
    }
    confirmationResult.confirm(otp)
      .then(async (result) => {
        const user = result.user;
        setMessage(`Phone number verified! User: ${user.uid}`);
        alert(`Phone number verified! User: ${user.uid}`);

        onSignin(user);
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        setMessage('Failed to verify OTP. Please try again.');
        alert('Failed to verify OTP. Please try again.');
      });
  };

  return (
    <div className='Signin'>
      <div id="recaptcha-container"></div>
      {showSign ?
        <Sign onSignInClick={handleSignInClick} /> :
        <Signotp email={email} phone={phone} onOtpVerify={handleOtpVerify} />
      }
      <div className="credit">© 2024. All Rights Reserved.</div>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Signin;
