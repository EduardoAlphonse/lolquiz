import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import copyToClipboard from 'web-copy-to-clipboard';
import { quizUrl, theme } from '../db.json';

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
  const [quizUrlCopied, setQuizUrlCopied] = useState(false);

  const { answers } = useContext(QuizContext);

  function copyQuizLinkToClipboard() {
    copyToClipboard(quizUrl);
    setQuizUrlCopied(true);
    setTimeout(() => {
      setQuizUrlCopied(false);
    }, 3000);
  }

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
      <Button
        onClick={copyQuizLinkToClipboard}
      >
        {
          quizUrlCopied
            ? <i>LINK COPIADO!</i>
            : 'Copiar link do quiz'
        }
      </Button>
      {/* v FEATURE TO BE IMPLEMENTED LATER v */}
      {/* <Button>
        Crie o seu
      </Button> */}
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
