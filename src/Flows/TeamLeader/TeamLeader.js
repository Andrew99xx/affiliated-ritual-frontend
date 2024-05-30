import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TeamSignin from './TeamSignin/TeamSignin';
import TeamDashboard from './TeamDashboard/TeamDashboard';
import LeaderRegister from './LeaderRegister/LeaderRegister';

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
            <LeaderRegister onToggle={toggleRegistering} />
          ) : (
            <TeamSignin onSignin={handleSignin} onToggle={toggleRegistering} />
          )}
        </>
      )}
      {isSignedIn && <TeamDashboard />}
    </div>
  );
};

export default TeamLeader;
