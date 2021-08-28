import React from 'react';

import { Button } from './Button';

interface ButtonProps {
  title: string;
}

const ButtonArea: React.FC<ButtonProps> = props => {
  return <Button>{props.title}</Button>;
};

export default ButtonArea;
