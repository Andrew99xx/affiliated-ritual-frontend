import React, { useState } from 'react';
import ClubAdminSign from './ClubAdmin/ClubAdminSign';
import AdminDashboard from './ClubAdminDashboard/AdminDashboard';

const ClubAdmin = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  // Function to handle signin
  const handleSignin = () => {
    // Perform signin logic
    setIsSignedIn(true);
  };

  return (
    <div>
      {/* Render Signin component only if not signed in */}
      {!isSignedIn && <ClubAdminSign onSignin={handleSignin} />}
      
      {/* Render Dashboard component only if signed in */}
      {isSignedIn && <AdminDashboard />}
    </div>
  );
};

export default ClubAdmin;

