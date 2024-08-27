import React, { useEffect, useState } from "react";
import "./progress.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { auth, db } from "../../../../../firebase-config";
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { updateUserEarnings } from "../../../../../service/updateEarnings/updateUserEarnings";

// Helper function to sort modules by date
const sortModulesByDate = (modules) => {
  return [...modules].sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const findUserDetailByID = async (id) => {
  try {
    // Reference to the user document in Firestore
    const userDocRef = doc(db, "users", id);

    // Fetch the user document
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      // User document found, return the data
      return userDocSnap.data();
    } else {
      // User document not found
      console.error("No such user found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

export const findUserDetailBymyARID = async (myARID) => {
  try {
    // Reference to the users collection
    const usersCollectionRef = collection(db, "users");

    // Create a query against the collection
    const q = query(usersCollectionRef, where("myARID", "==", myARID));

    // Execute the query
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If there is a result, return the first document (since myARID is unique)
      return querySnapshot.docs[0].data();
    } else {
      // No user found with the given myARID
      console.error("No user found with myARID:", myARID);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    // throw error;
  }
};

const sortModulesAndInstallmentByDate = (modules, installments) => {
  // Combine modules and installments
  const combined = [...modules, ...installments];

  // Sort combined array by date
  return combined.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const Progress = ({ data }) => {
  const [courses, setCourses] = useState(data);
  const [userId, setuserId] = useState(localStorage.getItem('student_uid'))
  useEffect(() => {
    setCourses(data)
  }, [data])

  const handlePayNow = async (courseIndex, installmentDate) => {
    try {
      console.log("installmentIndex", installmentDate);

      const updatedCourses = courses.map((course, cIndex) => {
        if (cIndex === courseIndex) {
          const updatedInstallments = course.installments.map(async (installment) => {
            if (new Date(installment.date).toISOString() === new Date(installmentDate).toISOString()) {
              console.log("installment", installment);
              const userDetl = await findUserDetailByID(userId)
              const referringUser = await findUserDetailBymyARID(userDetl.referralId);
              //////////////////////////////////////////////////////
              await updateUserEarnings(referringUser.uid, installment.price, userId)
              return {
                ...installment,
                paid: installment.paid ? [...installment.paid, userId] : [userId],
              };
            }

            return installment;
          });
          return { ...course, installments: updatedInstallments };
        }
        return course;
      });

      const selectedCourse = updatedCourses[courseIndex];
      console.log("selectedCourse", selectedCourse);

      // Update Firestore with the updated course data
      const courseRef = doc(db, "courses", selectedCourse.id);
      // await updateDoc(courseRef, selectedCourse);

      console.log("Course updated:", selectedCourse);
      alert("Course updated successfully");

      // Update the local state with the updated courses array
      setCourses(updatedCourses);
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Failed to update the course. Please try again.");
    }
  };



  return (
    <div className="progress">
      {courses.map((course, index) => {
        // Sort modules for each course by date
        const sortedModules = sortModulesAndInstallmentByDate(course.modules, course.installments);

        // Check if the length of sortedModules and installments are the same
        const installmentsMatch = true;

        return (
          <div key={index} className="course-section">
            <div className="prheader">
              <h3 className="heading">{course.courseName}</h3>
            </div>
            <div className="content-container">
              <div className="content">
                <div className="center">
                  <div className="linethick"></div>
                </div>

                <div className="dots">
                  {sortedModules.map((module, stepIndex) => (
                    <div key={stepIndex} className={`dot${stepIndex + 1}`}></div>
                  ))}
                </div>

                <Swiper className="dialogs" slidesPerView={1}>
                  {sortedModules.map((module, moduleIndex) => {
                    const isInstallment = !module.name;
                    const isPaid = isInstallment && module.paid && module.paid.includes(userId);
                    return (
                      <>
                        <SwiperSlide key={moduleIndex} className="dialog">
                          {<div className="heading">{module.name ? module.name : 'Installment'}</div>}
                          <p className="text">{module.description ? module.description : "Pay within this date"}</p>

                          {installmentsMatch && (
                            <div>
                              {module.price ? <p className="text"> installments Price: ₹{module.price}</p> : <></>}
                              <p className="text">Date: {module.date}</p>
                            </div>
                          )}
                          {!isPaid && isInstallment && (
                            <button onClick={() => handlePayNow(index, module.date)}>
                              PAY NOW
                            </button>
                          )}

                          {isPaid && (
                            <p className="text">Paid</p>
                          )}
                          {!installmentsMatch && (
                            <p className="text">Length mismatching</p>
                          )}
                        </SwiperSlide>
                      </>
                    )
                  })}

                </Swiper>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
