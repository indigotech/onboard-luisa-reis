import * as React from 'react';

import * as Scroll from 'react-scroll';

import { InputLabel } from '../atm.typography';

import { FormFieldCaption } from './form-field-caption.component';
import { FormContext, FormContextState, FormFieldContext, FormFieldContextState } from './form.context';
import { ValidationError, Validator } from './validators';

export interface FormFieldProps {
  /** name of the field. The name you set here will be on the submission data created by Form */
  name: string;

  /**
   * if set, this will add a label (on top) of the field. It is usefull when the
   * component doesn't have a FloatingLabel (ex: Radio field)
   */
  label?: string;
  value?: any;
  initialValue?: any;
  onValueChange?: (value: any, others: any) => void;
  /**
   * Array of validators to be called onSubmit
   */
  validators?: Validator[];
}

/**
 * This component must wrap each field. It validates a field, get its value on
 * submission, show an error message (if needed).
 */
export class FormField extends React.Component<FormFieldProps, FormFieldContextState> {
  private formContext: FormContextState;

  constructor(props: FormFieldProps) {
    super(props);

    this.state = {
      other: undefined,
      name: props.name,
      value: props.initialValue !== undefined ? props.initialValue : props.value,
      errors: [],
      touched: false,
      dirty: false,
      focus: false,
      onValueChange: this.handleValueChange,
      onFocusChange: this.handleFocusChange,
      onClear: this.handleClear,
    };
  }

  componentDidMount() {
    console.log('TextField')
    if (this.isControlled() && this.props.initialValue !== undefined) {
      throw new Error('Use either the initialValue prop, or the value prop, but not both');
    }

    return this.formContext?.register(this);
  }

  componentDidUpdate(prevProps: FormFieldProps) {
    if (prevProps.value !== this.props.value && this.props.value !== this.state.value) {
      if (this.state.touched) {
        this.validate(this.props.value);
      }

      let other = null as { [id: string]: boolean };
      if (this.isCheckboxValue(this.props.value)) {
        other = this.state.other || {};

        Object.getOwnPropertyNames(other).forEach((id: string) => {
          other[id] = this.props.value.findIndex((checkedId: number) => String(checkedId) === id) !== -1;
        });

        this.props.value.forEach((id: number) => {
          if (!Object(other).hasOwnProperty(id.toString())) {
            return (other = { ...other, [id]: true });
          }
        });
      }

      this.setState({ value: this.props.value, other, dirty: true });

      this.props.onValueChange?.(this.props.value, other);
    }
  }

  componentWillUnmount() {
    return this.formContext?.unregister(this);
  }

  render() {
    return (
      <FormContext.Consumer>
        {(formContext: FormContextState) => {
          this.formContext = formContext;
          return (
            <FormFieldContext.Provider value={this.state}>
              {/*
              This code is coupled with `form.component`
              A scroll element is added in order to put a reference
              to be scrolled to in case this field is not valid
              when the form is submitted
              more info: https://github.com/fisshy/react-scroll#scroll-methods
              `fieldName` must be uniq in the whole screen! Be careful with
              multiple forms in the same screen (ex: modal; form in footer)
              */}
              <Scroll.Element name={this.props.name} />

              {this.props.label && <InputLabel hasError={this.state.errors.length > 0}>{this.props.label}</InputLabel>}
              {this.props.children}
              <FormFieldCaption errors={this.state.errors} />
            </FormFieldContext.Provider>
          );
        }}
      </FormContext.Consumer>
    );
  }

  validate(value: any) {
    const errors: ValidationError[] = [];

    // Pass it to each validator
    if (this.props.validators?.length > 0) {
      for (const validator of this.props.validators) {
        // Add to validation array if errors
        if (!validator.validationFn(value)) {
          errors.push(validator.error);
        }
      }
    }
    return this.setState({ errors });
  }

  private handleValueChange = (value: any, other: any) => {
    let val = value;
    let oth = other;

    // Its a checkbox, must verify if checked/unchecked from the "other" parameter
    if (this.isCheckboxValue(val)) {
      val = (this.state.value || []).slice();
      oth = Object.assign({}, this.state.other);
      const checkboxValue = value[0];
      const index = val.indexOf(checkboxValue, 0);

      if (other && index < 0) {
        val.push(checkboxValue);
      }

      if (!other && index > -1) {
        val.splice(index, 1);
      }
      oth[checkboxValue] = other;
    }

    if (this.isControlled()) {
      this.fireValueChange(val, oth);
      return;
    }

    // (other?.touched) -> validate on onValueChange for <Select />
    if (this.state.touched || other?.touched) {
      this.validate(val);
    }

    this.setState({ value: val, other: oth, dirty: true });

    this.fireValueChange(val, oth);
  };

  private fireValueChange(val: any, oth: any) {
    this.props.onValueChange?.(val, oth);
  }

  private handleFocusChange = (focus: boolean) => {
    this.setState({ focus });
    if (!focus) {
      this.validate(this.state.value);
      this.setState({ touched: true });
    }
  };

  private handleClear = () => {
    this.setState({ value: null, other: null, dirty: true });
    this.props.onValueChange?.(null, null);
  };

  private isControlled = () => this.props.value !== undefined;

  private isCheckboxValue = (value: any) => Array.isArray(value);
}

