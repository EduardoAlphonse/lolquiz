import styled from 'styled-components';

const BiggerFrame = styled.div`
  display: flex;
  width: 67%;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => (background
    ? `url(${background}) center/cover no-repeat`
    : '#210231')};
`;

export default BiggerFrame;
