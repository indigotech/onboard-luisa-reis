import styled from 'styled-components';

import { Color, DrawerWidth, HeaderHeight } from '@atomic/obj.constants';

import { DrawerProps } from './drawer.component';

export const DrawerStyled = styled.div<DrawerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: ${HeaderHeight.Mobile};
  left: 0;
  z-index: ${(props) => (props.active ? '99' : '-1')};
  transition: ${(props) => (props.active ? 'none' : 'z-index .3s .3s')};
`;

export const DrawerMenuStyled = styled.div<DrawerProps>`
  position: absolute;
  background-color: ${Color.GrayXLight};
  width: ${DrawerWidth};
  height: 100%;
  left: ${(props) => (props.active ? '0px' : `-${DrawerWidth}`)};
  top: 0;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overscroll-behavior: contain;
  transition: ${(props) => (props.active ? 'left .3s' : 'left .3s, z-index .3s .3s')};
  overflow: hidden;
  z-index: ${(props) => (props.active ? '2' : 'initial')};
`;

export const DrawerOverlayStyled = styled.a<DrawerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  background-color: ${Color.Black};
  opacity: ${(props) => (props.active ? '.3' : '0')};
  z-index: ${(props) => (props.active ? '1' : '-1')};
  pointer-events: ${(props) => (props.active ? 'initial' : 'none')};
  transition: ${(props) => (props.active ? 'opacity .3s ease-out' : 'opacity .3s ease-out, z-index .3s .3s')};
`;
