import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H3, Body } from '@atomic/atm.typography';
import { Form } from '@atomic/obj.form';
import { Col } from '@atomic/obj.grid';

import { RadioField } from './radio-field.component';

export default {
  title: 'Atomic/Atoms/Radio',
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: [4, 5, 6],
      },
    },
  },
} as Meta;

interface RadioFieldStoryProps {
  onValueChange?: (value: any, others: any) => void;
  onClick?: (id: any) => void;
  value?: number;
}

export const Uncontrolled: React.FC<RadioFieldStoryProps> = (props) => (
  <Col xs={12}>
    <H3>Uncontrolled</H3>
    <Form.Field name="myGroup" initialValue={2} onValueChange={props.onValueChange}>
      <RadioField id={1}>Value 1</RadioField>
      <RadioField id={2}>Value 2</RadioField>
      <Body> Some Text </Body>
      <RadioField id={3}>Value 3</RadioField>
    </Form.Field>
  </Col>
);

export const Controlled: React.FC<RadioFieldStoryProps> = (props) => (
  <Col xs={12}>
    <H3>Controlled</H3>
    <Form.Field name="myGroup" value={props.value ?? 5} onValueChange={props.onValueChange}>
      <RadioField onClick={props.onClick} id={4}>
        Value 4
      </RadioField>
      <RadioField onClick={props.onClick} id={5}>
        Value 5
      </RadioField>
      <RadioField onClick={props.onClick} id={6}>
        Value 6
      </RadioField>
    </Form.Field>
  </Col>
);
