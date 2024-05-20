import React, { useState } from 'react';
import Signin from './Signin/Signin';
import Dashboard from './Dashboard/Dashboard';
import StudentRegister from './StudentRegister/StudentRegister';
const Student = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Function to handle signin
  const handleSignin = () => {
    // Perform signin logic
    setIsSignedIn(true);
  };

  return (
    <div>
      
      {/* logic for either register or login */}
      {!isSignedIn &&<> <Signin onSignin={handleSignin} /> <StudentRegister/></>}
      
      {/* Render Dashboard component only if signed in */}
      {isSignedIn && <Dashboard />}
    </div>
  );
};

export default Student;
