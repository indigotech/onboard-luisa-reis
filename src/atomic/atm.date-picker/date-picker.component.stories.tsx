import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { DatePicker as DatePickerComponent } from '@atomic/atm.date-picker';

export default {
  title: 'Atomic/Atoms/Date Picker',
  argTypes: {
    showTimeSelect: {
      control: {
        type: 'boolean',
      },
    },
    placeholder: { control: { type: 'text' } },
  },
} as Meta;

//For more details on how to use this component, check https://reactdatepicker.com/
export const DatePicker: React.FC<{ showTimeSelect: boolean; placeholder: string }> = (props) => (
  <DatePickerComponent placeholder={props.placeholder ?? 'Date'} showTimeSelect={props.showTimeSelect} />
);
