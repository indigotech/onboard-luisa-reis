import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { InputValue } from '@atomic/atm.typography';
import { Color, Spacing } from '@atomic/obj.constants';
import { highlightStyle } from '@atomic/obj.mixin';

const radioSize = 24;

interface RadioFieldStyledProps {
  expanded: boolean;
  mb?: boolean;
}

export const RadioFieldStyled = styled.span<RadioFieldStyledProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${(props) => (props.mb ? Spacing.Medium : 0)};
  ${(props) => (props.expanded ? 'flex: 1;' : undefined)}
  & ~ * {
    margin-top: ${Spacing.Small};
  }
`;

export const RadioFieldLabelStyled = styled(InputValue)<RadioFieldStyledProps>`
  line-height: ${radioSize}px !important;
  padding-left: 36px;
  cursor: pointer;
  ${(props) => (props.expanded ? 'flex: 1;' : undefined)}
`;

export const RadioFieldContentStyled = styled.div`
  margin-left: ${Spacing.XLarge};
  ${highlightStyle};
`;

export const RadioCheckedStyled = styled(FaIcon.DotCircle).attrs({ size: 'lg' })`
  position: absolute;
  color: ${Color.Accessory};
`;

export const RadioUncheckedStyled = styled(FaIcon.Circle).attrs({ size: 'lg' })`
  position: absolute;
  color: ${Color.Black};
`;

export const RadioFieldInputStyled = styled.input`
  display: none;
`;
