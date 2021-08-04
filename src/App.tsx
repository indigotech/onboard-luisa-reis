import React from 'react';
import './App.css';
import InputEmail from './components/inputEmail/InputEmail'
import Button from './components/button/button'
import Title from './components/title/title';
import InputSenha from './components/inputSenha';

function App() {
  return (
    <div className="App">
      <Title/>
      <InputEmail/>
      <InputSenha/>
      <Button/>
    </div>
  );
}

export default App;
