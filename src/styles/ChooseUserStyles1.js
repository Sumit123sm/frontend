import styled from 'styled-components';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem;
  gap: 2rem;
  background: #f4f7fc;
  min-height: 90vh;
`;

export const UserCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 280px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h2`
  color: #002366;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

export const RoleDescription = styled.p`
  color: #555;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const RoleButton = styled.button`
  background-color: #0047ab;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003080;
  }
`;
