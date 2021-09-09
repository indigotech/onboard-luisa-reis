import * as React from 'react';

import {
  CloseIconStyled,
  ModalBoxStyled,
  ModalCloseStyled,
  ModalOpacityStyled,
  ModalStyled,
} from './modal.component.style';

export interface ModalProps {
  small?: boolean;
  opened?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => (
  <ModalStyled opened={props.opened}>
    <ModalOpacityStyled opened={props.opened} onClick={props.onClose} />
    {props.opened && (
      <ModalBoxStyled small={props.small}>
        <ModalCloseStyled>
          <CloseIconStyled onClick={props.onClose} />
        </ModalCloseStyled>
        {props.children}
      </ModalBoxStyled>
    )}
  </ModalStyled>
);
