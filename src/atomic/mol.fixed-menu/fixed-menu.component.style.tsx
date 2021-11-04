import styled from 'styled-components';

import { Border, Breakpoint, Color, DrawerWidth, Spacing } from '@atomic/obj.constants';

export const FixedMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  background-color: ${Color.White};
  overflow-y: hidden;
`;

export const FixedMenuContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

interface FixedMenuProps {
  lean?: boolean;
}

export const FixedMenu = styled.div<FixedMenuProps>`
  display: none;
  flex: 0 0 ${DrawerWidth};
  border-left-width: 1;
  padding: 20px;
  border-left-color: ${Border.Color};
  background-color: ${Color.GrayXLight};
  padding-top: ${Spacing.Medium};
  padding-bottom: ${Spacing.Medium};
  
  @media all and (min-width: ${Breakpoint.lg}em) {
    display: ${(props) => (props.lean ? 'none' : 'block')} !important;
  }
`;

export const FixedMenuContent = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;
  

  
`;
