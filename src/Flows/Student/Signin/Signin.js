import React, { useState } from 'react';
import "./Signin.css";
import Sign from './Signincomp/Sign';
import Signotp from './Signincomp/Signotp';

const Signin = ({ onSignin, onToggle }) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignInClick = () => {
    setShowSignIn(false);
  };

  return (
    <div className='Signin'>
      {showSignIn ? <Sign onSignInClick={handleSignInClick} /> : <Signotp />}
     <p className='alr'>Need an account?<span onClick={onToggle}> Register</span></p> 

      <div className="credit">© 2024. All Rights Reserved.</div>
    </div>
  );
}

export default Signin;
