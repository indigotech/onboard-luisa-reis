import * as React from 'react';

import { ValidationError } from './validators';

/**
 * Data built by "Form" when the user submits the form
 */

export interface FormData<T> {
  data: T;
  other: { [fieldName: string]: any };
  error: { [fieldName: string]: ValidationError };
}

export interface FormFieldContextState {
  name: string;
  value: any;
  other: any;
  onValueChange: (value: any, others: any) => void;
  onFocusChange: (focus: boolean) => void;
  onClear: () => void;
  touched?: boolean;
  dirty?: boolean;
  focus?: boolean;
  errors: any[];
}

/**
 * This context helps in the integration of Form.Field and your field (an input, radio etc).
 * If you create a new custom field, you need to use this context and call some
 * methods, such as onValueChange, onFocusChange, onClear. To see an example,
 * check select.component.tsx or text-field.component.tsx
 */
export const FormFieldContext = React.createContext<FormFieldContextState>(null);

export interface FormContextState {
  register: (field: any) => void;
  unregister: (field: any) => void;
}

/**
 * React Context used to collect all "Form.Field" elements inside a "Form"
 */
export const FormContext = React.createContext<FormContextState>(null);
