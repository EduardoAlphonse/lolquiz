import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledProgressBar = styled.div`
  height: 10px;
  border: 1px solid #2E2E2E;
  border-radius: 10px;
`;

const Progress = styled.div`
  width: ${({ completed }) => `${completed}%`};
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.textColor};

  transition: width 0.2s ease;
`;

function ProgressBar({ actualQuestion, numberOfQuestions }) {
  const completed = (actualQuestion / numberOfQuestions) * 100;
  return (
    <StyledProgressBar>
      <Progress completed={completed} />
    </StyledProgressBar>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  actualQuestion: PropTypes.number.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
};
