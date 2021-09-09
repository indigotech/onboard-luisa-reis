import styled from 'styled-components';

import { Breakpoint, HeaderHeight, Spacing, Border } from '../obj.constants';

export const HeaderDeskStyled = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  height: ${HeaderHeight.Desk};
  border-bottom: solid ${Border.Width} ${Border.Color};

  @media all and (min-width: ${Breakpoint.md}em) {
    display: flex;
  }
`;

export const HeaderMobileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${Spacing.Large};
  height: ${HeaderHeight.Mobile};

  @media all and (min-width: ${Breakpoint.md}em) {
    display: none;
  }
`;
