import React, { useState } from 'react';
import TeamSignin from './TeamSignin/TeamSignin';
import TeamDashboard from './TeamDashboard/TeamDashboard';

const TeamLeader = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  // Function to handle signin
  const handleSignin = () => {
    // Perform signin logic
    setIsSignedIn(true);
  };

  return (
    <div>
      {/* Render TeamSignin component only if not signed in */}
      {!isSignedIn && <TeamSignin onSignin={handleSignin} />}
      
      {/* Render TeamDashboard component only if signed in */}
      {isSignedIn && <TeamDashboard />}
    </div>
  );
};

export default TeamLeader;
