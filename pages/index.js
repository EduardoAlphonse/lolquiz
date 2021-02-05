import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
// import db from '../db.json';

import ScreenContainer from '../src/components/ScreenContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const LoginFrame = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 40px;

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

const ScoreFrame = styled.div`
  display: flex;
  width: 67%;
  justify-content: center;
  align-items: center;
  background-color: #210231;
`;

export default function Home() {
  const [name, setName] = useState('');

  const router = useRouter();

  function submitForm(event) {
    event.preventDefault();
    if (name.length > 2 && name.length < 11) {
      router.push(`/quiz?name=${name}`);
    }
  }

  return (
    <ScreenContainer>
      <LoginFrame>
        <span className='title'>LOL QUIZ</span>
        <form>
          <p>Escolha seu nome:</p>
          <p className='ps'>Necessário ter entre 3 e 10 caracteres.</p>
          <Input
            onChange={(event) => setName(event.target.value)}
            placeHolder='Ex.: LoLSage7'
            iconName='user'
          />
          <Button
            onClick={submitForm}
            disabled={name.length < 3 || name.length > 10}
          >
            JOGAR
          </Button>
        </form>
      </LoginFrame>
      <ScoreFrame>
        Score frame
      </ScoreFrame>
    </ScreenContainer>
  );
}
