import * as React from 'react';

import { DrawerMenuStyled, DrawerOverlayStyled, DrawerStyled } from './drawer.component.style';

export interface DrawerProps {
  active?: boolean;
  onOverlayClick?: () => void;
  children?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = (props) => (
  <DrawerStyled active={props.active}>
    <DrawerMenuStyled active={props.active}>{props.children}</DrawerMenuStyled>
    <DrawerOverlayStyled active={props.active} onClick={props.onOverlayClick} />
  </DrawerStyled>
);
