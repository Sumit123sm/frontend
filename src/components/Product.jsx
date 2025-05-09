// Products.js
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

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 10px;
`;

const Products = () => {
  return (
    <Container>
      <Heading>Our Products</Heading>
      <ProductList>
        <ProductItem>📚 Student Information Management</ProductItem>
        <ProductItem>📆 Attendance & Timetable Scheduling</ProductItem>
        <ProductItem>🧾 Fee & Payment Management</ProductItem>
        <ProductItem>📊 Performance & Report Analysis</ProductItem>
        <ProductItem>📱 Parent-Teacher Communication Portal</ProductItem>
      </ProductList>
    </Container>
  );
};

export default Products;
