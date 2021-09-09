import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { DatePickerRange as DatePickerRangeComponent } from './date-picker-range.component';

export default {
  title: 'Atomic/Atoms/Date Picker Range',
  component: DatePickerRangeComponent,
} as Meta;

export const DatePickerRange: React.FC = () => <DatePickerRangeComponent startDate={new Date()} />;
