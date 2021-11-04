import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { TextField, TextFieldProps } from '@atomic/atm.text-field';
import { Form, Validators } from '@atomic/obj.form';

import { InputLabel } from './input-label.component';

export default {
  title: 'Atomic/Atoms/Input Label',
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
} as Meta;

export const WithNoValidator: React.FC<TextFieldProps> = (props) => (
  <Form.Field name="no validator">
    <InputLabel label="With no validator">
      <TextField inputLabel name="text" type="text" disabled={props.disabled} />
    </InputLabel>
  </Form.Field>
);

export const WithValidator: React.FC<TextFieldProps> = (props) => (
  <Form.Field name="validator" validators={[Validators.Required('campo obrigatório')]}>
    <InputLabel label="With validator">
      <TextField inputLabel type="text" disabled={props.disabled} />
    </InputLabel>
  </Form.Field>
);
