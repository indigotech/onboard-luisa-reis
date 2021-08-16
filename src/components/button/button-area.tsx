import React, { Component } from "react";
import Button from "./button.component"

interface ButtonProps{
  title: string
}

const ButtonArea: React.FC<ButtonProps> = (props) =>{
  const HandleClick = (email:any)=> {

  }
  return (
  <Button >{props.title}</Button>
  );
  }


export default ButtonArea;