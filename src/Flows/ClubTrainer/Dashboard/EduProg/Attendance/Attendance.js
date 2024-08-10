import React from "react";
import styles from "./Attendance.module.css";
import close from "./close.png";
import AttendanceTable from "../AttendanceTable/AttendanceTable";

const Attendance = ({
  showAttendanceModal,
  closeAttendanceModal,
  singleCourseName,
  singleCourseModule,
  studentsEnrolledInCourse,
  handleTrainerEarnings
}) => {
  return (
    <div className={showAttendanceModal ? styles.modal : styles.displayNone}>
      <section className={styles.modalMain}>

        <div className={styles.closebtn} onClick={closeAttendanceModal}>
          <img src={close} alt="Close" />
        </div>

        <div className={styles.mainc}>

          <div className={styles.btnc}>
            <div > Attendance Information</div>
            <div onClick={closeAttendanceModal} className={styles.btn}>
              Cancel
            </div>
          </div>

          <hr className={styles.hrLine} />

          <div className={styles.wrapper}>
            <div className={styles.wrapperItem}>
              <div>My Attendance</div>
              <div onClick={handleTrainerEarnings} className={styles.btn}>
                Mark Present
              </div>
            </div>

            <div className={styles.wrapperItem}>
              <div>{singleCourseName} / {singleCourseModule}</div>
              <div onClick={closeAttendanceModal} className={styles.btn}>
                Mark Complted
              </div>
            </div>

          </div>

        </div>
        <AttendanceTable
          singleCourseName={singleCourseName}
          singleCourseModule={singleCourseModule}
          studentsEnrolledInCourse={studentsEnrolledInCourse}
        />
      </section>
    </div>
  );
};

export default Attendance;
