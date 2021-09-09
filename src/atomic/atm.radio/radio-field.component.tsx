import * as React from 'react';

import { FormFieldContext, FormFieldContextState } from '@atomic/obj.form';

import {
  RadioCheckedStyled,
  RadioFieldInputStyled,
  RadioFieldLabelStyled,
  RadioFieldStyled,
  RadioUncheckedStyled,
} from './radio-field.component.style';

interface RadioFieldProps {
  id: any;
  onClick?: (id: any) => void;
  disabled?: boolean;
  expanded?: boolean;
  mb?: boolean;
}

const DefaultRadioBullet = (props: any) => (props.checked ? <RadioCheckedStyled /> : <RadioUncheckedStyled />);

export const RadioField: React.FC<RadioFieldProps> = (props) => {
  const formFieldConsumer = React.useContext<FormFieldContextState>(FormFieldContext);

  const handlePress = () => {
    props.onClick?.(props.id);

    formFieldConsumer.onValueChange(props.id, null);
  };

  if (!formFieldConsumer) {
    throw new Error('<RadioField /> must be wrapped with a <Form.Field> tag');
  }

  return (
    <RadioFieldStyled mb={props.mb} expanded={props.expanded} onClick={handlePress}>
      <RadioFieldInputStyled
        type="radio"
        name={formFieldConsumer.name}
        id={formFieldConsumer.name + '_' + props.id}
        value={props.id}
      />
      <DefaultRadioBullet checked={formFieldConsumer.value === props.id} />
      <RadioFieldLabelStyled htmlFor={formFieldConsumer.name + '_' + props.id} expanded={props.expanded}>
        {props.children}
      </RadioFieldLabelStyled>
    </RadioFieldStyled>
  );
};
