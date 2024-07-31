import React,{useState} from 'react'
<<<<<<< HEAD
import Dashboard from './Dashboard/Dashboard'
import TeamMemberSignin from "./Signin/Signin"
=======
import MemberDashboard from './MemberDashboard/MemberDashboard'
import TeamMemberSignin from "./Signin/TeamMemberSignin"
>>>>>>> origin/main
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
<<<<<<< HEAD
    {isSignedIn && <Dashboard />}
=======
    {isSignedIn && <MemberDashboard />}
>>>>>>> origin/main
  </div>
  )
}

export default TeamMember