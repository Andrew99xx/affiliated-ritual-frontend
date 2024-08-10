import React from "react";
import "./progress.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Update the Progress component to accept courseData as a prop
const Progress = ({ data, onClickAttendance }) => {
  return (
    <div className="progress">
      {data.map((course, index) => (
        <div key={index} className="course-section">
          <div className="prheader">
            <h3 className="heading">{course.courseName}</h3>
            {/* <h3 className="heading">certificate</h3> */}
          </div>
          <div className="content-container">
            <div className="content">
              <div className="center">
                <div className="linethick"></div>
              </div>

              <div className="dots">
                {course.modules.map((module, stepIndex) => (
                  <div key={stepIndex} className={`dot${stepIndex + 1}`}></div>
                ))}
              </div>

              <Swiper className="dialogs" slidesPerView={1}>
                {course.modules.map((module, moduleIndex) => (
                  <SwiperSlide key={moduleIndex} className="dialog">
                    <div className="heading">{module.name}</div>
                    <p className="text">{module.description}</p>

                    <div>
                      <div
                        className='btn'
                        onClick={() => onClickAttendance(course.id, course.courseName, module.name)}>
                        Attendance
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
