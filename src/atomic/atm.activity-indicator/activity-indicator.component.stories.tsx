import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { ActivityIndicator, ActivityIndicatorProps } from './activity-indicator.component';

export default {
  title: 'Atomic/Atoms/Activity Indicator',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'lg', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
      },
    },
    light: { control: { type: 'boolean' } },
  },
} as Meta;

export const Spinner: React.FC<ActivityIndicatorProps> = (props) => <ActivityIndicator type={'spinner'} {...props} />;
export const CircleNotch: React.FC<ActivityIndicatorProps> = (props) => (
  <ActivityIndicator type={'circle-notch'} {...props} />
);
export const Sync: React.FC<ActivityIndicatorProps> = (props) => <ActivityIndicator type={'sync'} {...props} />;
export const Cog: React.FC<ActivityIndicatorProps> = (props) => <ActivityIndicator type={'cog'} {...props} />;
