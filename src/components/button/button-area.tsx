import React, { Component } from "react";
import Button from "./button.component"

interface ButtonProps{
  // title: string,
  disabled: any
}

const ButtonArea: React.FC<ButtonProps> = (props) =>{

  
  return (
  <Button  >entrar</Button>
  );
  }


export default ButtonArea;