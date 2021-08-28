import React, { InputHTMLAttributes } from 'react';

import { InputStyled } from './input.style';
import Title from '../title';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputArea: React.FC<InputProps> = props => {
  return (
    <form>
      <label>
        <Title>{props.name}</Title>
        <InputStyled {...props} />
      </label>
    </form>
  );
};

export default InputArea;
