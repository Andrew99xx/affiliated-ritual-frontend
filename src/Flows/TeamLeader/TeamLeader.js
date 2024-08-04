import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Signin from './Signin/Signin';
import Dashboard from './Dashboard/Dashboard';
import Register from './Register/Register';

const TeamLeader = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('action') === 'register') {
      setIsRegistering(true);
    } else {
      setIsRegistering(false);
    }
  }, [location.search]);

  const handleSignin = () => {
    setIsSignedIn(true);
  };

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      {!isSignedIn && (
        <>
          {isRegistering ? (
            <Register onToggle={toggleRegistering} />
          ) : (
            <Signin onSignin={handleSignin} onToggle={toggleRegistering} />
          )}
        </>
      )}
      {/*when, isSignedIn, is true */}
      {isSignedIn && <Dashboard />}
    </div>
  );
};

export default TeamLeader;
