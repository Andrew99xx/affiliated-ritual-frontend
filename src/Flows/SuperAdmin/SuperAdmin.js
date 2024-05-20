import React, { useState } from 'react';
import SuperDashboard from './SuperAdminDashboard/SuperDashboard';
import SuperAdminSign from "./SuperAdmin/SuperAdminSign"
const SuperAdmin = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  // Function to handle signin
  const handleSignin = () => {
    // Perform signin logic
    setIsSignedIn(true);
  };

  return (
    <div>
      {/* Render Signin component only if not signed in */}
      {!isSignedIn && <SuperAdminSign onSignin={handleSignin} />}
      
      {/* Render Dashboard component only if signed in */}
      {isSignedIn && <SuperDashboard />}
    </div>
  );
};

export default SuperAdmin;

