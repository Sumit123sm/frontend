import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  Divider,
  SubmitButton,
} from '../../styles/AttendanceStyles';

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://backend-1u3j.onrender.com/api/v1/students/getall');
      if (response.data?.students && Array.isArray(response.data.students)) {
        setStudents(response.data.students);
        initializeAttendanceData(response.data.students);
      } else {
        console.warn('Invalid students data format:', response.data);
        setStudents([]);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      studentId: student._id,
      name: student.name,
      status: 'Present', // Default status
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (studentId, status) => {
    setAttendanceData((prevData) =>
      prevData.map((student) =>
        student.studentId === studentId ? { ...student, status } : student
      )
    );
  };

  const handleSubmit = async () => {
    try {
      if (attendanceData.length === 0) {
        console.warn('No attendance data to submit');
        return;
      }

      console.log('Submitting Attendance Data:', attendanceData);

      const response = await axios.post('https://backend-1u3j.onrender.com/api/v1/attendance', {
        attendanceRecords: attendanceData,
      });

      console.log('Attendance submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting attendance data:', error.response?.data || error.message);
    }
  };

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            {students.map((student, index) => (
              <React.Fragment key={student._id}>
                <AttendanceItem>
                  <StudentName>{student.name}</StudentName>
                  <CheckboxLabel>
                    <input
                      type="radio"
                      name={`status-${student._id}`}
                      checked={attendanceData[index]?.status === 'Present'}
                      onChange={() => handleStatusChange(student._id, 'Present')}
                    />
                    Present
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="radio"
                      name={`status-${student._id}`}
                      checked={attendanceData[index]?.status === 'Absent'}
                      onChange={() => handleStatusChange(student._id, 'Absent')}
                    />
                    Absent
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="radio"
                      name={`status-${student._id}`}
                      checked={attendanceData[index]?.status === 'Absent with apology'}
                      onChange={() => handleStatusChange(student._id, 'Absent with apology')}
                    />
                    Absent with apology
                  </CheckboxLabel>
                </AttendanceItem>
                {index !== students.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </AttendanceList>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default Attendance;
