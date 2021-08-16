import React from 'react';
import { TitleStyled } from './title.component';

interface TextProps {
  text: string;
}

export const TitleArea: React.FC<TextProps> = props => {
  return <TitleStyled>{props.text}</TitleStyled>;
};
