import React,{useState} from 'react'
import Dashboard from './Dashboard/Dashboard'
import TeamMemberSignin from "./Signin/Signin"
const TeamMember = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
 // Function to handle signin
 const handleSignin = () => {
  // Perform signin logic
  setIsSignedIn(true);
};
  return (
    <div>
    {/* Render TeamSignin component only if not signed in */}
    {!isSignedIn && <TeamMemberSignin onSignin={handleSignin} />}
    
    {/* Render TeamDashboard component only if signed in */}
    {isSignedIn && <Dashboard />}
  </div>
  )
}

export default TeamMember