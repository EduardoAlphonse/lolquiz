import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const [name, setName] = useState('');

  const router = useRouter();

  function submitForm(event) {
    event.preventDefault();
    if (name) {
      router.push(`/quiz?name=${name}`);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={submitForm}>
              <Input
                placeholder='Escolha seu nome para jogar'
                onChange={(event) => setName(event.target.value)}
                value={name}
                name={name}
              />
              <Button type='submit'>
                JOGAR
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/EduardoAlphonse' />
    </QuizBackground>
  );
}
