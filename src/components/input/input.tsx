import React, {
  InputHTMLAttributes,
  Component,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
} from "react";
import ButtonArea from "../button/button-area";
import Input from "./input.component";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  validators?: any[];
}

const InputArea: React.FC<InputProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (props.validators) {
      for (const validator of props.validators) {
        validator(inputValue);
      }
    }
  }, [inputValue, props.validators]);

  const HandleChange = (event: any) => {
    setInputValue(event.target.value);
    console.log(event);
  };

  return (
    <label>
      <Input {...props} value={inputValue} onChange={HandleChange} />
    </label>
  );
};

export default InputArea;
