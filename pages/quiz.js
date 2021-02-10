/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import db from '../db.json';

import Button from '../src/components/Button';
import ScreenContainer from '../src/components/ScreenContainer';
import SmallerFrame from '../src/components/SmallerFrame';
import BiggerFrame from '../src/components/BiggerFrame';
// eslint-disable-next-line import/no-cycle
import Checkbox from '../src/components/Checkbox';
import ProgressBar from '../src/components/ProgressBar';

export const QuizContext = React.createContext();

export default function QuizPage() {
  const [selected, setSelected] = useState('');
  const [actualQuestion, setActualQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [showEndOfQuizMessage, setShowEndOfQuizMessage] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    if (db.questions[actualQuestion].answer.toLowerCase() === selected.toLowerCase()) {
      setCorrectAnswers(correctAnswers + 1);
      console.log('acertou');
    } else {
      console.log('errou')
    }

    if (actualQuestion + 1 === db.questions.length) {
      setShowEndOfQuizMessage(true);
      setFinished(true);
    } else {
      setActualQuestion(actualQuestion + 1);
    }

    setSelected('');
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000 * 0.5);
  }, []);

  return (
    <ScreenContainer value={db.questions}>
      <QuizContext.Provider value={{ selected, finished }}>
        <SmallerFrame justify='start'>
          {
            loading
              ? (
                <h2>Carregando questionário...</h2>
              ) : (
                <>
                  <h2>Pergunta {actualQuestion + 1} de {db.questions.length}:</h2>
                  <ProgressBar
                    actualQuestion={actualQuestion + 1}
                    numberOfQuestions={db.questions.length}
                  />
                  <p>{db.questions[actualQuestion].title}</p>
                  <form onSubmit={onSubmit}>
                    {
                      db.questions[actualQuestion].alternatives.map((alternative, index) => (
                        <Checkbox
                          key={index}
                          alternativeNumber={index}
                          id={`alternative_${index}`}
                          name='alternative'
                          value={alternative}
                          onChange={() => setSelected(alternative)}
                        >
                          {alternative}
                        </Checkbox>
                      ))
                    }
                    <Button
                      disabled={!selected}
                    >
                      {selected ? 'CONFIRMAR' : 'Escolha uma resposta'}
                    </Button>
                  </form>
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
      </QuizContext.Provider>
      <BiggerFrame
        background={db.questions[actualQuestion].image}
      />
    </ScreenContainer>
  );
}
