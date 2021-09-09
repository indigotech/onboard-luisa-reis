import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { AppIcon } from '../../app/components/atm.app-icon';
import { H2 } from '../atm.typography';

import { Header as HeaderComponent } from './header.component';

export default {
  title: 'Atomic/Organisms/Header',
} as Meta;

export const Header: React.FC = () => (
  <HeaderComponent>
    <HeaderComponent.Desk>
      <AppIcon.Logo />
      <H2>Menu 1</H2>
      <H2>Menu 2</H2>
      <H2>Menu 3</H2>
      <H2>Menu 4</H2>
      <H2>Menu 5</H2>
    </HeaderComponent.Desk>
    <HeaderComponent.Mobile>
      <H2>Left</H2>
      <AppIcon.Logo />
      <H2>Right</H2>
    </HeaderComponent.Mobile>
  </HeaderComponent>
);
