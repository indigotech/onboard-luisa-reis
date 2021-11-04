import styled from 'styled-components';

import { Color } from '@atomic/obj.constants';
import { highlightStyle } from '@atomic/obj.mixin';

import { HamburgerButtonProps } from './hamburger-button.component';

export const HamburgerButtonStyled = styled.a`
  ${highlightStyle}
  display: inline-block;
  text-transform: none;
  transition: opacity 0.15s linear, filter 0.15s linear;
  border: 0;
  background-color: transparent;
  margin: 0;
  padding: 12px;

  &:focus {
    outline: 0;
  }
`;

export const HamburgerBoxStyled = styled.span`
  position: relative;
  display: inline-block;
  width: 25px;
  height: 14px;
`;

export const HamburgerInnerStyled = styled.span<HamburgerButtonProps>`
  &,
  &:before,
  &:after {
    display: block;
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: ${Color.GrayXDark};
    border-radius: 4px;
  }

  top: 50%;
  margin-top: -1px;
  transition-delay: ${(props) => (props.active ? '0.12s' : '0')};
  transition-timing-function: ${(props) =>
    props.active ? 'cubic-bezier(0.215, 0.61, 0.355, 1)' : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  transform: ${(props) => (props.active ? 'rotate(225deg)' : 'none')};
  transition-duration: 0.22s;
  transition: transform 0.15s ease;

  &:before {
    content: '';
    top: ${(props) => (props.active ? '0' : '-6px')};
    opacity: ${(props) => (props.active ? '0' : '1')};
    transition: ${(props) =>
      props.active
        ? 'top 0.1s ease-out, opacity 0.1s 0.12s ease-out'
        : 'transform .15s ease, top 0.1s 0.25s ease-in, opacity 0.1s ease-in;'};
  }

  &:after {
    content: '';
    bottom: ${(props) => (props.active ? '0' : '-6px')};
    transition: ${(props) =>
      props.active
        ? 'bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)'
        : 'transform .15s ease, bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
    transform: ${(props) => (props.active ? 'rotate(-90deg)' : 'none')};
  }
`;
