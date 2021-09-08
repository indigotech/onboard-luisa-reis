import React, { Component } from "react"
import Title from './title.component'

interface TextProps{
  text: string
}

const TitleArea: React.FC<TextProps> = (props) =>{
  return (
    <Title>
      {props.text}
    </Title>
  );
}
  
export default TitleArea;