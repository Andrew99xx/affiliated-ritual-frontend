import React from 'react';
import "./AttendanceTable.css";

function AttendanceTable({ singleCourseName, singleCourseModule, studentsEnrolledInCourse }) {

    const handlePresent = (studentId) => {
        console.log(`Marked present: ${studentId}`);
    };

    const handleAbsent = (studentId) => {
        console.log(`Marked absent: ${studentId}`);
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
                        {studentsEnrolledInCourse && studentsEnrolledInCourse.map(student => (
                            <tr key={student.id}>
                                <td>{student.id.slice(0, 7) + "..." || "NA"}</td>
                                <td>{student.firstName || "NA"}</td>
                                <td>{singleCourseName || "NA"}</td>
                                <td>{singleCourseModule || "NA"}</td>
                                <td className='btns'>
                                    <button className='btn' onClick={() => handlePresent(student.id)}>
                                        Present
                                    </button>
                                    <button className='btn' onClick={() => handleAbsent(student.id)}>
                                        Absent
                                    </button>
                                </td>
                            </tr>
                        ))}
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
