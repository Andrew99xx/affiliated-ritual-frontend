import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

// all team Members 
export const getTeamMembers = async () => {
  try {

    // Reference to the 'users' collection
    const usersRef = collection(db, 'users');
    
    // Query to find users with userType = 'team_Member'
    const q = query(usersRef, where('userTypes', '==', 'team_member'));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Process the results
    const TeamMembers = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    console.log(TeamMembers);
    return TeamMembers;
  } catch (error) {
    console.error('Error getting team Members:', error);
  }
};


