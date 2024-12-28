import React, { useEffect, useState } from "react";


import Progress from "./progress/Progress";
import Box from "../../../../components/box/Box";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";

import { db } from "../../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

import styles from "./Edu.module.css"

// importing assests
import user from "../assets/users.png"
import orders from "../assets/orders.png"
import pending from "../assets/pending.png"
import sales from "../assets/sales.png"


const Edu = () => {

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    async function fetchCourseData() {
      const data = await findCoursesData();
      setCourseData(data);
      console.log(JSON.stringify(data, null, 2))
    }
    fetchCourseData();
  }, []);

  async function getCourseIdsOfStudent(student_uid) {
    try {
      const userDocRef = doc(db, "users", student_uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        // array of courseIds of student
        return userData.courseIdsArray || [];
      } else {
        console.log("No such user found!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user document:", error);
      return null;
    }
  }

  async function findCoursesData2() {
    const student_uid = localStorage.getItem('student_uid');

    if (!student_uid) {
      console.error("No student_uid found in localStorage");
      return [];
    }

    try {
      // all the courses a students had purchased 
      const courseIdsArray = await getCourseIdsOfStudent(student_uid);

      if (courseIdsArray.length === 0) {
        console.log("No course IDs found for this student");
        return [];
      }

      const courseDataPromises = courseIdsArray.map(async (courseId) => {
        const courseDocRef = doc(db, "courses", courseId);
        const courseDocSnapshot = await getDoc(courseDocRef);

        if (courseDocSnapshot.exists()) {
          return { id: courseId, ...courseDocSnapshot.data() };
        } else {
          console.error(`No course found for ID: ${courseId}`);
          return null;
        }
      });

      // Wait for all course data to be fetched
      const courseDataArray = await Promise.all(courseDataPromises);

      // Filter out any null values (in case a course document was not found)
      return courseDataArray.filter(courseData => courseData !== null);
    } catch (error) {
      console.error("Error fetching course data:", error);
      return [];
    }
  }

  async function findCoursesData() {
    const student_uid = localStorage.getItem('student_uid');

    if (!student_uid) {
      console.error("No student_uid found in localStorage");
      return [];
    }

    try {
      // all the courses a students had purchased 
      const courseIdsArray = await getCourseIdsOfStudent(student_uid);

      if (courseIdsArray.length === 0) {
        console.log("No course IDs found for this student");
        return [];
      }

      const courseDataPromises = courseIdsArray.map(async (courseId) => {
        const courseDocRef = doc(db, "courses", courseId);
        const courseDocSnapshot = await getDoc(courseDocRef);

        if (courseDocSnapshot.exists()) {
          return { id: courseId, ...courseDocSnapshot.data() };
        } else {
          console.error(`No course found for ID: ${courseId}`);
          return null;
        }
      });

      // Wait for all course data to be fetched
      const courseDataArray = await Promise.all(courseDataPromises);

      // Filter out any null values (in case a course document was not found)
      return courseDataArray.filter(courseData => courseData !== null);
    } catch (error) {
      console.error("Error fetching course data:", error);
      return [];
    }
  }


  return (
    <div className={styles.edu}>

      <div className={styles.progressCharts}>
        <h1 className={styles.heading}>Education & Progress</h1>
      </div>

      <div className={styles.pro}>
        <div className={styles.courses}>Your courses</div>
        {
          
        }
        <Progress data={courseData} />
      </div>
    </div>
  );
};

export default Edu;
