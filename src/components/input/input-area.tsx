import React, { InputHTMLAttributes, Component } from "react"
import Input from "./Input"
import InputTitle from "./input-title"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string
}

const InputArea: React.FC<InputProps> = (props) =>{
  return (
    <form>
      <label>
        <InputTitle>{props.name}</InputTitle>
        <Input {...props} />
      </label>
    </form>
  );
} 

export default InputArea;