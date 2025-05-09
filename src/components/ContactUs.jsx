// ContactUs.js
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

const ContactDetails = styled.div`
  margin-top: 1rem;
  font-size: 1.1rem;
`;

const ContactUs = () => {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Paragraph>
        We'd love to hear from you! Whether you have a question about features, pricing, or anything else,
        our team is ready to answer all your questions.
      </Paragraph>
      <ContactDetails>
        📍 Address: 123 School Lane, Education City, India<br />
        📧 Email: support@schoolms.com<br />
        📞 Phone: +91-9876543210
      </ContactDetails>
    </Container>
  );
};

export default ContactUs;
