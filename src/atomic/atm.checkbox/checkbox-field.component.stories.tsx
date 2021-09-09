import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H3 } from '@atomic/atm.typography';
import { Form } from '@atomic/obj.form';
import { Col } from '@atomic/obj.grid';

import { CheckboxField } from './checkbox-field.component';

export default {
  title: 'Atomic/Atoms/Checkbox',
  argTypes: {
    toggle: {
      control: {
        type: 'check',
        options: [2, 6, 7, 8],
      },
    },
  },
} as Meta;

interface CheckboxStoryProps {
  toggle: number[];
}

export const UncontroledCheckbox: React.FC = () => (
  <Col xs={10} sm={5}>
    <H3>Uncontrolled</H3>
    <CheckboxField id={1} initialChecked>
      Value 1
    </CheckboxField>
  </Col>
);

export const ControledCheckbox: React.FC<CheckboxStoryProps> = (props) => (
  <Col xs={10} sm={5}>
    <H3>Controlled</H3>
    <CheckboxField id={2} checked={props.toggle?.filter?.((item) => item === 2)?.length > 0}>
      Value 2
    </CheckboxField>
  </Col>
);

export const CheckboxWithFormFieldUncontrolled: React.FC = () => (
  <Col xs={10} sm={5}>
    <H3>With Form.Field (Uncontrolled)</H3>
    <Form.Field name="check" initialValue={[3, 5]}>
      <CheckboxField id={3}>Value 3</CheckboxField>
      <CheckboxField id={4}>Value 4</CheckboxField>
      <CheckboxField id={5}>Value 5</CheckboxField>
    </Form.Field>
  </Col>
);

export const CheckboxWithFormFieldControlled: React.FC<CheckboxStoryProps> = (props) => (
  <Col xs={12}>
    <H3>With Form.Field (Controlled)</H3>
    <Form.Field
      name="check"
      value={[
        props.toggle?.filter?.((item) => item === 6)?.length > 0 ? 6 : null,
        props.toggle?.filter?.((item) => item === 7)?.length > 0 ? 7 : null,
        props.toggle?.filter?.((item) => item === 8)?.length > 0 ? 8 : null,
      ].filter((item) => item !== null)}
    >
      <CheckboxField id={6}>Value 6</CheckboxField>
      <CheckboxField id={7}>Value 7</CheckboxField>
      <CheckboxField id={8}>Value 8</CheckboxField>
    </Form.Field>
  </Col>
);
