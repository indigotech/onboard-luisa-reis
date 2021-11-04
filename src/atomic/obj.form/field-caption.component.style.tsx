import styled from 'styled-components';

import { FaIcon } from '../atm.fa-icon';
import { InputCaption, InputCaptionError } from '../atm.typography';
import { Color } from '../obj.constants';

export const FieldErrorCaptionStyled = styled(InputCaptionError)`
  display: flex;
  justify-content: space-between;

  animation: shake 0.62s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const FieldErrorIconStyled = styled(FaIcon.Warning).attrs({ size: 'sm' })`
  color: ${Color.Alert};
  align-self: flex-end;
`;

export const FieldHelperCaptionStyled = styled(InputCaption)``;
