import styled from 'styled-components';

import { Color } from '@atomic/obj.constants';

const HANDLE_DIAMETER = 26;
const SWITCH_HEIGHT = 28;
const SWITCH_WIDTH = 56;

export interface SwitchStyledProps {
  disabled?: boolean;
  checked?: boolean;
}

export const SwitchRootStyled = styled.div<SwitchStyledProps>`
  display: inline-block;
  position: relative;
  border-radius: ${SWITCH_HEIGHT / 2}px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  text-align: left;
  transition: opacity 0.25s;
  user-select: none;
  touch-action: none;
  -webkit-transition: opacity 0.25s;
  -moz-transition: opacity 0.25s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const SwitchBackgroundStyled = styled.div<SwitchStyledProps>`
  position: relative;
  height: ${SWITCH_HEIGHT}px;
  width: ${SWITCH_WIDTH}px;
  margin: ${Math.max(0, (HANDLE_DIAMETER - SWITCH_HEIGHT) / 2)}px;
  background-color: ${(props) => (props.checked ? Color.Accessory : Color.Gray)};
  border-radius: ${SWITCH_HEIGHT / 2}px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
`;

export const SwitchHandleStyled = styled.div<SwitchStyledProps>`
  display: inline-block;
  position: absolute;
  top: ${Math.max(0, (28 - HANDLE_DIAMETER) / 2)}px;
  height: ${HANDLE_DIAMETER}px;
  width: ${HANDLE_DIAMETER}px;
  outline: 0;
  background-color: ${Color.White};
  border: 0;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transform: translate(${(props) => (props.checked ? SWITCH_WIDTH / 2 : 1)}px);
  -webkit-transition: background-color 0.25s, transform 0.25s, box-shadow 0.15s;
  -moz-transition: background-color 0.25s, transform 0.25s, box-shadow 0.15s;
  transition: background-color 0.25s, transform 0.25s, box-shadow 0.15s;
`;
