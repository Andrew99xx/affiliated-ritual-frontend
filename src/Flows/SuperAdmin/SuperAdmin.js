import React, { useState } from 'react';
<<<<<<< HEAD
import Dashboard from './Dashboard/Dashboard';
import Signin from "./Signin/Signin"
=======
import SuperDashboard from './SuperAdminDashboard/SuperDashboard';
import SuperAdminSign from "./SuperAdmin/SuperAdminSign"
>>>>>>> origin/main
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
<<<<<<< HEAD
      {!isSignedIn && <Signin onSignin={handleSignin} />}
      
      {/* Render Dashboard component only if signed in */}
      {isSignedIn && <Dashboard />}
=======
      {!isSignedIn && <SuperAdminSign onSignin={handleSignin} />}
      
      {/* Render Dashboard component only if signed in */}
      {isSignedIn && <SuperDashboard />}
>>>>>>> origin/main
    </div>
  );
};

export default SuperAdmin;

