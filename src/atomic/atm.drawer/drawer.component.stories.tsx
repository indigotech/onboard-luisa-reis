import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Drawer as DrawerComponent, DrawerProps } from './drawer.component';

export default {
  title: 'Atomic/Atoms/Drawer',
  component: DrawerComponent,
} as Meta;

export const Drawer: React.FC<DrawerProps> = (props) => (
  <DrawerComponent {...props}>This is the drawer</DrawerComponent>
);
