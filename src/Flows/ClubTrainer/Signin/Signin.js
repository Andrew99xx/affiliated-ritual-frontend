<<<<<<< HEAD
import React, { useState } from 'react';
import "./Signin.css";
import Sign from './Signincomp/Sign';
import Signotp from './Signincomp/Signotp';

const Signin = ({ onSignin, onToggle }) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignInClick = () => {
    setShowSignIn(false);
=======
import React, { useEffect, useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import "./Signin.css";
import Sign from './Signincomp/Sign';
import Signotp from './Signincomp/Signotp';
import { auth } from '../../../firebase-config';
import { checkUserExists } from '../../../service/checkUserExists';

const Signin = ({ onSignin, onToggle }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showSign, setShowSign] = useState(true);

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log('reCAPTCHA solved');
      }
    });

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
      alert('First request the OTP');
      return;
    }
    confirmationResult.confirm(otp)
      .then(async (result) => {
        const user = result.user;
        setMessage(`Phone number verified! User: ${user.uid}`);
        alert(`Phone number verified! User: ${user.uid}`);

        const userExists = await checkUserExists(user.uid);
        if (userExists) {
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
>>>>>>> 11cb80b (major update)
  };

  return (
    <div className='Signin'>
<<<<<<< HEAD
      {showSignIn ? <Sign onSignInClick={handleSignInClick} /> : <Signotp />}
     <p className='alr'>Need an account?<span onClick={onToggle}> Register</span></p> 

      <div className="credit">© 2024. All Rights Reserved.</div>
    </div>
  );
}
=======
      <div id="recaptcha-container"></div>
      {showSign ?
        <Sign onSignInClick={handleSignInClick} /> :
        <Signotp email={email} phone={phone} onOtpVerify={handleOtpVerify} />
      }
      <p className='alr'>Need an account?<span onClick={onToggle}> Register</span></p>
      <div className="credit">© 2024. All Rights Reserved.</div>
      {message && <div className="message">{message}</div>}
    </div>
  );
};
>>>>>>> 11cb80b (major update)

export default Signin;
