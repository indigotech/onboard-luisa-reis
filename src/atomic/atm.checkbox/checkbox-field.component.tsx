import * as React from 'react';

import { FormFieldContext, FormFieldContextState } from '@atomic/obj.form';

import {
  CheckboxCheckedStyled,
  CheckboxFieldBulletStyled,
  CheckboxFieldStyled,
  CheckboxFieldTextStyled,
  CheckboxStyledProps,
  CheckboxUncheckedStyled,
} from './checkbox-field.component.style';

export interface CheckboxFieldProps extends CheckboxStyledProps {
  id: number | string;
  initialChecked?: boolean;
  checked?: boolean;
  onClick?: (id?: number | string) => void;
  onValueChange?: (id: number | string, checked?: boolean) => void;
}

interface CheckboxFieldState {
  checked: boolean;
}

export class CheckboxField extends React.Component<CheckboxFieldProps, CheckboxFieldState> {
  private formFieldConsumer: FormFieldContextState;

  constructor(props: CheckboxFieldProps) {
    super(props);

    this.state = {
      checked: props.initialChecked ?? props.checked ?? false,
    };
  }

  componentDidMount() {
    if (this.isControlled() && this.props.initialChecked !== undefined) {
      throw new Error('Use either the initialChecked prop, or the checked prop, but not both');
    }

    if (this.formFieldConsumer) {
      if (this.isControlled() || this.props.initialChecked !== undefined) {
        throw new Error('Please, use value props in <Form.Field> instead of <CheckboxField> component.');
      }
    }
  }

  componentDidUpdate(prevProps: CheckboxFieldProps) {
    if (prevProps.checked !== this.props.checked && this.props.checked !== this.state.checked) {
      this.setState({ checked: this.props.checked });

      this.props.onValueChange?.(this.props.id, this.props.checked);

      this.formFieldConsumer?.onValueChange([this.props.id], this.props.checked);
    }
  }

  render() {
    return (
      <FormFieldContext.Consumer>
        {(formFieldConsumer: FormFieldContextState) => {
          this.formFieldConsumer = formFieldConsumer;
          const name = this.formFieldConsumer?.name ?? '';
          const checked = this.getCurrentValue();
          return (
            <CheckboxFieldStyled onClick={this.handlePress} disabled={this.props.disabled}>
              <CheckboxFieldBulletStyled
                name={name + '_' + this.props.id}
                type="checkbox"
                checked={checked}
                onChange={this.handlePress}
                value={this.props.id}
              />
              <CheckboxCheckedStyled disabled={this.props.disabled} />
              <CheckboxUncheckedStyled disabled={this.props.disabled} />
              <CheckboxFieldTextStyled htmlFor={name + '_' + this.props.id}>
                {this.props.children}
              </CheckboxFieldTextStyled>
            </CheckboxFieldStyled>
          );
        }}
      </FormFieldContext.Consumer>
    );
  }

  private handlePress = () => {
    this.props.onClick?.(this.props.id);

    const checked = !this.getCurrentValue();

    this.props.onValueChange?.(this.props.id, checked);

    if (this.isControlled()) {
      return;
    }

    this.formFieldConsumer?.onValueChange([this.props.id], checked);

    this.setState({ checked });
  };

  private isControlled = () => {
    return this.props.checked !== undefined;
  };

  private getCurrentValue = () => {
    if (this.formFieldConsumer?.value) {
      return this.formFieldConsumer.value?.indexOf?.(this.props.id) > -1;
    }

    return this.state.checked;
  };
}
