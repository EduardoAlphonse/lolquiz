// import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme, color }) => (
    color
      ? theme.colors[color].color
      : theme.colors.primary.color
  )};
  box-shadow: ${({ theme, color }) => (
    color
      ? `0px 12px 18px rgba(${theme.colors[color].shadow.join(',')})`
      // : '0 0 0 rgba(0, 0, 0, 0)'
      : `0 12px 18px rgba(${theme.colors.primary.shadow.join(',')})`
  )};

  font-size: 1.25rem;
  font-weight: 600;
  color: #FFFFFF;
  
  border: none;
  outline: none;

  transition: background-color 0.2s ease;

  :disabled, :hover:disabled {
    background-color: ${({ theme }) => theme.colors.fadedFill};
    color: ${({ theme }) => theme.colors.text.faded};
    box-shadow: none;
  }

  :hover {
    background-color: ${({ theme, color }) => (
    color
      ? theme.colors[color].dark
      : theme.colors.primary.dark
  )};
  }

  :enabled {
    cursor: pointer;
  }
`;

export default Button;
