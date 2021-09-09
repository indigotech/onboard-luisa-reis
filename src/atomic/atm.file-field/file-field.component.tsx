import * as React from 'react';

import { Ellipsed } from '@atomic/atm.typography';
import { FormFieldContext } from '@atomic/obj.form';

import { FileFieldIconStyled, FileFieldInputStyled, FileFieldStyled } from './file-field.component.style';

export interface FileFieldProps {
  id: string;
  onValueChange?: (file: File) => void;

  /**
   * From html https://www.w3schools.com/tags/att_input_accept.asp
   * file_extension | audio/* | video/* | image/* | media_type
   * E.g: '.jpg, .csv' or 'image/*'
   */
  accept?:
    | 'audio/*'
    | 'video/*'
    | 'image/*'
    | 'application/*'
    | '.gif'
    | '.jpg'
    | '.png'
    | '.doc'
    | '.pdf'
    | '.docx'
    | '.csv'
    | '.jpeg';
}

export class FileField extends React.Component<FileFieldProps, undefined> {
  static contextType = FormFieldContext;
  context: React.ContextType<typeof FormFieldContext>;

  private handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = ev.target.files[0];

    this.props.onValueChange?.(file);

    this.context.onValueChange(file, undefined);
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onValueChange, ...props } = this.props;
    return (
      <FileFieldStyled empty={!this.context.value}>
        <FileFieldIconStyled />
        <FileFieldInputStyled onChange={this.handleChange} {...props} />
        <Ellipsed>{this.context.value ? this.context.value.name : 'Selecione o arquivo'}</Ellipsed>
      </FileFieldStyled>
    );
  }
}
