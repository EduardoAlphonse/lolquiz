import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ScreenContainer from '../src/components/ScreenContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import BiggerFrame from '../src/components/BiggerFrame';
import SmallerFrame from '../src/components/SmallerFrame';

export default function Home() {
  const [name, setName] = useState('');

  const router = useRouter();

  function submitForm(event) {
    event.preventDefault();
    if (name.length > 2 && name.length < 16) {
      router.push(`/quiz?name=${name}`);
    }
  }

  return (
    <ScreenContainer>
      <SmallerFrame>
        <h1>LOL QUIZ</h1>
        <form>
          <p>Escolha seu nome:</p>
          <p className='ps'>Necessário ter entre 3 e 15 caracteres.</p>
          <Input
            onChange={(event) => setName(event.target.value)}
            placeHolder='Ex.: LoLSage7'
            iconName='user'
          />
          <Button
            type='subimt'
            onClick={submitForm}
            disabled={name.length < 3 || name.length > 15}
          >
            JOGAR
          </Button>
        </form>
      </SmallerFrame>
      <BiggerFrame>
        Score frame
      </BiggerFrame>
    </ScreenContainer>
  );
}
