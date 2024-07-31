import React, { useState } from 'react';
import "./Signin.css";
import Sign from './Signincomp/Sign';
import Signotp from './Signincomp/Signotp';

const ClubAdminSign = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignInClick = () => {
    setShowSignIn(false);
  };

  return (
    <div className='Signin'>
      {showSignIn ? <Sign onSignInClick={handleSignInClick} /> : <Signotp />}
      <div className="credit">© 2024. All Rights Reserved.</div>
    </div>
  );
}

export default ClubAdminSign;