import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

// all club trainers 
export const getClubTrainers = async () => {
  try {

    // Reference to the 'users' collection
    const usersRef = collection(db, 'users');
    
    // Query to find users with userType = 'club_trainer'
    const q = query(usersRef, where('userTypes', '==', 'club_trainer'));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Process the results
    const clubTrainers = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    console.log(clubTrainers);
    return clubTrainers;
  } catch (error) {
    console.error('Error getting club trainers:', error);
  }
};


