import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Badge as BadgeComponent } from '@atomic/atm.badge';

import { BadgeProps } from './badge.component';

export default {
  title: 'Atomic/Atoms/Badge',
  argTypes: {
    text: { control: { type: 'text' } },
  },
} as Meta;

export const Primary: React.FC<BadgeProps> = (props) => (
  <BadgeComponent text={!!props.text ? props.text : 'This is the Primary'} color="primary" />
);
export const Secondary: React.FC<BadgeProps> = (props) => (
  <BadgeComponent text={!!props.text ? props.text : 'This is the Secundary'} color="secondary" />
);
export const Accessory: React.FC<BadgeProps> = (props) => (
  <BadgeComponent text={!!props.text ? props.text : 'This is the Accessory'} color="accessory" />
);
