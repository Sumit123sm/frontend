import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  AttendanceContainer,
  SidebarContainer,
  Content,
  AttendanceHeader
} from '../../styles/AttendanceStyles';

const AttendanceSection = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get('https://backend-1u3j.onrender.com/api/v1/attendance/getall');
      console.log('API Response:', response.data);

      if (Array.isArray(response.data.attendance)) {
        setAttendanceData(response.data.attendance);
      } else {
        console.warn('Invalid attendance format:', response.data);
        setAttendanceData([]);
      }
    } catch (error) {
      console.error('Error fetching attendance data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <AttendanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <table style={{ width: '70%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Sr.No</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Student Name</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map(({ _id, name, status }, index) => (
              <tr key={_id || index}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{index + 1}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{name || 'Unknown Name'}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{status || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </AttendanceContainer>
  );
};

export default AttendanceSection;
