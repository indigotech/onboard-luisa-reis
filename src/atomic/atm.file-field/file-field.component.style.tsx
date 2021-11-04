import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Border, Color, Spacing } from '@atomic/obj.constants';
import { fieldBorderCss, fieldCss, FieldProps } from '@atomic/obj.form/field.component.styled';
import { highlightStyle } from '@atomic/obj.mixin';

const INPUT_PADDING = '38px'; // Spacing.Medium + ICON_HEIGHT = 14px + Spacing.Small

export const FileFieldInputStyled = styled.input.attrs({
  type: 'file',
})`
  position: absolute;
  z-index: -1;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  border: 0;
  overflow: hidden;
`;

interface FileFieldStyledProps extends FieldProps {
  empty?: boolean;
}

export const FileFieldStyled = styled.label<FileFieldStyledProps>`
  ${fieldCss}
  ${fieldBorderCss}
  display: block;

  position: relative;
  padding-left: ${INPUT_PADDING};
  color: ${(props) => (props.empty ? Color.Gray : Color.Black)};

  &:active {
    border-color: ${Color.Primary};
    box-shadow: inset 0 0 0 ${Border.Width} ${Color.Primary};
  }
`;

export const FileFieldIconStyled = styled(FaIcon.FileUpload)`
  position: absolute;
  z-index: 1;
  top: ${Spacing.Medium};
  left: ${Spacing.Medium};
`;

export const FileFieldClearStyled = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  padding: ${Spacing.Medium};
  ${highlightStyle}

  &:hover > span {
    color: ${Color.GrayLight};
  }
`;
