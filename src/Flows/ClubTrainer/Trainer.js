import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Signin from './Signin/Signin';
import Dashboard from './Dashboard/Dashboard';
import TrainerRegister from './TrainerRegister/TrainerRegister';

const Trainer = () => {
<<<<<<< HEAD
=======

  // after otp validaton, setIsSignedIn = true
  // so just call handleSignIn, 
>>>>>>> 11cb80b (major update)
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
<<<<<<< HEAD
          {isRegistering ? (
            <TrainerRegister onToggle={toggleRegistering} />
          ) : (
            <Signin onSignin={handleSignin} onToggle={toggleRegistering} />
          )}
        </>
      )}
=======
          {
            isRegistering ? (
              <TrainerRegister onToggle={toggleRegistering} />
            ) : (
              <Signin onSignin={handleSignin} onToggle={toggleRegistering} />
            )
          }
        </>
      )}

      {/*when, isSignedIn, is true */}
>>>>>>> 11cb80b (major update)
      {isSignedIn && <Dashboard />}
    </div>
  );
};

export default Trainer;
<<<<<<< HEAD
=======

// props for state management
>>>>>>> 11cb80b (major update)
