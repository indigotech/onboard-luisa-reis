import ColorFunc from 'color';
import { LocationDescriptorObject } from 'history';
import styled, { css } from 'styled-components';

// todo: import { Link } from '@app/core/route/link.component';
import { Border, Color, Spacing, FontFamily, FontSize, FontWeight } from '@atomic/obj.constants';
import { highlightStyle } from '@atomic/obj.mixin';

export type VariantTypes = 'primary' | 'secondary' | 'neutral' | 'callToAction' | 'link' | 'alert';

const btnColors = (variant: VariantTypes, outlined: boolean): { bg: string; border: string; text: string } => {
  if (outlined) {
    const outlinedColors = {
      primary: { bg: Color.White, border: Color.Primary, text: Color.Secondary },
      secondary: { bg: Color.White, border: Color.Secondary, text: Color.Secondary },
      neutral: { bg: Color.White, border: Color.Neutral, text: Color.Neutral },
      callToAction: { bg: Color.White, border: Color.CallToAction, text: Color.CallToAction },
      accessory: { bg: Color.White, border: Color.Accessory, text: Color.Accessory },
      alert: { bg: Color.White, border: Color.Alert, text: Color.Alert },
      link: { bg: 'transparent', border: 'transparent', text: Color.Primary },
    };

    return outlinedColors[variant];
  }

  const solidColors = {
    primary: { bg: Color.ActionButton, border: Color.ActionButton, text: Color.White },
    secondary: { bg: Color.Secondary, border: Color.Secondary, text: Color.White },
    neutral: { bg: Color.Neutral, border: Color.Neutral, text: Color.Accessory },
    callToAction: { bg: Color.CallToAction, border: Color.CallToAction, text: Color.White },
    accessory: { bg: Color.Accessory, border: Color.Accessory, text: Color.White },
    alert: { bg: Color.Alert, border: Color.Alert, text: Color.White },
    link: { bg: 'transparent', border: 'transparent', text: Color.Primary },
  };

  return solidColors[variant];
};

export const buttonHeight = '45px';

interface ButtonStyledProps {
  expanded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  outlined?: boolean;
  variant?: VariantTypes;
  to?: LocationDescriptorObject | string;
}

export const ButtonStyledCss = css<ButtonStyledProps>`
  position: relative;
  width: ${(props) => (props.expanded ? '300px' : 'auto')};
  min-height: ${buttonHeight};
  line-height: ${buttonHeight};
  padding: 0 ${Spacing.Large};
  margin:  ${Spacing.Medium};

  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Small};
  text-decoration: none;
  text-align: ${(props) => (props.expanded ? 'center' : 'left')};
  ${highlightStyle}
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled || props.loading ? 0.5 : 1)};

  /* this is useful when its father is pointer-events: none */
  pointer-events: auto;
  color: ${(props) => btnColors(props.variant, props.outlined).text};
  background-color: ${(props) => btnColors(props.variant, props.outlined).bg};
  border-color: ${(props) => btnColors(props.variant, props.outlined).border};
  border-style: solid;
  border-width: ${Border.Width};
  border-radius: ${Border.Radius};

  ${(props) =>
    !props.disabled &&
    `
    &:hover {
      color: ${ColorFunc(btnColors(props.variant, props.outlined).text).darken(0.2).hsl().string()};
      background-color: ${ColorFunc(btnColors(props.variant, props.outlined).bg).darken(0.1).hsl().string()};
    }

    &:active {
      color: ${ColorFunc(btnColors(props.variant, props.outlined).text).darken(0.3).hsl().string()};
      background-color: ${ColorFunc(btnColors(props.variant, props.outlined).bg).darken(0.2).hsl().string()};
    }
  `}
`;

export const ButtonStyled = styled.button`
  ${ButtonStyledCss}

  &:focus {
    outline: 0;
  }
`;

/**
  * export const LinkButtonStyled = styled(Link)`
  *  ${ButtonStyledCss}
  *  display: inline-block;

  *  /* This style improves how links are shown inside texts *\/
  *   p > &,
  *   label > & {
  *     padding: 0;
  *     min-height: ${FontSize.Medium};
  *   }
  * `;
**/

interface ButtonContentProps {
  processing: boolean;
}

export const ButtonContentStyled = styled.div<ButtonContentProps>`
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.processing ? 0 : 1)};
  font-stretch: 100%;
  vertical-align: middle;

  & .fa,
  & img,
  & svg {
    padding-right: ${Spacing.Small};
  }
`;

export const ButtonSpinnerStyled = styled.span<ButtonContentProps>`
  display: ${(props) => (props.processing ? 'inline-block' : 'none')} !important;
  position: absolute;
  right: calc(50% - 7px);
  top: 0;
`;
