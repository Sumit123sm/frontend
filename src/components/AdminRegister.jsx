import React, { useState } from 'react';
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminRegisterStyles';
import axios from 'axios';

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post('http://localhost:4000/api/admin/signup', { email, password });
      if (response.status === 200) {
        window.location.href = '/admin-signIn';
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    console.log('Registration data:', { email, password });
    
  };

  return (
    <AdminRegisterContainer>
      <h2>Admin Register</h2>
      {/* Attach onSubmit to form */}
      <FormContainer as="form" >
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit"  onClick={handleSignIn}>Register</SubmitButton>
      </FormContainer>
    </AdminRegisterContainer>
  );
};

export default AdminRegister;
