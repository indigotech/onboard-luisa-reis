import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as TextInputMask from 'react-masked-text';
import styled from 'styled-components';

import { FaIcon } from '../atm.fa-icon';
import { InputPlaceholderCss } from '../atm.typography';
import { Color, FieldHeight, Spacing } from '../obj.constants';
import {
  fieldBorderCss,
  fieldCss,
  infieldTopAlignedLabeldCss,
  FieldProps,
} from '../obj.form/field.component.styled';

const FIELD_WITH_ICON_LEFT_PADDING = 'calc(' + Spacing.Medium + ' * 3)';
const ICON_HEIGHT = '18px';

interface TextFieldStyledProps extends FieldProps {
  icon?: IconProp;
  inputLabel?: boolean;
}

export const TextFieldStyled = styled.input.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['inputLabel'].includes(prop) && defaultValidatorFn(prop),
})<TextFieldStyledProps>`
  ${fieldBorderCss}
  ${(props) => (props.inputLabel ? infieldTopAlignedLabeldCss : fieldCss)}

  ${(props) => (props.icon ? 'padding-left: ' + FIELD_WITH_ICON_LEFT_PADDING : null)};

  ::placeholder {
    ${InputPlaceholderCss}
    opacity: 0.5;
  }
`;

const DismissButtonSize = 16;

export const TextFieldDismissButtonStyled = styled.div`
  position: absolute;
  top: ${Spacing.Large};
  right: ${Spacing.Small};
  width: ${DismissButtonSize}px;
  height: ${DismissButtonSize}px;
  border-radius: ${DismissButtonSize / 2}px;
  background-color: ${Color.Gray};
  text-align: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 10px;
    top: 50%;
    left: 3px;
    background: ${Color.White};
  }
  &::before {
    transform: rotate(45deg);
    margin-top: -1px;
  }
  &::after {
    transform: rotate(-45deg);
    margin-top: -1px;
  }
`;

export const TextFieldWrapperStyled = styled.div`
  position: relative;
`;

export const TextFieldMaskedStyled = TextFieldStyled.withComponent(TextInputMask);

export const TextFieldIconWrapperStyled = styled.div`
  position: relative;
`;

export const TextFieldIconStyled = styled(FaIcon.Search)`
  position: absolute;
  z-index: 1;
  top: ${'calc((' + FieldHeight + ' - ' + ICON_HEIGHT + ') / 2)'};
  left: ${Spacing.Medium};
`;
