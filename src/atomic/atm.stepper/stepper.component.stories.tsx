import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { StepperCell } from './stepper-cell.component';
import { Stepper as StepperComponent, StepperProps } from './stepper.component';

export default {
  title: 'Atomic/Atoms/Stepper',
  component: StepperComponent,
  argTypes: {
    step: {
      control: {
        type: 'number',
        min: 1,
        max: 4,
        step: 1,
      },
    },
  },
} as Meta;

export const Stepper: React.FC<StepperProps> = (props) => {
  return (
    <StepperComponent {...props}>
      <StepperCell number={1} text="Passo 1" />
      <StepperCell number={2} text="Passo 2" />
      <StepperCell number={3} text="Passo 3" />
      <StepperCell number={4} text="Passo 4" />
    </StepperComponent>
  );
};
