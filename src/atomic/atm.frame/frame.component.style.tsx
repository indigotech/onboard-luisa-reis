import styled from 'styled-components';

import { Color, Shadow } from '@atomic/obj.constants';

export const FrameStyled = styled.div`
  box-shadow: ${Shadow.Small};
  background-color: ${Color.White};
  position: relative;
`;
