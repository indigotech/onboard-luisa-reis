import * as React from 'react';

import { BadgeStyled, BadgeTextStyled } from './badge.component.style';

export interface BadgeProps {
  text: string;
  /** Colors supported in this badge. This should follow the color constants  */
  color: 'primary' | 'secondary' | 'accessory';
}

export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => (
  <BadgeStyled {...props}>
    <BadgeTextStyled {...props}>{props.text}</BadgeTextStyled>
  </BadgeStyled>
);
