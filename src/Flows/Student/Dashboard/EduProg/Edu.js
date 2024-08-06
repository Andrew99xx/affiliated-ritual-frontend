import React, { useEffect, useState } from "react";
import "./Edu.css";

import Progress from "./progress/Progress";
import Box from "../../../../components/box/Box";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";

import { db } from "../../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";

// importing assests
import user from "./users.png";
import orders from "./orders.png";
import pending from "./pending.png";
import sales from "./sales.png";

const Edu = () => {

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    async function fetchCourseData() {
      const data = await findCoursesData();
      setCourseData(data);
      console.log(data)
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

  async function findCoursesData() {
    const student_uid = localStorage.getItem('student_uid');

    if (!student_uid) {
      console.error("No student_uid found in localStorage");
      return [];
    }

    try {
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
    <div className="edu">
      <h1 className="heading">Education & Progress</h1>
      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>

      <div className="graphes">
        <Graph />
        <Bargraph />


      </div>
      <div
        className="courses"
        style={{
          color: "white"
        }}
      >
        courses
      </div>
      <div className="pro">
        <Progress data={courseData} />
      </div>
    </div>
  );
};

export default Edu;
