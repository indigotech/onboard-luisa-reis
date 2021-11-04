import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { HDisplay } from '@atomic/atm.typography';

import { Frame as FrameComponent } from './frame.component';

export default {
  title: 'Atomic/Atoms/Frame',
  component: FrameComponent,
} as Meta;

export const Frame: React.FC = () => (
  <FrameComponent>
    <HDisplay>Content</HDisplay>
  </FrameComponent>
);
