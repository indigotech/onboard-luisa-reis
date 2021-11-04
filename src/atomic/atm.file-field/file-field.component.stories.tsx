import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Form } from '@atomic/obj.form';

import { FileField as FileFieldComponent, FileFieldProps } from './file-field.component';

export default {
  title: 'Atomic/Atoms/File Field',
  component: FileFieldComponent,
  argTypes: {
    onValueChange: {
      action: 'onValueChange',
    },
  },
} as Meta;

export const FileField: React.FC<FileFieldProps> = (props) => (
  <Form.Field name="file" onValueChange={props.onValueChange}>
    <FileFieldComponent id="file" accept={props.accept} />
  </Form.Field>
);
