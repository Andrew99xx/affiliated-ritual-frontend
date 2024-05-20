import React, { useState } from 'react';
import TeamSignin from './TeamSignin/TeamSignin';
import TeamDashboard from './TeamDashboard/TeamDashboard';
import LeaderRegister from './LeaderRegister/LeaderRegister';
const TeamLeader = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  // Function to handle signin
  const handleSignin = () => {
    // Perform signin logic
    setIsSignedIn(true);
  };

  return (
    <div>
      
      {/* logic for either login or signup */}
      {!isSignedIn && <><TeamSignin onSignin={handleSignin} /> <LeaderRegister/></> }
      
      {/* Render TeamDashboard component only if signed in */}
      {isSignedIn && <TeamDashboard />}
    </div>
  );
};

export default TeamLeader;
