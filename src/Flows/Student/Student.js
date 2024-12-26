import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Signin from './Signin/Signin';
import Dashboard from './Dashboard/Dashboard';
import Register from './Register/StudentRegister.jsx';
import { checkUserExists } from '../../service/checkUserExists.js';
import { checkUserTypes } from '../../service/checkUserTypes.js';

const Student = () => {
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
  // auto checking for first time
  useEffect(() => {
    const checkUserStatus = async () => {
      const studentUid = localStorage.getItem('student_uid');
      if (studentUid) {
        const userExists = await checkUserExists(studentUid);
        const userTypes = await checkUserTypes(studentUid);
        if (userExists && userTypes === "team_leader") {
          setIsSignedIn(true);
        }
      }
    };
    checkUserStatus();
  }, []);

  const handleSignin = async () => {
    console.log("handlesignin");
    const studentUid = localStorage.getItem('student_uid');
    const userTypes = await checkUserTypes(studentUid);
    if (userTypes === "team_leader") {
      setIsSignedIn(true);
      alert("You are a student ");
      console.log("You are a student ");
    }
    else {
      alert("You are not a student ");
      return
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("student_uid")
    setIsSignedIn(false);
    setIsRegistering(false);
    // you may redirect to home also 
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
      {isSignedIn && <Dashboard handleLogout={handleLogout} />}
    </div>
  );
};

export default Student;
