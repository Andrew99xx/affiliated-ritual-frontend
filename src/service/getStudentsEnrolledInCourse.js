import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

// all team Leaders 
export const getStudentsEnrolledInCourse = async (courseId) => {
  try {

    // Reference to the 'users' collection
    const usersRef = collection(db, 'users');
    
    // Query to find users who is enrolled in courseId
    const q = query(usersRef, where('courseId', '==', courseId));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Process the results
    const students = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    console.log(students);
    return students;
  } catch (error) {
    console.error('Error getting team Leaders:', error);
  }
};


