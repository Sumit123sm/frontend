// styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = "#0077b6";
const accentColor = "#00b4d8";
const buttonColor = "#ff6b6b";
const backgroundGradient = "linear-gradient(135deg, #caf0f8, #90e0ef)";
const darkText = "#03045e";
const lightText = "#ffffff";
export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /* Add this to prevent overflow */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Allows wrapping on small screens */
  padding: 18px 24px;
  background-color: #0077b6;
  color: white;
  z-index: 1000;
`;


export const Logo = styled.img`
  width: 50px;
  height: auto;
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin-right: 20px;
  color: ${lightText};
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: ${accentColor};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Prevent overflow */
  gap: 10px;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    margin: 10px 0 0 0;
    justify-content: center;
  }
`;

export const LoginButton = styled.button`
  background-color: ${buttonColor};
  color: ${lightText};
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e85d5d;
  }
`;

export const GuestButton = styled.button`
  background: transparent;
  border: 2px solid ${buttonColor};
  color: ${buttonColor};
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${buttonColor};
    color: ${lightText};
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${backgroundGradient};
  min-height: 100vh;
  padding-top: 100px;
`;

export const SchoolInfo = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${darkText};
  margin-bottom: 16px;
`;

export const LoremTextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  color: #333;
  text-align: justify;
  padding: 0 20px;
`;

export const AdminRegisterLink = styled(Link)`
  background-color: ${accentColor};
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 24px;
  margin-top: 20px;
  display: inline-block;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0096c7;
  }
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
`;

export const FeatureCard = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  width: 260px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    color: ${primaryColor};
  }

  p {
    color: #555;
    font-size: 0.95rem;
  }
`;

export const Footer = styled.footer`
  background-color: ${darkText};
  color: ${lightText};
  padding: 2rem 1rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ContactInfo = styled.div`
  font-size: 0.95rem;

  p {
    margin: 0.3rem 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIconLink = styled.a`
  color: ${lightText};
  transition: color 0.3s ease;

  &:hover {
    color: ${accentColor};
  }
`;

