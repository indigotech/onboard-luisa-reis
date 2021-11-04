import styled, { css } from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Color } from '@atomic/obj.constants';

const size = 44;

export const StepperFieldStyled = styled.div`
  width: 60px;
`;

export interface StepperFieldSymbolProps {
  disabled?: boolean;
}

export const StepperFieldSymbolCss = css<StepperFieldSymbolProps>`
  line-height: ${size}px;
  width: ${size}px;
  color: ${(props) => (props.disabled ? Color.GrayLight : Color.Black)};
`;

export const StepperFieldMinusStyled = styled(FaIcon.StepperMinus)`
  ${StepperFieldSymbolCss}
`;

export const StepperFieldPlusStyled = styled(FaIcon.StepperPlus)`
  ${StepperFieldSymbolCss}
`;
