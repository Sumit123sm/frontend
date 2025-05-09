// AboutUs.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <Container>
      <Heading>About Us</Heading>
      <Paragraph>
        Our School Management System is designed to streamline and simplify the educational administration process. 
        We aim to bridge the gap between teachers, students, and parents through a robust, user-friendly platform.
        Our mission is to empower schools with technology to foster better learning environments.
      </Paragraph>
    </Container>
  );
};

export default AboutUs;
