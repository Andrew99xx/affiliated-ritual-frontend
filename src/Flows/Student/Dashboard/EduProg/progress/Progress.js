import React from "react";
import "./progress.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Helper function to sort modules by date
const sortModulesByDate = (modules) => {
  return [...modules].sort((a, b) => new Date(a.date) - new Date(b.date));
};

const Progress = ({ data }) => {
  return (
    <div className="progress">
      {data.map((course, index) => {
        // Sort modules for each course by date
        const sortedModules = sortModulesByDate(course.modules);

        // Check if the length of sortedModules and installments are the same
        const installmentsMatch = sortedModules.length === course.installments.length;

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
                      <div className="heading">{module.name}</div>
                      <p className="text">{module.description}</p>
                 
                      {installmentsMatch && (
                        <div>
                          <p className="text"> installments Price: ₹{course.installments[moduleIndex].price}</p>
                          <p className="text">Date: {course.installments[moduleIndex].date}</p>
                        </div>
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
