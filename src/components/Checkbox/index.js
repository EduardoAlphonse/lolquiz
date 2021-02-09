import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-cycle
import { QuizContext } from '../../../pages/quiz';

// const correctStyle = css`
//   background-color: ${({ theme }) => theme.colors.success};
//   color: #FFFFFF;
// `;

// const wrongStyle = css`
//   background-color: ${({ theme }) => theme.colors.success};
//   color: #FFFFFF;
// `;

const StyledCheckbox = styled.div`
  margin-bottom: 20px;

  border: 2px solid ${({ theme }) => theme.colors.textColor};
  box-sizing: border-box;
  border-radius: 5px;

  input {
    display: none;
  }

  label {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 500;

    padding: 15px;
    width: 100%;
    display: block;

    transition: all 0.2s ease;

    :hover {
      cursor: pointer;
    }
  }

  input:checked + label {
    background-color: ${({ theme }) => theme.colors.textColor};
    color: #FFFFFF;
  }
`;

function Checkbox({
  id, value, name, onChange, children,
}) {
  const { selected, finished } = useContext(QuizContext);

  function handleChange(onChange) {
    if (finished) {
      return;
    }
    onChange();
  }

  return (
    <StyledCheckbox>
      <input
        type='radio'
        id={id}
        value={value}
        name={name}
        onChange={() => handleChange(onChange)}
        checked={selected === value}
      />
      <label htmlFor={id}>
        {children}
      </label>
    </StyledCheckbox>
  );
}

export default Checkbox;

Checkbox.defaultProps = {
  onChange: () => { },
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};
