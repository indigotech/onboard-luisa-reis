import styled from 'styled-components';

import { InputLabel } from '@atomic/atm.typography';
import { Color, FontSize, Border, ZIndex } from '@atomic/obj.constants';

export const FileUploadWrapper = styled.div`
  position: relative;
`;

export const FileUploadFieldStyled = styled.div`
  border-style: dashed;
  border-width: ${Border.Width};
  border-color: ${Color.GrayLight};
  background-color: ${Color.White};
  opacity: 0.5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${ZIndex.top};
`;

export const FileUploadFieldLabelStyled = styled(InputLabel)`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  text-align: center;
  color: ${Color.GrayLight};
  font-size: ${FontSize.XLarge};
`;
