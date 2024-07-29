/**
 * this was test code - to implement firebase mobile otp login 
 * 
 * -- delete this PhoneSignin.js 
 */



import React, { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import './Signin.css';

const PhoneSignIn = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log('reCAPTCHA solved');
      }
    });
  }, []);

  const sendVerificationCode = () => {
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

  const verifyOtp = () => {
    if (!confirmationResult) {
      setMessage('First request the OTP');
      alert('First request the OTP');
      return;
    }
    confirmationResult.confirm(otp)
      .then((result) => {
        const user = result.user;
        setMessage(`Phone number verified! User: ${user.uid}`);
        alert(`Phone number verified! User: ${user.uid}`);
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        setMessage('Failed to verify OTP. Please try again.');
        alert('Failed to verify OTP. Please try again.');
      });
  };

  return (
    <div className="container">

      {/* recaptcha */}
      <div id="recaptcha-container"></div>

      <div className="form-container">

        {/* phone */}
        <p>Enter Phone Number</p>
        <input
          type="tel"
          className="input"
          placeholder="+1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={sendVerificationCode}
          className="btn"
        >
          Send OTP
        </button>


        {/* otp  */}
        <p>Enter OTP</p>
        <input
          type="text"
          className="input"
          placeholder="123456"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          onClick={verifyOtp}
          className="btn"
        >
          Verify OTP
        </button>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default PhoneSignIn;
