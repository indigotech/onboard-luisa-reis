import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Divider as DividerComponent } from './divider.component.style';

export default {
  title: 'Atomic/Atoms/Divider',
  component: DividerComponent,
} as Meta;

export const Divider: React.FC = () => <DividerComponent />;
