/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import db from '../db.json';

import Button from '../src/components/Button';
import ScreenContainer from '../src/components/ScreenContainer';
import SmallerFrame from '../src/components/SmallerFrame';
import BiggerFrame from '../src/components/BiggerFrame';
import Checkbox from '../src/components/Checkbox';

function Ticker() {
  const [tick, setTick] = useState(3);

  setInterval(() => {
    setTick(tick - 1);
  }, 1000);

  return (
    <p>
      Próxima pergunta em
      {' '}
      {tick}
      ...
    </p>
  );
}

export default function QuizPage() {
  const [choosen, setChoosen] = useState(0);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showTicker, setShowTicker] = useState(false);
  const [showEndOfQuizMessage, setShowEndOfQuizMessage] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    if (db.questions[actualQuestion].answer + 1 === choosen) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setChoosen(0);

    if (actualQuestion + 1 < db.questions.length) {
      setShowTicker(true);
      setTimeout(() => {
        setActualQuestion(actualQuestion + 1);
        setShowTicker(false);
      }, 1000 * 3);
    } else {
      setShowEndOfQuizMessage(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000 * 2);
  }, []);

  return (
    <ScreenContainer value={db.questions}>
      <SmallerFrame justify='start'>
        {
          loading
            ? (
              <h2>Carregando questionário...</h2>
            ) : (
              <>
                <h2>Pergunta X de Y:</h2>
                <p>{db.questions[actualQuestion].title}</p>
                <form onSubmit={onSubmit}>
                  {
                    db.questions[actualQuestion].alternatives.map((alternative, index) => (
                      <Checkbox
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        id={`alternative_${index}`}
                        name='alternative'
                        value={alternative}
                        onChange={() => setChoosen(index + 1)}
                      >
                        {alternative}
                      </Checkbox>
                    ))
                  }
                  <Button
                    disabled={!choosen}
                  >
                    {choosen ? 'CONFIRMAR' : 'Escolha uma resposta'}
                  </Button>
                </form>
                {
                  showTicker && <Ticker />
                }
                {
                  showEndOfQuizMessage && (
                  <p>
                    Fim das perguntas!
                    {'\n'}
                    Calculando pontuação...
                  </p>
                  )
                }
              </>
            )
        }
      </SmallerFrame>
      <BiggerFrame
        background={db.questions[actualQuestion].image}
      />
    </ScreenContainer>
  );
}
