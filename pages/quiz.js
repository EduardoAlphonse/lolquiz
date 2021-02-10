/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

  const router = useRouter();

  function onSubmit(event) {
    event.preventDefault();

    if (db.questions[actualQuestion].answer.toLowerCase() === selected.toLowerCase()) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (actualQuestion === db.questions.length - 1) {
      setFinished(true);
    } else {
      setActualQuestion(actualQuestion + 1);
    }

    setSelected('');
  }

  function seeScore() {
    router.push(`/result?correctAnswers=${correctAnswers}`);
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
            loading && <h2>Carregando questionário...</h2>
          }

          {
            finished && (
              <>
                <h2>Parabéns, você finalizou o Quiz!</h2>
                <Button
                  onClick={seeScore}
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
      </QuizContext.Provider>
      <BiggerFrame
        background={finished
          ? 'https://wallpapercave.com/wp/wp2154088.jpg'
          : db.questions[actualQuestion].image}
      />
    </ScreenContainer>
  );
}
