import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon/fa-icon.component';
import { Spacing, Color } from '@atomic/obj.constants';
import { fieldBorderCss, fieldCss, FieldProps } from '@atomic/obj.form/field.component.styled';

export const SelectWrapperStyled = styled.div<FieldProps>`
  ${fieldBorderCss}
  position: relative;
  padding: 0 ${Spacing.Small};
`;

export const SelectStyled = styled.select`
  appearance: none;
  border: 0;
  min-width: 100px;
  outline: none;
  ${fieldCss}
`;

export const SelectIconStyled = styled(FaIcon.ChevronDown)`
  position: absolute;
  top: ${Spacing.Medium};
  right: ${Spacing.Large};
  color: ${Color.GrayDark};
  pointer-events: none;
`;
