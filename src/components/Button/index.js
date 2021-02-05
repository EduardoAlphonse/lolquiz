// import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #9816D9;

  font-size: 1.25rem;
  font-weight: 500;
  color: #FFFFFF;
  
  border: none;
  outline: none;

  transition: all 0.2s ease;

  :disabled, :hover:disabled {
    background-color: ${({ theme }) => theme.colors.fadedFill}
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export default Button;
