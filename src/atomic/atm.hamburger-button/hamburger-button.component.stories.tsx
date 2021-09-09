import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { HamburgerButton as HamburgerButtonComponent, HamburgerButtonProps } from '@atomic/atm.hamburger-button';

export default {
  title: 'Atomic/Atoms/Hamburger Button',
  component: HamburgerButtonComponent,
} as Meta;

export const HamburgerButton: React.FC<HamburgerButtonProps> = (props) => <HamburgerButtonComponent {...props} />;
