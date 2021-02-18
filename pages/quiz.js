/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import db from '../db.json';

import Button from '../src/components/Button';
import ScreenContainer from '../src/components/ScreenContainer';
import SmallerFrame from '../src/components/SmallerFrame';
import BiggerFrame from '../src/components/BiggerFrame';
import Checkbox from '../src/components/Checkbox';
import ProgressBar from '../src/components/ProgressBar';
import Result from './result';

export const QuizContext = React.createContext({});

export default function QuizPage() {
  const [selected, setSelected] = useState('');
  const [actualQuestion, setActualQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    setAnswers([...answers, {
      id: answers.length,
      question: db.questions[actualQuestion].title,
      userAnswer: selected,
      correct: db.questions[actualQuestion].answer.toLowerCase() === selected.toLowerCase(),
    }]);

    if (actualQuestion === db.questions.length - 1) {
      setFinished(true);
    } else {
      setActualQuestion(actualQuestion + 1);
    }

    setSelected('');
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000 * 2);
  }, []);

  return (
    <ScreenContainer value={db.questions}>
      <QuizContext.Provider value={{ selected, finished, answers }}>
        {
          showResult
            ? (
              <Result />
            ) : (
              <SmallerFrame justify='start'>
                {
                  loading && (
                    <>
                      <h2>Carregando quiz...</h2>
                      <Player
                        src='https://assets3.lottiefiles.com/private_files/lf30_46kycmnm.json'
                        autoplay={loading}

                      />
                    </>
                  )
                }

                {
                  finished && (
                    <>
                      <h2>Parabéns, você finalizou o Quiz!</h2>
                      <Button
                        onClick={() => setShowResult(true)}
                      >
                        VER PONTUAÇÃO
                      </Button>
                    </>
                  )
                }

                {
                  !loading && !finished && (
                    <>
                      <h2>Pergunta {actualQuestion + 1} de {db.questions.length}:</h2>
                      <ProgressBar
                        actualQuestion={actualQuestion + 1}
                        numberOfQuestions={db.questions.length}
                      />
                      <p className='question'>{db.questions[actualQuestion].title}</p>
                      <form onSubmit={onSubmit}>
                        {
                          db.questions[actualQuestion].alternatives.map((alternative, index) => (
                            <Checkbox
                              // eslint-disable-next-line react/no-array-index-key
                              key={`${index}_${alternative}`}
                              id={`alternative_${index}`}
                              name='alternative'
                              value={alternative}
                              onChange={() => setSelected(alternative)}
                            />
                          ))
                        }
                        <Button
                          disabled={!selected}
                        >
                          {selected ? 'CONFIRMAR' : 'Escolha uma resposta'}
                        </Button>
                      </form>
                    </>
                  )
                }
              </SmallerFrame>
            )
        }
      </QuizContext.Provider>
      <BiggerFrame
        background={finished
          ? db.finalBg
          : db.questions[actualQuestion].image}
      />
    </ScreenContainer>
  );
}
