import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;

  color: #FFFFFF;
  background-color: transparent;
  border: 1px solid #3B426D;
  border-radius: 4px;

  font-size: 1rem;
  margin-top: 24px;
  outline: none;

  &:focus {
    border-color: #7A81AF;
  }
`;

function Input({ placeholder, onChange, ...props }) {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
