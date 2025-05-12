import React from 'react';
import {
  ChooseUserContainer,
  UserCard,
  Title,
  RoleDescription,
  ButtonContainer,
  RoleButton
} from '../styles/ChooseUserStyles1';
import { useNavigate } from 'react-router-dom';

const ChooseUser = () => {
  const navigate = useNavigate();

  return (
    <ChooseUserContainer>
      <UserCard>
        <Title>Admin</Title>
        <RoleDescription>Manage system settings, users, and monitor activity.</RoleDescription>
        <ButtonContainer>
          <RoleButton onClick={() => navigate('/admin-signIn')}>Login as Admin</RoleButton>
        </ButtonContainer>
      </UserCard>

      <UserCard>
        <Title>Student</Title>
        <RoleDescription>Access courses, grades, attendance, and announcements.</RoleDescription>
        <ButtonContainer>
          <RoleButton onClick={() => navigate('/student-signIn')}>Login as Student</RoleButton>
        </ButtonContainer>
      </UserCard>

      <UserCard>
        <Title>Teacher</Title>
        <RoleDescription>Manage class schedules, student grades, and reports.</RoleDescription>
        <ButtonContainer>
          <RoleButton onClick={() => navigate('/teacher-signIn')}>Login as Teacher</RoleButton>
        </ButtonContainer>
      </UserCard>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
