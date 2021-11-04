import styled from 'styled-components';

import { Border, Color, FontFamily, FontSize, FontWeight, Spacing } from '@atomic/obj.constants';

export const SegmentedStyled = styled.span`
  display: block;
  position: relative;
  & ~ * {
    margin-top: ${Spacing.Medium};
  }
`;

interface SegmentedItemStyledProps {
  selected?: boolean;
}

export const SegmentedItemStyled = styled.button<SegmentedItemStyledProps>`
  background-color: ${(props) => (props.selected ? Color.Primary : Color.White)};
  border-color: 'transparent';
  border-style: solid;
  border-right-width: 1px;
  border-left-width: 0;
  width: auto;
  min-height: 44px;
  padding: ${Spacing.Medium} ${Spacing.Large};
  color: ${(props) => (props.selected ? Color.White : Color.Primary)};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  font-size: ${FontSize.Small};
  border-radius: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  :first-child {
    border-radius: ${Border.RadiusLarge} 0 0 ${Border.RadiusLarge};
  }

  :last-child {
    border-radius: 0 ${Border.RadiusLarge} ${Border.RadiusLarge} 0;
  }
`;
