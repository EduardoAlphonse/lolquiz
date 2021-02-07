import styled from 'styled-components';

const position = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

const SmallerFrame = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  justify-content: ${({ justify = 'center' }) => position[justify]};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 70px 40px 70px;

  font-size: 1.25rem;

  .title {
    @media (max-width: 1400px) {
      margin-bottom: 50px;
    }
    
    @media (min-width: 1401px) {
      margin-bottom: 100px;
    }

    font-size: 2rem;
    font-weight: 600;
  }

  form {
    position: relative;
    width: 100%;

    p {
      margin-bottom: 10px;
    }

    .ps {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.primary}
    }
  }
`;

export default SmallerFrame;
