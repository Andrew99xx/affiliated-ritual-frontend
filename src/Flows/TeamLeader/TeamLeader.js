import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Signin from './Signin/Signin';
<<<<<<< HEAD
import Dashboard from './Dashboard/Dashboard';
import Register from './Register/Register';
=======
import TeamDashboard from './TeamDashboard/TeamDashboard';
import LeaderRegister from './LeaderRegister/LeaderRegister';
>>>>>>> origin/main

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
<<<<<<< HEAD
            <Register onToggle={toggleRegistering} />
=======
            <LeaderRegister onToggle={toggleRegistering} />
>>>>>>> origin/main
          ) : (
            <Signin onSignin={handleSignin} onToggle={toggleRegistering} />
          )}
        </>
      )}
      {/*when, isSignedIn, is true */}
<<<<<<< HEAD
      {isSignedIn && <Dashboard />}
=======
      {isSignedIn && <TeamDashboard />}
>>>>>>> origin/main
    </div>
  );
};

export default TeamLeader;
