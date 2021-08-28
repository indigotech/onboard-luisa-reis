import React from 'react';
import ButtonArea from './components/button/button-area';
import TitleArea from './components/title/title-area';
import InputArea from './components/input/input-area';
import { Wrapper } from './components/wrapper/wrapper';

export const App: React.FC = () => {
  return (
    <Wrapper>
      <TitleArea text='Bem-vindo(a) à Taqtile!' />
      <InputArea name='E-mail' placeholder='Digite seu email ' />
      <InputArea name='Senha' type='password' placeholder='Digite sua senha ' />
      <ButtonArea title='entrar' />
    </Wrapper>
  );
};
