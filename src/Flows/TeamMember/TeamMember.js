import React,{useState} from 'react'
import MemberDashboard from './MemberDashboard/MemberDashboard'
import TeamMemberSignin from "./Signin/TeamMemberSignin"
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
    {isSignedIn && <MemberDashboard />}
  </div>
  )
}

export default TeamMember