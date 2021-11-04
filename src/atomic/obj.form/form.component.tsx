import * as React from 'react';

import set from 'lodash.set';
import * as Scroll from 'react-scroll';

import { FormField } from './form-field.component';
import { FormContext, FormContextState, FormData } from './form.context';
import { ValidationError } from './validators';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onChange?: any;
  onSubmit: any;
  ref?: any;
  autoComplete?: string;
}

/**
 * A component for form creation. If you follow its convention it has some out of the box behaviours.
 * When the user submits a form, it iterates over all inner "Form.Field"
 * elements and call their validation. After that, it returns a "formData"
 * object with all found errors and the final data
 *
 * The goal is to enable more declarative forms (no need to have refs, call
 * validation and collect data manually, build the submission data manually)
 *
 */
export class Form extends React.Component<FormProps, FormContextState> {
  static Field = FormField;

  private fields: { [name: string]: any } = {};

  constructor(props: FormProps) {
    super(props);

    this.state = {
      register: this.handleRegister,
      unregister: this.handleUnregister,
    };
  }

  render() {
    return (
      <FormContext.Provider value={this.state}>
        <form onSubmit={this.handleSubmit} name={this.props.name} noValidate autoComplete={this.props.autoComplete}>
          {this.props.children}
        </form>
      </FormContext.Provider>
    );
  }

  private handleRegister = (field: any) => {
    console.log('field', field)
    if (field.props.name !== undefined) {
      this.fields[field.props.name] = field;
    }
  };

  private handleUnregister = (field: any) => {
    if (field.props.name !== undefined) {
      delete this.fields[field.props.name];
    }
  };

  private handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = await this.mapFormData();
    if (Object.keys(formData.error).length > 0) {
      const data = formData.error;
      const key = Object.keys(data)[0];
      const fieldName = this.getFieldName(key, data);
      this.scrollToField(fieldName);
    }

    this.props.onSubmit?.(formData);
  };

  private getFieldName(key: string, obj: any): string {
    const nextObj = obj[key];
    if (typeof nextObj !== 'object') {
      return '';
    }

    const nextKey = Object.keys(nextObj)[0];
    const suffix = this.getFieldName(nextKey, nextObj);
    return `${key}${suffix.length ? '.' : ''}${suffix}`;
  }

  private scrollToField = (name: string) => {
    const scroller = Scroll.scroller;
    scroller.scrollTo(name, {
      smooth: true,
      offset: -30,
    });
  };

  private mapFormData(): Promise<FormData<any>> {
    const formData: FormData<any> = { data: {}, other: {}, error: {} };

    return Promise.all(
      // Trigger validation on all the fields
      Object.keys(this.fields)
        .filter((fieldName: string) => this.fields[fieldName].validate)
        .map((fieldName: string) => this.fields[fieldName])
        .map((field: any) => field.validate(field.state.value)),
    ).then(() => {
      Object.keys(this.fields)
        .map((fieldName: string) => this.fields[fieldName])
        .forEach((field: any) => {
          set(formData.data, field.props.name, field.state.value);
          set(formData.other, field.props.name, field.state.other);

          field.state.errors?.forEach((error: ValidationError) => {
            set(formData.error, field.props.name, {
              name: error.name,
              message: error.message,
            });
          });
        });
      return formData;
    });
  }
}
