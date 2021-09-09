import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Button } from '@atomic/atm.button';
import { H2 } from '@atomic/atm.typography';
import { Form } from '@atomic/obj.form';
import { Col } from '@atomic/obj.grid';

import { StepperField, StepperFieldProps } from './stepper-field.component';

const Story: React.FC<StepperFieldProps> = (props) => <StepperField {...props} />;

export default {
  title: 'Atomic/Atoms/Stepper Field',
  component: Story,
  argTypes: {
    maxValue: { control: { type: 'number', min: 1, step: 1 } },
    minValue: { control: { type: 'number', min: 1, step: 1 } },
    value: { control: { type: 'number', min: 1, step: 1 } },
  },
} as Meta;

export const UncontrolledStepperField: React.FC<StepperFieldProps> = (props) => (
  <Col xs={6}>
    <H2>Uncontrolled</H2>
    <StepperField
      maxValue={props.maxValue ?? 5}
      minValue={props.minValue ?? 1}
      initialValue={1}
      onValueChange={props.onValueChange}
    />
  </Col>
);

export const ControlledStepperField: React.FC<StepperFieldProps> = ({
  value = 1,
  minValue = 1,
  maxValue = 5,
  ...props
}) => {
  const [controlledValue, setControlledValue] = React.useState(1);

  React.useEffect(() => {
    if (minValue <= value && value <= maxValue) {
      setControlledValue(value);
    }
  }, [value, maxValue, minValue]);

  return (
    <Col xs={6}>
      <H2>Controlled</H2>
      <StepperField
        maxValue={maxValue}
        minValue={minValue}
        value={controlledValue}
        onValueChange={props.onValueChange}
      />
    </Col>
  );
};

export const ControlledWithForms: React.FC<StepperFieldProps> = (props) => (
  <Col xs={12}>
    <H2>Controlled with form</H2>
    <Form
      onSubmit={(result: any) => {
        console.log(result.data);
      }}
    >
      <Form.Field name="stepper-field" initialValue={3}>
        <StepperField
          maxValue={props.maxValue ?? 5}
          minValue={props.minValue ?? 0}
          onValueChange={props.onValueChange}
        />
      </Form.Field>
      <Button type="submit" variant="primary">
        Enviar
      </Button>
    </Form>
  </Col>
);
