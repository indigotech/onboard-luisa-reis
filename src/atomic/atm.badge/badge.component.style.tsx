import styled from 'styled-components';

import { Border, Color, FontFamily, FontSize, FontWeight, Spacing } from '@atomic/obj.constants';

import { BadgeProps } from './badge.component';

const badgeColors = {
  primary: Color.Primary,
  secondary: Color.Secondary,
  accessory: Color.Accessory,
};

export const BadgeStyled = styled.span<BadgeProps>`
  padding: ${Spacing.XSmall} ${Spacing.Small};
  border-radius: ${Border.Radius};
  border-color: ${(props) => (props.color ? badgeColors[props.color] : Color.Primary)};
  background-color: ${(props) => (props.color ? badgeColors[props.color] : Color.Primary)};
  align-self: flex-start;
  justify-content: center;
`;

export const BadgeTextStyled = styled.span<BadgeProps>`
  background-color: ${(props) => props.color ?? Color.Primary};
  color: ${Color.White};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
`;
