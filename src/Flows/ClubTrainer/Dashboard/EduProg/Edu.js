import React, { useEffect, useState } from "react";
import "./Edu.css";

import Progress from "./progress/Progress";
import Box from "../../../../components/box/Box";
import Graph from "../../../../components/Graph/Graph";
import Bargraph from "../../../../components/Graph/Bargraph";

import { db } from "../../../../firebase-config";
import { where, getDocs, collection, query } from "firebase/firestore";

// importing assets
import user from "./users.png";
import orders from "./orders.png";
import pending from "./pending.png";
import sales from "./sales.png";
import Attendance from "./Attendance/Attendance";

import { getStudentsEnrolledInCourse } from "../../../../service/getStudentsEnrolledInCourse";
import { updateTrainerEarnings } from "../../../../service/updateEarnings/updateTrainerEarnings";

const Edu = () => {

  const [showAttendance, setShowAttendance] = useState(false);

  // full courseData of trainer 
  const [courseData, setCourseData] = useState([]);
  const [trainer_uid, setTrainerUid] = useState(null);

  const [studentsEnrolledInCourse, setStudentsEnrolledInCourse] = useState([]);
  const [singleCourseName, setSingleCourseName] = useState("")
  const [singleCourseModule, setSingleCourseModule] = useState("")


  const showAttendanceModal = async (courseId, courseName, moduleName) => {
    console.log("moduleName",moduleName,"courseName",courseName);
    
    setShowAttendance(true);

    setSingleCourseName(courseName);

    setSingleCourseModule(moduleName);

    try {
      const students = await getStudentsEnrolledInCourse(courseId);
      setStudentsEnrolledInCourse(students);
    } catch (error) {
      console.error('Failed to load students:', error);
    }
  };


  const closeAttendanceModal = () => {
    setShowAttendance(false);
  };

  const handleTrainerEarnings = () => {
    const trainerId = localStorage.getItem('trainer_uid');

    if (trainerId) {
      updateTrainerEarnings(trainerId);
    } else {
      alert("Please login to update trainer earnings");
    }

  }

  useEffect(() => {
    // Retrieve UID from local storage and set state
    const uid = localStorage.getItem('trainer_uid');
    if (uid) {
      setTrainerUid(uid);
    } else {
      console.error("No trainer UID found in local storage.");
    }
  }, []);

  useEffect(() => {
    if (trainer_uid) {
      async function fetchCourseData() {
        const data = await getCoursesByTrainer(trainer_uid);
        setCourseData(data);
        console.log(data);
      }
      fetchCourseData();
    }
  }, [trainer_uid]); // Dependency array ensures this runs only when trainer_uid is set

  const getCoursesByTrainer = async (trainer_uid) => {

    if (!trainer_uid) {
      console.error("Trainer UID is not available.");
      return [];
    }

    try {
      const coursesRef = collection(db, "courses");
      const q = query(coursesRef, where("selectedTrainer", "==", trainer_uid));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No courses found for this trainer.");
        return [];
      }

      const courses = [];
      querySnapshot.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
      });

      // returning array
      return courses;
    } catch (error) {
      console.error("Error fetching courses: ", error);
      return [];
    }
  };

  return (

    <>

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
            color: "white",
            fontSize: "44px"
          }}
        >
          Your courses
        </div>
        <div className="pro">
          <Progress
            data={courseData}
            onClickAttendance={showAttendanceModal}
          />
        </div>
      </div>


      {/* if showAttendanceModal = true */}
      <Attendance
        showAttendanceModal={showAttendance}
        closeAttendanceModal={closeAttendanceModal}
        singleCourseName={singleCourseName}
        singleCourseModule={singleCourseModule}
        studentsEnrolledInCourse={studentsEnrolledInCourse}
        handleTrainerEarnings={handleTrainerEarnings}
      />

    </>
  );
};

export default Edu;
