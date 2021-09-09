import * as React from 'react';

import {
  FieldErrorCaptionStyled,
  FieldErrorIconStyled,
  FieldHelperCaptionStyled,
} from './field-caption.component.style';
import { ValidationError } from './validators';

export interface FieldCaptionProps {
  errors?: ValidationError[];
  showAll?: boolean;
  validationPlaceholder?: string;
}

export const FieldCaption: React.FC<FieldCaptionProps> = (props) => {
  const wrap = props.errors.map((error: ValidationError, index: number) => (
    <div key={error.name + index}>
      <FieldErrorCaptionStyled>{error.message}</FieldErrorCaptionStyled>
    </div>
  ));

  if (props.showAll) {
    return <div>{wrap}</div>;
  } else {
    if (props.errors?.length > 0) {
      return (
        <FieldErrorCaptionStyled key={props.errors[0].name}>
          {props.errors[0].message}
          <FieldErrorIconStyled />
        </FieldErrorCaptionStyled>
      );
    } else {
      return <FieldHelperCaptionStyled>{props.validationPlaceholder}</FieldHelperCaptionStyled>;
    }
  }
};
