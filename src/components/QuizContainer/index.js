import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

function QuizContainer({ children }) {
  return (
    <StyledQuizContainer>
      {children}
    </StyledQuizContainer>
  );
}

QuizContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuizContainer;
