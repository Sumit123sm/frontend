// Home.jsx
import React from 'react';
import {
  Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
  LoginButton,
  GuestButton,
  HomeContainer,
  SchoolInfo,
  Title,
  LoremTextContainer,
  AdminRegisterLink,
  FeatureCard,
  FeaturesWrapper,
  Footer,
  FooterContent,
  ContactInfo,
  SocialIcons,
  SocialIconLink
} from '../styles/styles';

import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <NavigationLinks>
          <NavLink as={Link} to="/about">About Us</NavLink>
          <NavLink as={Link} to="/products">Products</NavLink>
          <NavLink as={Link} to="/contact">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>

      <HomeContainer>
        <SchoolInfo>
          <Title>Welcome to the School Management System</Title>
          <LoremTextContainer>
            <p>
              A centralized platform to manage student records, staff data, attendance,
              grades, and communication efficiently — secure and accessible for schools of all sizes.
            </p>
          </LoremTextContainer>

          <AdminRegisterLink to="/admin/dashboard">
            Admin Register
          </AdminRegisterLink>
        </SchoolInfo>

        <FeaturesWrapper>
          <FeatureCard>
            <h3>Role-Based Access</h3>
            <p>Admin, Teacher, and Student panels for streamlined operations.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Real-Time Data</h3>
            <p>Instant access to attendance, grades, and schedules.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Secure & Scalable</h3>
            <p>Built with privacy and performance in mind for growing institutions.</p>
          </FeatureCard>
        </FeaturesWrapper>
      </HomeContainer>

      <Footer>
        <FooterContent>
          <ContactInfo>
            <p><strong>Email:</strong> support@schoolportal.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </ContactInfo>
          <SocialIcons>
            <SocialIconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </SocialIconLink>
            <SocialIconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </SocialIconLink>
          </SocialIcons>
        </FooterContent>
      </Footer>
    </>
  );
};

export default Home;
