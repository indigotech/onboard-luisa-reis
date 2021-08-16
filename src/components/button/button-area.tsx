import React from 'react';

import { Button } from './Button';

interface ButtonProps {
  title: string;
}

export const ButtonArea: React.FC<ButtonProps> = (props) =>{
  return (
    <Button>{props.title}</Button>
  );
}
