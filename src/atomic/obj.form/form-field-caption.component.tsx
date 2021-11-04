import * as React from 'react';

import { InputCaption, InputCaptionError } from '../atm.typography';

import { ValidationError } from './validators';

export interface FormFieldCaptionProps {
  errors: ValidationError[];
  showAll: boolean;
  validationPlaceholder: string;
}

export const FormFieldCaption: React.FC<FormFieldCaptionProps> = (props) => {
  const wrap = props.errors.map((error: ValidationError, index: number) => (
    <InputCaptionError key={error.name + index}>{error.message}</InputCaptionError>
  ));

  return props.showAll ? (
    <div>{wrap}</div>
  ) : (
    <React.Fragment>
      {props.errors?.length > 0 ? (
        <InputCaptionError key={props.errors[0].name}>{props.errors[0].message}</InputCaptionError>
      ) : (
        props.validationPlaceholder && <InputCaption>{props.validationPlaceholder}</InputCaption>
      )}
    </React.Fragment>
  );
};
