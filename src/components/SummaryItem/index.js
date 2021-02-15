import styled, { css } from 'styled-components';

const StyledSummaryItem = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 15px;

  p {
    margin: 0;
    font-size: 1rem;
  }

  p:first-child {
    margin-bottom: 3px;
  }

  .summary-question {
    font-size: 0.8rem;
  }
  .summary-answer {
    font-size: 1.5rem;
    font-weight: 600;
    ${({ theme, correct }) => (
    correct
      ? css`color: ${theme.colors.green.color};`
      : css`color: ${theme.colors.red.color};`
  )};
  }

  border-width: 2px;
  border-style: solid;
  
  ${({ theme, correct }) => (
    correct
      ? css`border-color: ${theme.colors.green.color};`
      : css`border-color: ${theme.colors.red.color};`
  )};
`;

export default StyledSummaryItem;
