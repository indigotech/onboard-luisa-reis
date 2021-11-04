import styled, { keyframes } from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Border, Color, Spacing, ZIndex } from '@atomic/obj.constants';

import { ModalProps } from './modal.component';

export const ModalStyled = styled.div<ModalProps>`
  position: absolute;
  visibility: ${(props) => (props.opened ? 'visible' : 'hidden')};
`;

const slideDown = keyframes`
  0% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalOpacityStyled = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${ZIndex.first};
  background-color: ${Color.Black};
  opacity: ${(props) => (props.opened ? '0.5' : '0')};
  transition: all 0.2s ease-out;
  visibility: ${(props) => (props.opened ? 'visible' : 'hidden')};
`;

interface ModalBoxStyledProps {
  small?: boolean;
}

export const ModalBoxStyled = styled.div<ModalBoxStyledProps>`
  position: fixed;
  top: 80px;
  left: 50%;
  padding: ${Spacing.Medium};
  z-index: ${ZIndex.second};
  transform: translate(-50%, 0);
  width: ${(props) => (props.small ? '360px' : '90%')};
  max-width: 90%;
  max-height: 80%;
  overflow: hidden;
  overscroll-behavior: contain;
  background-color: ${Color.White};
  border-radius: ${Border.Radius};
  animation: ${slideDown} 0.3s ease-out;
`;

export const ModalCloseStyled = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${Spacing.Large};
  color: ${Color.GrayDark};
`;

export const CloseIconStyled = styled(FaIcon.Close)`
  cursor: pointer;
`;

export const ModalBoxBodyStyled = styled.div`
  max-height: 75vh;
  overflow-y: auto;
  padding: ${Spacing.Large};
`;
