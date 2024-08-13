import React, { useEffect } from 'react';
import "./AttendanceTable.css";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase-config';

function AttendanceTable({ singleCourseName, singleCourseModule, studentsEnrolledInCourse }) {


    useEffect(()=>{
        console.log("singleCourseModule",singleCourseModule);
        
    },[])
    const handlePresent = (studentId) => {
        updateAttendance(studentId, 'present');
    };

    const handleAbsent = (studentId) => {
        updateAttendance(studentId, 'absent');
    };

    const updateAttendance = async (studentId, status) => {
        const updatedModule = {
            ...singleCourseModule,
            [status]: singleCourseModule[status] ? [...singleCourseModule[status], studentId] : [studentId],
        };

        // Replace the module in the course object
        const updatedCourse = {
            ...singleCourseName,
            modules: singleCourseName.modules.map(module =>
                new Date(module.date).toISOString() === new Date(singleCourseModule.date).toISOString()
                    ? updatedModule
                    : module
            ),
        };

        const courseRef = doc(db, "courses", updatedCourse.id);
      await updateDoc(courseRef, updatedCourse);

        // Here, you would typically update the database with `updatedCourse`
        console.log("Updated Course:", updatedCourse);
        alert(`${status.charAt(0).toUpperCase() + status.slice(1)} marked successfully`);
    };

    return (
        <div>
            <div className='tablecon'>
                <table className='table' cellSpacing={0}>
                    <thead className='tablehead'>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Course Name</th>
                            <th>Course Module</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='tablebody'>
                        {studentsEnrolledInCourse && studentsEnrolledInCourse.map(student => {
                            // const isInstallment = !module.name;
                            const isPresent = singleCourseModule.present && singleCourseModule.present.includes(student.id)?true:false;
                            const isAbsent = singleCourseModule.absent && singleCourseModule.absent.includes(student.id)?true:false;

                           return (<tr key={student.id}>
                                <td>{student.myARID.slice(0, 7) + "..." || "NA"}</td>
                                <td>{student.firstName || "NA"}</td>
                                <td>{singleCourseName.courseName || "NA"}</td>
                                <td>{singleCourseModule.name || "NA"}</td>
                                <td className='btns'>
                                    <button className='btn' disabled={isPresent || isAbsent} onClick={() => handlePresent(student.id)}>
                                    Present
                                    </button>
                                    <button className='btn'  disabled={isPresent || isAbsent} onClick={() => handleAbsent(student.id)}>
                                        Absent
                                    </button>
                                </td>
                            </tr>)
                        })}
                        {/* Render a message if there are no students enrolled */}
                        {studentsEnrolledInCourse.length === 0 && (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center' }}>
                                    No students enrolled in this course
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AttendanceTable;
