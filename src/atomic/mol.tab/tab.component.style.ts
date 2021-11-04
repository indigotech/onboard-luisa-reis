import styled from 'styled-components';

import { Color, FontFamily, FontSize, Spacing } from '@atomic/obj.constants';

export const TabItemStyled = styled.li`
  list-style: none;
  & + & {
    margin-left: ${Spacing.XLarge};
  }
`;

interface TabItemTextStyledProps {
  active?: boolean;
}

export const TabItemTextStyled = styled.a<TabItemTextStyledProps>`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: ${Color.GrayXDark};
  padding: ${Spacing.Medium};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'regular')};

  &::after {
    background: none repeat scroll 0 0 ${Color.Primary};
    bottom: 0;
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: ${(props) => (props.active ? '100%' : 0)};
    left: ${(props) => (props.active ? 0 : '50%')};
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

export const TabStyled = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;
