import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

const StyledInput = styled.div`
  position: relative;

  input {
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.fadedFill};

    width: 100%;
    padding: 15px;
    padding-left: ${({ iconName }) => (iconName ? '50px' : '15px')};

    background-color: transparent;
    outline: none;
    font-size: 1.25rem;
    font-weight: 600;

    transition: all 0.2s ease;

    :focus {
      border-color: ${({ theme }) => theme.colors.primary.color}
    }
  }

  input + div {
    position: absolute !important;
    top: 15px;
    left: 15px;
  }
`;

function Input({ onChange, placeHolder, iconName }) {
  return (
    <StyledInput
      iconName={iconName}
    >
      <input
        onChange={onChange}
        placeholder={placeHolder}
      />
      {
        iconName && (
          <Image
            src={`/icons/${iconName}.svg`}
            width={20}
            height={20}
            className='icon'
          />
        )
      }
    </StyledInput>
  );
}

export default Input;

Input.defaultProps = {
  placeHolder: '',
  iconName: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  iconName: PropTypes.string,
};
