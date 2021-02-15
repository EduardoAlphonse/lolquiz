import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-cycle
import { QuizContext } from '../../../pages/quiz';

const StyledCheckbox = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.text.color};
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 20px;

  input {
    display: none;
  }

  label {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.color};
    font-weight: 600;

    padding: 15px;
    width: 100%;
    display: block;

    transition: all 0.2s ease;

    :hover {
      cursor: pointer;
    }
  }

  input:checked + label {
    background-color: ${({ theme }) => theme.colors.text.color};
    color: #FFFFFF;
  }
`;

function Checkbox({
  id, value, name, onChange,
}) {
  const { selected, finished } = useContext(QuizContext);

  function handleChange(onChangeReceivedFunction) {
    if (finished) {
      return;
    }
    onChangeReceivedFunction();
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
        {value}
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
};
