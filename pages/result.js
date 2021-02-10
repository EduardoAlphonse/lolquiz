import React from 'react';
import { useRouter } from 'next/router';

import ScreenContainer from '../src/components/ScreenContainer';
import SmallerFrame from '../src/components/SmallerFrame';
import BiggerFrame from '../src/components/BiggerFrame';
import Button from '../src/components/Button';

function Result() {
  const { correctAnswers } = useRouter().query;
  console.log('correct answers', correctAnswers);

  return (
    <ScreenContainer>
      <SmallerFrame justify='start'>
        <h2>
          Você acertou
          {' '}
          {correctAnswers}
          {' '}
          {correctAnswers > 1 ? 'perguntas' : 'pergunta'}
          !
        </h2>
        <Button>
          Copiar link do quiz
        </Button>
        <Button>
          Crie seu quiz
        </Button>
        <Button color='red'>
          Voltar ao início
        </Button>
      </SmallerFrame>
      <BiggerFrame />
    </ScreenContainer>
  );
}

export default Result;
