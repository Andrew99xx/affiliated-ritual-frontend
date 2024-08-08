import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config.js";

// finding course price by courseId
export const findCoursePriceById = async (courseId) => {
    try {
        const courseRef = doc(db, "courses", courseId);
        const courseDoc = await getDoc(courseRef);

        if (courseDoc.exists()) {
            const courseData = courseDoc.data();
            return courseData.coursePrice; 
            // coursePrice is in database
        } else {
            console.log("No such course found!");
            return null;
        }
    } catch (error) {
        console.error("Error finding course price by ID:", error);
        throw error;
    }
};
