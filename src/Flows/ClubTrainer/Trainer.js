import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Signin from './Signin/Signin';
import Dashboard from './Dashboard/Dashboard';
import Register from './Register/Register';
import { checkUserExists } from '../../service/checkUserExists';
import { checkUserTypes } from '../../service/checkUserTypes';

const Trainer = () => {

  // after otp validaton, setIsSignedIn = true
  // so just call handleSignIn, 
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

  // if users loged in 
  useEffect(() => {
    const checkUserStatus = async () => {
      const trainerUid = localStorage.getItem('trainer_uid');
      if (trainerUid) {
        const userExists = await checkUserExists(trainerUid);
        const userTypes = await checkUserTypes(trainerUid);
        if (userExists && userTypes === "club_trainer") {
          setIsSignedIn(true);
        }
      }
    };
    checkUserStatus();
  }, []);

  const handleSignin = async () => {
    const trainerUid = localStorage.getItem('trainer_uid');
    const userTypes = await checkUserTypes(trainerUid);
    if (userTypes === "club_trainer") {
      setIsSignedIn(true);
    }
    else {
      alert("You are not a club trainer");
      return
    }

  };

  const handleLogout = () => {
    localStorage.removeItem("trainer_uid")
    setIsSignedIn(false);
    setIsRegistering(false);
    // you may redirect to home also 
  }

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      {!isSignedIn && (
        <>
          {
            isRegistering ? (
              <Register onToggle={toggleRegistering} />
            ) : (
              <Signin onSignin={handleSignin} onToggle={toggleRegistering} />
            )
          }
        </>
      )}

      {/*when, isSignedIn, is true */}
      {isSignedIn && <Dashboard handleLogout={handleLogout} />}
    </div>
  );
};

export default Trainer;

// props for state management
