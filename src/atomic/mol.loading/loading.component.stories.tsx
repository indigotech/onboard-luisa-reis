import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { LoadingCentered } from './loading.component';

export default {
  title: 'Atomic/Molecules/Loading Centered',
} as Meta;

export const Loading = () => <LoadingCentered />;
