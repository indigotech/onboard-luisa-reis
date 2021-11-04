import { css } from 'styled-components';

import { InputDisabledCss, InputValueCss } from '../atm.typography';
import { Border, Breakpoint, Color, FieldHeight, FontFamily, FontSize, Spacing } from '../obj.constants';

export interface FieldProps {
  invalid?: boolean;
  disabled?: boolean;
}

export const fieldBorderCss = css<FieldProps>`
  border-radius: ${Border.Radius};
  overflow: hidden;
  border: ${Border.Width} solid;
  border-color: ${(props) => (props.invalid ? Color.Alert : Color.GrayLight)};

  :focus {
    border-color: ${Color.Primary};
    /* Box-shadow instead of border-width, so the text won't dance */
    box-shadow: inset 0 0 0 ${Border.Width} ${Color.Primary};
  }

  @media all and (min-width: ${Breakpoint.md}em) {
    :hover {
      box-shadow: inset 0 0 0 ${Border.Width} ${Color.Gray};
      border-color: ${Color.Gray};
    }
  }
`;

export const fieldTypographyCss = css<FieldProps>`
  ${(props) => (props.disabled ? InputDisabledCss : InputValueCss)}
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
`;

export const fieldCss = css`
  ${fieldTypographyCss}
  // width: 100%;
  height: ${FieldHeight};
  padding: ${Spacing.Medium};
  
  align-self: stretch;
  background-color: ${Color.GrayXLight};

  :focus {
    outline: none;
  }

  /* https://stackoverflow.com/a/38573257/3670829 */
  -webkit-appearance: none;

  transition: all 0.3s;
`;

export const infieldTopAlignedLabeldCss = css`
  ${fieldCss}
  padding-bottom: 0;
`;