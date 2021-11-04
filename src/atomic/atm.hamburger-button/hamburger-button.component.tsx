import * as React from 'react';

import { HamburgerBoxStyled, HamburgerButtonStyled, HamburgerInnerStyled } from './hamburger-button.component.style';

export interface HamburgerButtonProps {
  active?: boolean;
  onClick?: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ active = false, onClick }) => {
  return (
    <HamburgerButtonStyled type="button" onClick={onClick}>
      <HamburgerBoxStyled>
        <HamburgerInnerStyled active={active} />
      </HamburgerBoxStyled>
    </HamburgerButtonStyled>
  );
};
