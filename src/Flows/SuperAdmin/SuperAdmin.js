import React, { useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Signin from "./Signin/Signin"
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
      {!isSignedIn && <Signin onSignin={handleSignin} />}
      
      {/* Render Dashboard component only if signed in */}
      {isSignedIn && <Dashboard />}
    </div>
  );
};

export default SuperAdmin;

