import React from 'react';
import { InputStyled } from './input.style';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, ...rest }) => {
  return (
    <form>
      <InputStyled id={name} name={name} {...rest} />
    </form>
  );
};
