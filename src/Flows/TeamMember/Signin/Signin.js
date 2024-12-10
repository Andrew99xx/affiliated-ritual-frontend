import React, { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import "./Signin.css";
import Sign from './Signincomp/Sign';
import Signotp from './Signincomp/Signotp';
import { auth } from '../../../firebase-config';
import { checkUserExists } from '../../../service/checkUserExists';
import { notification } from 'antd';

const Signin = ({ onSignin, onToggle }) => {

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

  const handleSignInClick = (phone) => {
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
        // alert('OTP sent to your phone');
        notification.success({
          message: 'OTP Sent',
          description: 'OTP sent to your phone successfully',
          placement: 'topRight',
          duration: 3, // Display for 3 seconds
        });
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        setMessage('Failed to send OTP. Please try again.');
        notification.error({
          message: 'Failed to send OTOP',
          description: 'Failed to send OTP. Please try again.',
          placement: 'topRight',
          duration: 3, // Display for 3 seconds
        });
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
      });      return;
    }
    confirmationResult.confirm(otp)
      .then(async (result) => {
        const user = result.user;
        setMessage(`Phone number verified! User: ${user.uid}`);
        notification.success({
          message: 'OTP Verified ✅',
          description: `Phone number verified! User: ${user.uid}.`,
          placement: 'topRight',
          duration: 3, // Display for 3 seconds
        });
      
        // alert(`Phone number verified! User: ${user.uid}`);

        // checking if user exists or not 
        const userExists = await checkUserExists(user.uid);
        // alert(userExists)
        if (userExists) {
          // Call onSignin to handle the successful sign-in or if user uid exits
          localStorage.setItem('team_member_uid', user.uid);
          onSignin(user);
        } else {
          // alert("You are not registered");
          notification.error({
            message: 'Error Registering',
            description: `You are not registered user.`,
            placement: 'topRight',
            duration: 3, // Display for 3 seconds
          });
        }
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        setMessage('Failed to verify OTP. Please try again.');
        // alert('Failed to verify OTP. Please try again.');
        notification.success({
          message: 'OTP Verification Failed ❌',
          description: `Failed to verify OTP. Please try again.'`,
          placement: 'topRight',
          duration: 3, // Display for 3 seconds
        });
      });
  };

  return (
    <div className='Signin'>
      <div id="recaptcha-container"></div>
      {showSign ?
        <Sign onSignInClick={handleSignInClick} /> :
        <Signotp phone={phone} onOtpVerify={handleOtpVerify} />
      }
      <p className='alr'>Need an account?<span onClick={onToggle}> Register</span></p>
      <div className="credit">© 2024. All Rights Reserved.</div>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Signin;
