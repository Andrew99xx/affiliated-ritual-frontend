// otpUtils.js
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { getDoc } from "firebase/firestore";

let recaptchaVerifier;

export const setUpRecaptcha = () => {
  try {
    if (!recaptchaVerifier) {
      recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: (response) => {
          console.log("reCAPTCHA solved:", response);
        },
      });
    }
  } catch (error) {
    console.error("Error setting up reCAPTCHA:", error);
  }
};

export const sendOtp = async (phoneNumber) => {
  setUpRecaptcha();
  const appVerifier = recaptchaVerifier;

  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    window.confirmationResult = confirmationResult;
    return true;
  } catch (error) {
    console.error('Error sending OTP:', error);
    return false;
  }
};

export const verifyOtp = async (otp) => {
  try {
    const confirmationResult = window.confirmationResult;
    const result = await confirmationResult.confirm(otp);
    return result.user;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};


