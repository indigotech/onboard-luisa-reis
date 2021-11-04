import * as React from 'react';

import { FormFieldContext, FormFieldContextState } from '@atomic/obj.form';

import { SelectIconStyled, SelectStyled, SelectWrapperStyled } from './select.component.style';

export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
  onValueChange?: (value: any) => void;
  initialValue?: string;
}
interface SelectState {
  value?: string;
}

export class SelectField extends React.Component<SelectProps, SelectState> {
  private formFieldConsumer: FormFieldContextState;

  constructor(props: SelectProps) {
    super(props);
    this.state = { value: this.props.initialValue ?? this.props.value };
  }

  componentDidMount() {
    if (this.isControlled() && this.props.initialValue !== undefined) {
      throw new Error('Use either the initialValue prop, or the value prop, but not both');
    }

    if (this.formFieldConsumer) {
      if (this.isControlled() || this.props.initialValue !== undefined) {
        if (this.formFieldConsumer.value) {
          throw new Error('Please, use either value props in <Select> or <Form.Field> component.');
        }

        this.formFieldConsumer.onValueChange(this.state.value, null);
      }
    }
  }

  componentDidUpdate(prevProps: SelectProps) {
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      this.setState({ value: this.props.value });

      this.props.onValueChange?.(this.props.value);

      this.formFieldConsumer?.onValueChange(this.props.value, null);
    }
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, onChange, invalid, onValueChange, value, ...other } = this.props;

    return (
      <FormFieldContext.Consumer>
        {(formFieldConsumer: FormFieldContextState) => {
          this.formFieldConsumer = formFieldConsumer;
          const val = formFieldConsumer?.value ?? this.state.value;
          return (
            <SelectWrapperStyled invalid={this.props.invalid}>
              <SelectStyled onChange={this.handleSelectChange} value={val} {...other}>
                {this.props.children}
              </SelectStyled>
              <SelectIconStyled />
            </SelectWrapperStyled>
          );
        }}
      </FormFieldContext.Consumer>
    );
  }

  private handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const value: string = event.currentTarget.value;

    this.props.onValueChange?.(value);

    if (this.isControlled()) {
      return;
    }

    if (this.formFieldConsumer) {
      this.formFieldConsumer.onValueChange(value, { touched: true });
    } else {
      this.setState({ value });
    }
  };

  private isControlled = () => {
    return this.props.value !== undefined;
  };
}
