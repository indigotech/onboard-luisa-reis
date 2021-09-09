import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { InputValue } from '@atomic/atm.typography';
import { Color, Spacing } from '@atomic/obj.constants';
import { highlightStyle } from '@atomic/obj.mixin';

export const checkboxHeight = 24;
export const marginBetweenCheckboxItems = Spacing.XSmall;

export interface CheckboxStyledProps {
  disabled?: boolean;
}

export const CheckboxFieldStyled = styled.div<CheckboxStyledProps>`
  position: relative;
  pointer-events: ${(props: CheckboxStyledProps) => (props.disabled ? 'none' : 'auto')};
  cursor: pointer;
  & ~ * {
    margin-top: ${marginBetweenCheckboxItems};
  }
`;

export const CheckboxFieldTextStyled = styled(InputValue)`
  padding-left: ${Spacing.XLarge};
  line-height: ${checkboxHeight}px;
  z-index: 2;
  ${highlightStyle};
`;

export const CheckboxCheckedStyled = styled(FaIcon.CheckSquare)<CheckboxStyledProps>`
  position: absolute;
  font-size: ${checkboxHeight}px !important;
  color: ${(props: CheckboxStyledProps) => (props.disabled ? Color.GrayLight : Color.Primary)};
  z-index: 1;
  opacity: 0;
`;

export const CheckboxUncheckedStyled = styled(FaIcon.Square)<CheckboxStyledProps>`
  position: absolute;
  font-size: ${checkboxHeight}px !important;
  color: ${(props: CheckboxStyledProps) => (props.disabled ? Color.GrayLight : Color.Black)};
  z-index: 0;
  opacity: 1;
`;

export const CheckboxFieldBulletStyled = styled.input`
  display: none;
  &:checked + ${CheckboxCheckedStyled} {
    opacity: 1;
    + ${CheckboxUncheckedStyled} {
      opacity: 0;
    }
  }
`;
