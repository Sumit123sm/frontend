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
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
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

const StyledNavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #d1d5db;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover {
    background-color: #374151;
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  white-space: nowrap;
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
        {isOpen && <span>Admin</span>}
      </SidebarHeader>

      <SidebarNav>
        <li>
          <StyledNavItem to="/" $isOpen={isOpen}>
            <SidebarIcon><BsPeople /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Home</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/dashboard" $isOpen={isOpen}>
            <SidebarIcon><BsGraphUp /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Dashboard</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/classes" $isOpen={isOpen}>
            <SidebarIcon><BsPeople /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Classes</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/students" $isOpen={isOpen}>
            <SidebarIcon><BsPeople /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Students</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/teachers" $isOpen={isOpen}>
            <SidebarIcon><BsPerson /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Teachers</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/assignments" $isOpen={isOpen}>
            <SidebarIcon><BsFileText /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Assignments</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/exams" $isOpen={isOpen}>
            <SidebarIcon><BsBook /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Exams</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/performance" $isOpen={isOpen}>
            <SidebarIcon><BsGraphDown /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Performance</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/attendance" $isOpen={isOpen}>
            <SidebarIcon><BsCalendar /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Attendance</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/library" $isOpen={isOpen}>
            <SidebarIcon><BsBook /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Library</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/communication" $isOpen={isOpen}>
            <SidebarIcon><BsChatDots /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Announcement</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/events" $isOpen={isOpen}>
            <SidebarIcon><BsCalendarEvent /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Events & Calendar</SidebarLabel>
          </StyledNavItem>
        </li>
        <li>
          <StyledNavItem to="/admin/settings" $isOpen={isOpen}>
            <SidebarIcon><BsGear /></SidebarIcon>
            <SidebarLabel $isOpen={isOpen}>Settings & Profile</SidebarLabel>
          </StyledNavItem>
        </li>
      </SidebarNav>

      <ToggleButton onClick={toggleSidebar} $isOpen={isOpen}>
        {isOpen ? <BsChevronLeft /> : <BsChevronRight />}
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;
