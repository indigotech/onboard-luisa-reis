import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Switch as SwitchComponent, SwitchProps } from './switch.component';

export default {
  title: 'Atomic/Atoms/Switch',
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    checked: { control: { type: 'boolean' } },
  },
} as Meta;

export const Switch: React.FC<SwitchProps> = (props) => (
  <SwitchComponent checked={props.checked} disabled={props.disabled} />
);
