// TeacherSection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { TeachersContainer, Content, TeachersContent, TeachersHeader, TeacherList, TeacherItem, AddTeacherForm, AddTeacherInput, 
  AddTeacherButton } from '../../styles/TeachersStyles';

const TeacherSection = () => {
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '' });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('https://backend-1u3j.onrender.com/api/v1/teachers/getall');
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  return (
    <TeachersContainer>
      <Sidebar />
      <div style={{ marginLeft: "240px" }} >
      <Content>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <TeacherList>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher.id}>{teacher.name} - {teacher.email} - {teacher.subject}</TeacherItem>
            ))}
          </TeacherList>
        </TeachersContent>
      </Content>
      </div>
    </TeachersContainer>
  );
};

export default TeacherSection;
