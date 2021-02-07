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

  transition: background-color 0.2s ease;

  :disabled, :hover:disabled {
    background-color: ${({ theme }) => theme.colors.fadedFill};
    color: ${({ theme }) => theme.colors.textColor}
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  :enabled {
    cursor: pointer;
  }
`;

export default Button;
