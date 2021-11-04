import * as React from 'react';

import { HDisplay } from '@atomic/atm.typography';
import {
  FileUploadFieldLabelStyled,
  FileUploadFieldStyled,
  FileUploadWrapper,
} from '@atomic/mol.drag-n-drop-file/drag-n-drop-file.component.style';
import { FormFieldContext, FormFieldContextState } from '@atomic/obj.form';

interface FileUploadFieldProps {
  id: string;
  children: React.ReactFragment;
  dropMessage: string;
  isMultipleFiles?: boolean;
  onValueChange?: (uploaded: File | File[]) => void;
}

interface FileUploadFieldState {
  dragging: boolean;
}

// Based on https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
export class DragNDropFile extends React.Component<FileUploadFieldProps, FileUploadFieldState> {
  private dropZone: React.RefObject<HTMLDivElement>;
  private dragCounter: number;
  private formFieldConsumer: FormFieldContextState;

  constructor(props: FileUploadFieldProps) {
    super(props);
    this.state = {
      dragging: false,
    };

    this.dragCounter = 0;
    this.dropZone = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    this.dragCounter = 0;
    const ref = this.dropZone.current;
    if (ref) {
      ref.addEventListener('dragenter', this.handleDragIn);
      ref.addEventListener('dragleave', this.handleDragOut);
      ref.addEventListener('dragover', this.handleDrag);
      ref.addEventListener('drop', this.handleDrop);
    }
  }

  componentWillUnmount() {
    const ref = this.dropZone.current;
    if (ref) {
      ref.removeEventListener('dragenter', this.handleDragIn);
      ref.removeEventListener('dragleave', this.handleDragOut);
      ref.removeEventListener('dragover', this.handleDrag);
      ref.removeEventListener('drop', this.handleDrop);
    }
  }

  render() {
    return (
      <FormFieldContext.Consumer>
        {(formFieldConsumer: FormFieldContextState) => {
          this.formFieldConsumer = formFieldConsumer;
          return (
            <FileUploadWrapper ref={this.dropZone}>
              {this.state.dragging && (
                <FileUploadFieldStyled>
                  <FileUploadFieldLabelStyled>
                    <HDisplay>{this.props.dropMessage}</HDisplay>
                  </FileUploadFieldLabelStyled>
                </FileUploadFieldStyled>
              )}
              {this.props.children}
            </FileUploadWrapper>
          );
        }}
      </FormFieldContext.Consumer>
    );
  }

  private handleDrag = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  private handleDragIn = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter++;
    if (event.dataTransfer.items && !!event.dataTransfer.items.length) {
      this.setState({ dragging: true });
    }
  };

  private handleDragOut = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter--;
    if (!!this.dragCounter) {
      return;
    }
    this.setState({ dragging: false });
  };

  private handleDrop = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState({ dragging: false });

    if (event.dataTransfer.files && !!event.dataTransfer.files.length) {
      const file = this.props.isMultipleFiles ? Array.from(event.dataTransfer.files) : event.dataTransfer.files[0];

      if (this.props.onValueChange) {
        this.props.onValueChange(file);
      }

      if (this.formFieldConsumer) {
        this.formFieldConsumer.onValueChange(file, null);
      }
      event.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };
}
