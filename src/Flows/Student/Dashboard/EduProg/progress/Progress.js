import React, { useEffect, useState } from "react";
import "./progress.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Helper function to sort modules by date
const sortModulesByDate = (modules) => {
  return [...modules].sort((a, b) => new Date(a.date) - new Date(b.date));
};


const sortModulesAndInstallmentByDate = (modules, installments) => {
  // Combine modules and installments
  const combined = [...modules, ...installments];

  // Sort combined array by date
  return combined.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const Progress = ({ data }) => {
  const [courses, setCourses] = useState(data);
  const [userId, setuserId] = useState('123')


  useEffect(() => {
    setCourses(data)
  }, [data])

  const handlePayNow = (courseIndex, installmentIndex) => {
    console.log(courses);

    const updatedCourses = courses.map((course, cIndex) => {
      if (cIndex === courseIndex) {
        const updatedInstallments = course.installments.map((installment, iIndex) => {
          if (iIndex === installmentIndex) {
            return {
              ...installment,
              paid: installment.paid ? [...installment.paid, userId] : [userId]
            };
          }
          return installment;
        });
        return { ...course, installments: updatedInstallments };
      }
      return course;
    });
    console.log(JSON.stringify(updatedCourses, null, 2));

    setCourses(updatedCourses);
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
                  {sortedModules.map((module, moduleIndex) => (
                    <SwiperSlide key={moduleIndex} className="dialog">
                      {<div className="heading">{module.name ? module.name : 'Installment'}</div>}
                      <p className="text">{module.description ? module.description : "Pay within this date"}</p>

                      {installmentsMatch && (
                        <div>
                          {module.price ? <p className="text"> installments Price: ₹{module.price}</p> : <></>}
                          <p className="text">Date: {module.date}</p>
                        </div>
                      )}
                      {!module.name && !module.paid && (
                        <button onClick={() => handlePayNow(index, moduleIndex)}>
                          PAY NOW {module.paid ? module.paid.includes('123') : 'not paid'}
                        </button>
                      )}
                      {module.paid && module.paid.includes('123') && (
                        <p className="text">Paid </p>
                      )}
                      {!installmentsMatch && (
                        <p className="text">Length mismatching</p>
                      )}
                    </SwiperSlide>
                  ))}
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
