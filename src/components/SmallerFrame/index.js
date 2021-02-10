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
  padding: 30px 40px;

  .title {
    @media screen and (max-width: 1400px) {
      margin-bottom: 50px;
    }
    
    @media screen and (min-width: 1401px) {
      margin-bottom: 100px;
    }

    font-size: 2rem;
    font-weight: 600;
  }

  .question {
    margin: 30px 0;
  }

  form {
    position: relative;
    width: 100%;

    p {
      margin-bottom: 10px;
    }

  }

  button {
    margin-top: 20px;
  }
`;

export default SmallerFrame;
