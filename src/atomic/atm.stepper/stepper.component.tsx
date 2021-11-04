import * as React from 'react';

import { StepperStatus } from './stepper-cell.component';
import { StepperStyled } from './stepper.component.style';

export interface StepperProps {
  step: number;
}

export const Stepper: React.FC<StepperProps> = (props) => {
  const status = (step: number, currentStep: number): StepperStatus => {
    if (step < currentStep) {
      return 'past';
    } else if (step === currentStep) {
      return 'current';
    } else {
      return 'future';
    }
  };

  const itens = React.Children.map(props.children, (child: any, i: number) => {
    const key = 'ProgressCell_' + i;
    return React.cloneElement(child, {
      key,
      status: status(i + 1, props.step),
    });
  });

  return <StepperStyled>{itens}</StepperStyled>;
};
