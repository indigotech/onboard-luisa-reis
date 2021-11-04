import * as React from 'react';

import {
  StepperCellBadgeStyled,
  StepperCellChecked,
  StepperCellNumberStyled,
  StepperCellStyled,
  StepperCellTextStyled,
} from './stepper-cell.component.style';

export type StepperStatus = 'past' | 'current' | 'future';

export interface StepperCellProps {
  number: number;
  text: string;
  status?: StepperStatus;
}

export const StepperCell: React.FC<StepperCellProps> = (props) => {
  return (
    <StepperCellStyled {...props}>
      <StepperCellBadgeStyled {...props}>
        <StepperCellChecked {...props} />
        <StepperCellNumberStyled {...props}>{props.number}</StepperCellNumberStyled>
      </StepperCellBadgeStyled>
      <StepperCellTextStyled {...props}>{props.text}</StepperCellTextStyled>
    </StepperCellStyled>
  );
};
