import React, { useState, useRef } from 'react';
import "../Signin.css"
const OtpInputContainer = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputs = Array.from({ length: 6 });

  const inputRefs = useRef([]);
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.keyCode === 8 && index > 0 && otp[index] === '') {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className='Inputbox'>
      {otpInputs.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleBackspace(index, e)}
          ref={(input) => (inputRefs.current[index] = input)}
          style={{
            width: '20px',
            height: '25px',
            marginRight: '10px',
            textAlign: 'center',
            fontSize: '20px',

          }}
        />
      ))}
    </div>
  );
};

export default OtpInputContainer;