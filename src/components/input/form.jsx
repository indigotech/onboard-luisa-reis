import React from "react";
import Input from './input.component'


export const FormField = ({name, ...rest}) => {
  return (
    <form>
      <Input id={name} name={name} {...rest}/>
    </form>
  );
}