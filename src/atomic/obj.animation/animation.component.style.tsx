import styled, { keyframes } from 'styled-components';

import { TransitionDuration } from '@atomic/obj.constants/constants';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

interface FadeProps {
  show: boolean;
}

export const Fade = styled.div<FadeProps>`
  border: 1px solid transparent;
  animation: ${(props) => (props.show ? fadeIn : fadeOut)} ${TransitionDuration} linear forwards;
`;
