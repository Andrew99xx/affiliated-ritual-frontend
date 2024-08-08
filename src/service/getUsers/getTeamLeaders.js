import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

// all team Leaders 
export const getTeamLeaders = async () => {
  try {

    // Reference to the 'users' collection
    const usersRef = collection(db, 'users');
    
    // Query to find users with userType = 'team_leader'
    const q = query(usersRef, where('userTypes', '==', 'team_leader'));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Process the results
    const TeamLeaders = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    console.log(TeamLeaders);
    return TeamLeaders;
  } catch (error) {
    console.error('Error getting team Leaders:', error);
  }
};


