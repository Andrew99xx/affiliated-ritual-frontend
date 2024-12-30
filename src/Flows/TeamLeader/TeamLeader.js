import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Signin from './Signin/Signin';
import Dashboard from './Dashboard/Dashboard';
import Register from './Register/Register';
import { checkUserExists } from '../../service/checkUserExists';
import { checkUserTypes } from '../../service/checkUserTypes';

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

  // if users loged in 
  useEffect(() => {
    const checkUserStatus = async () => {
      const teamLeaderUid = localStorage.getItem('team_leader_uid');
      if (teamLeaderUid) {
        const userExists = await checkUserExists(teamLeaderUid);
        const userTypes = await checkUserTypes(teamLeaderUid);
        if (userExists && userTypes === "team_leader") {
          setIsSignedIn(true);
        }
      }
    };
    checkUserStatus();
  }, []);

  const handleSignin = async () => {
    const teamLeaderUid = localStorage.getItem('team_leader_uid');
    const userTypes = await checkUserTypes(teamLeaderUid);
    if (userTypes === "team_leader") {
      setIsSignedIn(true);
    }
    else {
      alert("You are not a team Leader ");
      return
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("team_leader_uid")
    setIsSignedIn(false);
    setIsRegistering(false);
  }


  return (
    <div>
      {!isSignedIn && (
        <>
          {isRegistering ? (
            <Register />
          ) : (
            <Signin
              onSignin={handleSignin}
            />
          )}
        </>
      )}
      {/*when, isSignedIn, is true */}
      {isSignedIn && <Dashboard handleLogout={handleLogout} />}
    </div>
  );
};

export default TeamLeader;
