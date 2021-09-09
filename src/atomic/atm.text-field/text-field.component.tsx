import * as React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { FormFieldContext, FormFieldContextState } from '../obj.form';

import {
  TextFieldDismissButtonStyled,
  TextFieldIconStyled,
  TextFieldIconWrapperStyled,
  TextFieldMaskedStyled,
  TextFieldStyled,
  TextFieldWrapperStyled,
} from './text-field.component.style';

export interface TextFieldMaskOptionsProps {
  format?: string;
  mask?: string;
}

export type VariantType =
  | 'normal'
  | 'credit-card'
  | 'cpf'
  | 'cnpj'
  | 'zip-code'
  | 'only-numbers'
  | 'money'
  | 'cel-phone'
  | 'datetime'
  | 'custom';

export type AutoCompleteType =
  | 'nope'
  | 'off'
  | 'on'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'organization-title'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'url'
  | 'photo'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension'
  | 'email'
  | 'impp';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string | number | string[]) => void;
  options?: TextFieldMaskOptionsProps;
  invalid?: boolean;
  disabled?: boolean;
  // variant equals "kind" from: https://github.com/indigotech/react-masked-text
  variant?: VariantType;
  icon?: IconProp;
  dismissable?: boolean;
  initialValue?: string | number | string[];
  value?: string | number | string[];
  // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-processing-model
  autoComplete?: AutoCompleteType;
  iconname?: string;
  inputLabel?: boolean;
}

export interface TextFieldState {
  value?: string | number | string[];
}

export class TextField extends React.Component<TextFieldProps, TextFieldState> {
  private formFieldConsumer: FormFieldContextState;
  static defaultProps = {
    variant: 'normal',
  };

  constructor(props: TextFieldProps) {
    super(props);
    this.state = {
      value: props.initialValue || props.value,
    };
  }

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      autoComplete,
      onValueChange,
      variant,
      icon,
      onChange,
      value,
      options,
      dismissable,
      initialValue,
      onBlur,
      onFocus,
      inputLabel,
      ...other
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */

    return (
      <FormFieldContext.Consumer>
        {(formFieldConsumer: FormFieldContextState) => {
          this.formFieldConsumer = formFieldConsumer;

          const val = this.getCurrentValue();

          return (
            <React.Fragment>
              {icon && (
                <TextFieldIconWrapperStyled>
                  <TextFieldIconStyled />
                </TextFieldIconWrapperStyled>
              )}
              {variant === 'normal' ? (
                <TextFieldWrapperStyled>
                  <TextFieldStyled
                    value={val ?? ''}
                    onChange={this.handleChangeText}
                    icon={icon}
                    autoComplete={autoComplete}
                    onInput={this.handleInput}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    inputLabel={inputLabel}
                    {...other}
                  />
                  {dismissable && val?.length > 0 && <TextFieldDismissButtonStyled onClick={this.handleDismiss} />}
                </TextFieldWrapperStyled>
              ) : (
                <TextFieldWrapperStyled>
                  <TextFieldMaskedStyled
                    kind={variant}
                    options={options}
                    value={val ?? ''}
                    onChangeText={this.handleChangeText}
                    icon={icon}
                    autoComplete={autoComplete}
                    onInput={this.handleInput}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    inputlabel={inputLabel}
                    {...other}
                  />
                  {dismissable && val && val.length > 0 && (
                    <TextFieldDismissButtonStyled onClick={this.handleDismiss} />
                  )}
                </TextFieldWrapperStyled>
              )}
            </React.Fragment>
          );
        }}
      </FormFieldContext.Consumer>
    );
  }

  componentDidMount() {
    console.log('TextField')
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

  componentDidUpdate(prevProps: TextFieldProps) {
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      this.props.onValueChange?.(this.props.value);

      this.formFieldConsumer?.onValueChange(this.props.value, null);

      this.setState({ value: this.props.value });
    }
  }

  private handleChangeText = (eventOrText: string | React.FormEvent<HTMLInputElement>) => {
    let value: string;

    if (typeof eventOrText === 'string') {
      value = eventOrText;
    } else {
      value = (eventOrText as React.FormEvent<HTMLInputElement>).currentTarget.value;
    }

    if (this.state?.value === value) {
      return;
    }

    if (this.props.onValueChange) {
      this.props?.onValueChange(value);
    }

    if (this.isControlled()) {
      return;
    }

    if (this.formFieldConsumer) {
      this.formFieldConsumer.onValueChange(value, null);
    } else {
      this.setState({ value });
    }
  };

  private handleInput = (event: any) => {
    const nextValue = event.currentTarget.value;
    const currentValue = this.getCurrentValue();

    // HACK: "not fired by keyboard" means that who is calling onInput
    // is not the user by typing letters on the keyboard.
    // For instance, it can be fired by pasting some value or
    // by using form auto-complete.
    // Why is this necessary? auto-complete doesn't fire onChange event
    // but it fires onInput.
    // If you don't handle onInput, some bugs may appear if you use
    // auto-complete on Chrome iOS
    const notFiredByKeyboardTyping =
      (nextValue.length ? nextValue.length : 0) - (currentValue ? currentValue.length : 0) > 1;

    if (notFiredByKeyboardTyping) {
      event.preventDefault();
      this.handleChangeText(nextValue);
    }
  };

  private handleFocus = (event: any) => {
    this.formFieldConsumer?.onFocusChange(true);

    this.props.onFocus?.(event);
  };

  private handleBlur = (event: any) => {
    this.formFieldConsumer?.onFocusChange(false);

    this.props.onBlur?.(event);
  };

  private handleDismiss = () => {
    this.handleChangeText('');
  };

  private isControlled = () => {
    return this.props.value !== undefined;
  };

  private getCurrentValue = () => {
    if (this.isControlled()) {
      return this.props.value;
    }
    return this.formFieldConsumer?.value ? this.formFieldConsumer.value : this.state.value;
  };
}
