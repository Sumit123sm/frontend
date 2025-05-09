import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/bg1.png';
import {
  BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown,
  BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsChevronLeft, BsChevronRight
} from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ $isOpen }) => ($isOpen ? '220px' : '70px')};
  height: 100vh;
  background-color: #1f2937;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const SidebarHeader = styled.div`
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #111827;
  border-bottom: 1px solid #374151;
`;

const Logo = styled.img`
  width: 35px;
  height: auto;
  margin-right: ${({ $isOpen }) => ($isOpen ? '10px' : '0')};
  transition: margin 0.3s ease;
`;

const SidebarNav = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 10px 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  text-decoration: none;
  color: #d1d5db;
  transition: background 0.2s ease;
  &:hover {
    background-color: #374151;
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
`;

const LinkLabel = styled.span`
  margin-left: 16px;
  display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
`;

const ToggleButton = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  background-color: #111827;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-end' : 'center')};
  padding: 0 20px;
  transition: background 0.2s ease;
  &:hover {
    background-color: #1f2937;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarHeader>
        <Logo src={logoImage} alt="Logo" $isOpen={isOpen} />
        {isOpen && <span>Teacher Panel</span>}
      </SidebarHeader>

      <SidebarNav>
        <StyledLink to="/" $isOpen={isOpen}>
          <SidebarIcon><BsPeople /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Home</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/dashboard" $isOpen={isOpen}>
          <SidebarIcon><BsGraphUp /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Dashboard</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/classes" $isOpen={isOpen}>
          <SidebarIcon><BsPeople /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Classes</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/teachers" $isOpen={isOpen}>
          <SidebarIcon><BsPerson /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Teachers</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/assignments" $isOpen={isOpen}>
          <SidebarIcon><BsFileText /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Assignments</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/exams" $isOpen={isOpen}>
          <SidebarIcon><BsBook /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Exams</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/performance" $isOpen={isOpen}>
          <SidebarIcon><BsGraphDown /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Performance</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/attendance" $isOpen={isOpen}>
          <SidebarIcon><BsCalendar /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Attendance</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/communication" $isOpen={isOpen}>
          <SidebarIcon><BsChatDots /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Announcements</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/events" $isOpen={isOpen}>
          <SidebarIcon><BsCalendarEvent /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Events & Calendar</LinkLabel>
        </StyledLink>
        <StyledLink to="/teacher/settings" $isOpen={isOpen}>
          <SidebarIcon><BsGear /></SidebarIcon>
          <LinkLabel $isOpen={isOpen}>Settings</LinkLabel>
        </StyledLink>
      </SidebarNav>

      <ToggleButton onClick={toggleSidebar} $isOpen={isOpen}>
        {isOpen ? <BsChevronLeft /> : <BsChevronRight />}
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
