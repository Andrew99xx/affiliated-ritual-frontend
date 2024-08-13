import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";


// returns an arrays
export const getCoursesWithModification = async () => {
    const coursesCollection = collection(db, "courses");
    const coursesSnapshot = await getDocs(coursesCollection);

    const coursesList = coursesSnapshot.docs.map(doc => {
        const data = doc.data();

        return {
            id: doc.id,
            packageImage: data.courseImage, 
            packageTitle: data.courseName || "All Course",
            packageDetails: [`${data.courseDuration} months`, "3 classes/week", "Recording"],
            points: ["Free Doubt Session", "Live Q&A Support", "Affiliate Ritual Certificate"],
            packagePrice: data.coursePrice || "1800",
            packagePriceCross: (parseFloat(data.coursePrice) * 2).toString() || "3600",
            ...data,
        };
    });
    return coursesList || [];
}
