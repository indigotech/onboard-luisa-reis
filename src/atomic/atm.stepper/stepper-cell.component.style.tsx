import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Body } from '@atomic/atm.typography';
import { Color, FontFamily, FontSize, FontWeight, Spacing } from '@atomic/obj.constants';

import { StepperCellProps } from './stepper-cell.component';

interface StepperStatusStyle {
  lineColor: string;
  badgeBorderColor: string;
  badgeBackgroundColor: string;
  showNumber?: boolean;
  numberColor: string;
  textColor: string;
}

const statusStyle: { [status: string]: StepperStatusStyle } = {
  past: {
    lineColor: Color.Success,
    badgeBorderColor: Color.Success,
    badgeBackgroundColor: Color.Success,
    showNumber: false,
    numberColor: Color.White,
    textColor: Color.Gray,
  },
  current: {
    lineColor: Color.GrayLight,
    badgeBorderColor: Color.Primary,
    badgeBackgroundColor: Color.Primary,
    showNumber: true,
    numberColor: Color.White,
    textColor: Color.Black,
  },
  future: {
    lineColor: Color.GrayLight,
    badgeBorderColor: Color.Primary,
    badgeBackgroundColor: Color.White,
    showNumber: true,
    numberColor: Color.Primary,
    textColor: Color.Gray,
  },
};

export const StepperCellStyled = styled.div<StepperCellProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + ::before {
    position: relative;
    top: 18px;
    left: -50%;
    z-index: 0;
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: ${(props) => statusStyle[props.status].lineColor};
    content: '';
  }
`;

export const StepperCellBadgeStyled = styled.div<StepperCellProps>`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border-width: 2px;
  border-color: ${(props) => statusStyle[props.status].badgeBorderColor};
  background-color: ${(props) => statusStyle[props.status].badgeBackgroundColor};
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 1;
`;

export const StepperCellChecked = styled(FaIcon.Check)<StepperCellProps>`
  color: ${Color.White};
  display: ${(props) => (statusStyle[props.status].showNumber ? 'none' : 'block')} !important;
  align-self: center;
  font-size: 14px;
`;

export const StepperCellNumberStyled = styled(Body)<StepperCellProps>`
  position: relative;
  display: ${(props) => (statusStyle[props.status].showNumber ? 'block' : 'none')};
  text-align: center;
  color: ${(props) => statusStyle[props.status].numberColor};
`;

export const StepperCellTextStyled = styled.label<StepperCellProps>`
  text-align: center;
  color: ${(props) => statusStyle[props.status].textColor};
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  margin-top: ${Spacing.Small};
`;
