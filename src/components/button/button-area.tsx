import React from 'react';

interface ButtonProps {
  title: string;
}

export const ButtonArea: React.FC<ButtonProps> = (props) =>{
  return (
    <button>{props.title}</button>
  );
}
