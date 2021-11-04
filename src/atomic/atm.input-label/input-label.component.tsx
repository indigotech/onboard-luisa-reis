import * as React from 'react';

import { FormFieldContext } from '@atomic/obj.form';

import { InputLabelChildren, InputLabelStyled, InputLabelWrapperStyled } from './input-label.component.style';

export interface InputLabelProps {
  label: string;
}

export const InputLabel: React.FC<InputLabelProps> = (props) => {
  const context = React.useContext(FormFieldContext);

  if (!context) {
    throw new Error('InputLabel must be within a FormFieldContext provider');
  }

  return (
    <InputLabelStyled>
      <InputLabelChildren>{props.children}</InputLabelChildren>
      <InputLabelWrapperStyled filled={context.value && context.value !== ''}>{props.label}</InputLabelWrapperStyled>
    </InputLabelStyled>
  );
};
