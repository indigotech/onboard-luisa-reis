import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { TextAreaField, TextField as TextFieldComponent } from '@atomic/atm.text-field';
import { H3 } from '@atomic/atm.typography';

import { VariantType } from './text-field.component';

export default {
  title: 'Atomic/Atoms/Text Field',
  argTypes: {
    type: { control: { type: 'select', options: ['email', 'text', 'number', 'password'] } },
    variant: { control: { type: 'select', options: ['cpf', 'cnpj', 'datetime'] } },
    value: { control: { type: 'text' } },
  },
} as Meta;

interface TextFieldStoryProps {
  type?: 'email' | 'text' | 'number' | 'password';
  variant?: VariantType;
  value?: string;
  onValueChange?: (value: number | string | string[]) => void;
}

export const WithoutMask: React.FC<TextFieldStoryProps> = (props) => (
  <>
    <H3>Without mask</H3>
    <TextFieldComponent name="maskless" variant="normal" type={props.type ?? 'text'} />
  </>
);

export const MaskedCPF: React.FC<TextFieldStoryProps> = (props) => (
  <>
    <H3>Masked (CPF)</H3>
    <TextFieldComponent name="cpf" type="text" variant={props.variant ?? 'cpf'} onValueChange={props.onValueChange} />
  </>
);

export const Controlled: React.FC<TextFieldStoryProps> = (props) => (
  <>
    <H3>Controlled</H3>
    <TextFieldComponent
      name="maskless"
      variant="normal"
      value={props.value ?? 'controlled'}
      type={props.type ?? 'text'}
      onValueChange={props.onValueChange}
    />
  </>
);

export const WithIcon: React.FC<TextFieldStoryProps> = () => (
  <>
    <H3>With icon</H3>
    <TextFieldComponent name="withIcon" variant="normal" icon="search" />
  </>
);

export const WithIconAndMask: React.FC<TextFieldStoryProps> = (props) => (
  <>
    <H3>With icon and mask</H3>
    <TextFieldComponent
      name="plate"
      placeholder="ex: AAA-9999"
      variant="custom"
      type="text"
      icon="search"
      options={{ mask: 'AAA-9999' }}
      onValueChange={props.onValueChange}
    />
  </>
);

export const TextArea: React.FC<TextFieldStoryProps> = (props) => (
  <>
    <H3>Text area</H3>
    <TextAreaField name="plate" placeholder="Textarea" onValueChange={props.onValueChange} />
  </>
);

export const CustomMask: React.FC<TextFieldStoryProps> = (props) => (
  <>
    <H3>Custom mask</H3>
    <TextFieldComponent
      name="plate"
      placeholder="ex: AAA-9999"
      variant="custom"
      type="text"
      options={{ mask: 'AAA-9999' }}
      onValueChange={props.onValueChange}
    />
  </>
);
