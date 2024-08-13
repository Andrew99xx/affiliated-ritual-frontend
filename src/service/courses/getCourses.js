import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";


// returns an arrays
export const getCourses = async () => {
    const coursesCollection = collection(db, "courses");
    const coursesSnapshot = await getDocs(coursesCollection);
    const coursesList = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return coursesList || [];
}
