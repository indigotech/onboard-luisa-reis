import ColorFunc from 'color';
import styled from 'styled-components';

import { Color, Spacing, FontFamily, FontWeight } from '@atomic/obj.constants';
import { highlightStyle } from '@atomic/obj.mixin';

import { FloatingActionButtonProps } from './floating-action-button.component';

export const FloatingActionButtonStyled = styled.button<FloatingActionButtonProps>`
  background-color: ${Color.White};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-width: 0;
  box-shadow: 0 4px 12px 0 hsla(0, 0%, 0%, 0.15);
  opacity: ${(props) => (props.disabled || props.loading ? 0.5 : 1)};
  color: ${Color.Primary};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  font-size: 24px;
  text-align: center;
  ${highlightStyle}
  position: relative;
  letter-spacing: 1px;

  :focus {
    outline: 0;
  }

  :active {
    background-color: ${(props) =>
      props.outlined ? 'transparent' : ColorFunc(Color.White).darken(0.2).hsl().string()};
  }

  @media (hover: hover) {
    :hover {
      background-color: ${ColorFunc(Color.White).darken(0.2).hsl().string()};
    }
  }

  & + & {
    margin-left: ${Spacing.Small};
  }
`;

interface FloatingActionButton {
  loading: boolean;
}

export const FloatingActionButtonContentStyled = styled.div<FloatingActionButton>`
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.loading ? 0 : 1)};

  & .fa {
    color: ${Color.Primary};
    position: relative;
    left: 1px;
    line-height: 48px;
  }
`;

export const FloatingActionButtonSpinnerStyled = styled.span<FloatingActionButton>`
  display: ${(props) => (props.loading ? 'inline-block' : 'none')} !important;
  position: absolute;
  right: calc(50% - 13px);
  top: calc(50% - 13px);
`;
