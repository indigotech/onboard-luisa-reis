import * as React from 'react';

import { FormFieldContext, FormFieldContextState } from '@atomic/obj.form';

import { TextAreaStyled } from './text-area-field.component.style';

export interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onValueChange?: (value: string | number | string[]) => void;
  initialValue?: string | number | string[];
  value?: string | number | string[];
}

export interface TextAreaFieldState {
  value?: string | number | string[];
}

export class TextAreaField extends React.Component<TextAreaFieldProps, TextAreaFieldState> {
  private formFieldConsumer: FormFieldContextState;

  constructor(props: TextAreaFieldProps) {
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
          throw new Error('Please, use either value props in <TextField> or <Form.Field> component.');
        }

        this.formFieldConsumer.onValueChange(this.state.value, null);
      }
    }
  }

  componentDidUpdate(prevProps: TextAreaFieldProps) {
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      this.props.onValueChange?.(this.props.value);

      this.formFieldConsumer?.onValueChange(this.props.value, null);

      this.setState({ value: this.props.value });
    }
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onValueChange, onChange, value, initialValue, ...other } = this.props;

    return (
      <FormFieldContext.Consumer>
        {(formFieldConsumer: FormFieldContextState) => {
          this.formFieldConsumer = formFieldConsumer;
          const val = formFieldConsumer?.value ?? this.state.value;
          return <TextAreaStyled value={val ?? ''} onChange={this.handleTextChange} {...other} />;
        }}
      </FormFieldContext.Consumer>
    );
  }

  private handleTextChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (this.isControlled()) {
      return;
    }

    const value: string = event.currentTarget.value;

    if (this.formFieldConsumer?.value === value) {
      return;
    }

    this.props.onValueChange?.(value);

    if (this.formFieldConsumer) {
      this.formFieldConsumer.onValueChange(value, null);
    } else {
      this.setState({ value });
    }
  };

  private isControlled = () => this.props.value !== undefined;
}
