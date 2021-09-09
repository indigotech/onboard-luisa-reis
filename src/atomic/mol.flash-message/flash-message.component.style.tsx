import ColorFunc from 'color';
import styled from 'styled-components';

import { Border, Color, Spacing, FontFamily, FontSize, FontWeight } from '@atomic/obj.constants';
import { highlightStyle } from '@atomic/obj.mixin';

import { FlashMessageProps } from './flash-message.component';

const flashMessageTypes = {
  warning: Color.Warning,
  success: Color.Success,
  info: Color.Accessory,
  alert: Color.Alert,
};

export const FlashMessageContentStyled = styled.div`
  flex-grow: 1;
  margin: 0 ${Spacing.Small};
`;

export const FlashMessageCloseStyled = styled.div<FlashMessageProps>`
  ${highlightStyle}

  &:hover > span {
    color: ${(props) => ColorFunc(flashMessageTypes[props.type]).darken(0.5).string()};
  }
`;

export const FlashMessageStyled = styled.div<FlashMessageProps>`
  background-color: ${(props) => ColorFunc(flashMessageTypes[props.type]).lighten(1).string()};
  border-radius: ${Border.Radius};
  display: flex;
  padding: ${Spacing.Medium};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Small};
  transition: opacity 0.3s ease-in-out;

  p,
  svg {
    color: ${(props) => ColorFunc(flashMessageTypes[props.type]).darken(0.3).string()};
  }
`;
