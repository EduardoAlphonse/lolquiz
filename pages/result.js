import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { theme } from '../db.json';

import SmallerFrame from '../src/components/SmallerFrame';
import Button from '../src/components/Button';
import SummaryItem from '../src/components/SummaryItem';

// eslint-disable-next-line import/no-cycle
import { QuizContext } from './quiz';

const Summary = styled.div`
  margin-top: 10px;
  & > p {
    margin: 15px 0;
  }
`;

function Result() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

  const { answers } = useContext(QuizContext);

  useEffect(() => {
    setUserAnswers(answers);
    setNumberOfCorrectAnswers(answers.filter((answer) => answer.correct).length);
  }, []);

  const router = useRouter();

  return (
    <SmallerFrame justify='start'>
      <h2>
        Você acertou
        {' '}
        <span style={{ color: theme.colors.primary.color }}>
          {numberOfCorrectAnswers}
        </span>
        {' '}
        {numberOfCorrectAnswers > 1 || numberOfCorrectAnswers === 0 ? 'perguntas' : 'pergunta'}
        !
      </h2>
      <p>Compartilhe com seus amigos:</p>
      <Button>
        Copiar link do quiz
      </Button>
      <Button>
        Crie o seu
      </Button>
      <Button
        color='red'
        onClick={() => router.push('/')}
      >
        Voltar ao início
      </Button>

      <Summary>
        <p>Resumo:</p>
        {
          userAnswers.map((answer) => (
            <SummaryItem
              key={`key_${answer.id}`}
              correct={answer.correct}
            >
              <p className='summary-title'>{answer.question}</p>
              <p className='summary-answer'>{answer.userAnswer}</p>
            </SummaryItem>
          ))
        }
      </Summary>
    </SmallerFrame>
  );
}

export default Result;
