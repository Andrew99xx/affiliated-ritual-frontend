import React, { useEffect } from 'react'
import Dashboard from './Dashboard/Dashboard'
import { useAuth } from '../../provider/Auth.provider';
import { findUserByUID } from '../../service/findUsers/findUserByUID';
import logout from '../../service/logout';

const StudentDashBoard = () => {
    const { user, loading } = useAuth();

  useEffect( ()=>{
    const fetch=(async ()=>{
        console.log("H O W D Y",user);
    const userDetails= await findUserByUID(user.uid)
    console.log("User details", userDetails);
    if(userDetails.userTypes!=="team_leader"){
        window.location.href ='/teamleader?action=login'

    }
    }) 
    fetch()   
    
  },[user])
  if (loading) {
    return <p>Loading...</p>; // Show a loading message while checking auth state
  }
  return (
    <div><Dashboard handleLogout={logout}/></div>
  )
}

export default StudentDashBoard