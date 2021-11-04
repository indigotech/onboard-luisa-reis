import * as React from 'react';

import { InputValue } from '@atomic/atm.typography';
import { Hbox } from '@atomic/obj.box';
import { FormFieldContext, FormFieldContextState } from '@atomic/obj.form';

import { StepperFieldMinusStyled, StepperFieldPlusStyled, StepperFieldStyled } from './stepper-field.component.style';

export interface StepperFieldProps {
  value?: number;
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  onValueChange?: (newValue: number) => void;
}

export interface StepperFieldState {
  value: number;
}

export class StepperField extends React.Component<StepperFieldProps, StepperFieldState> {
  private formFieldConsumer: FormFieldContextState;

  constructor(props: StepperFieldProps) {
    super(props);
    this.state = {
      value: props.initialValue ?? props.value,
    };
  }

  componentDidMount() {
    if (this.isControlled() && this.props.initialValue !== undefined) {
      throw new Error('Use either the initialValue prop, or the value prop, but not both');
    }

    if (this.formFieldConsumer) {
      if (this.isControlled() || this.props.initialValue !== undefined) {
        if (this.formFieldConsumer.value) {
          throw new Error('Please, use either value props in <Stepper> or <Form.Field> component.');
        }

        this.formFieldConsumer.onValueChange(this.state.value, null);
      }
    }
  }

  componentDidUpdate(prevProps: StepperFieldProps) {
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      this.props.onValueChange?.(this.props.value);

      this.formFieldConsumer?.onValueChange(this.props.value, null);

      this.setState({ value: this.props.value });
    }
  }

  render() {
    this.formFieldConsumer = this.context;
    const val = this.getCurrentValue();
    return (
      <StepperFieldStyled>
        <Hbox>
          <Hbox.Item hAlign="center">
            <StepperFieldMinusStyled onClick={this.handleMinusClick} disabled={val === this.props.minValue} />
          </Hbox.Item>
          <Hbox.Item hAlign="center">
            <InputValue>{val}</InputValue>
          </Hbox.Item>
          <Hbox.Item hAlign="center">
            <StepperFieldPlusStyled onClick={this.handlePlusClick} disabled={val === this.props.maxValue} />
          </Hbox.Item>
        </Hbox>
      </StepperFieldStyled>
    );
  }

  private getCurrentValue() {
    return this.formFieldConsumer?.value ?? this.state.value;
  }

  private handleMinusClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();

    const currentValue = this.getCurrentValue();
    const nextValue = Math.max(currentValue - 1, this.props.minValue);
    this.changeValue(nextValue);
  };

  private handlePlusClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();

    const currentValue = this.getCurrentValue();
    const nextValue = Math.min(currentValue + 1, this.props.maxValue);
    this.changeValue(nextValue);
  };

  private changeValue = (nextValue: number) => {
    this.props.onValueChange?.(nextValue);

    this.formFieldConsumer?.onValueChange(nextValue, null);

    if (!this.isControlled()) {
      this.setState({ value: nextValue });
    }
  };

  private isControlled = () => {
    return this.props.value !== undefined;
  };
}

StepperField.contextType = FormFieldContext;
