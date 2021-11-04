import styled from 'styled-components';

import { fieldBorderCss, fieldCss } from '@atomic/obj.form/field.component.styled';

export const TextAreaStyled = styled.textarea`
  ${fieldBorderCss}
  ${fieldCss}
  min-height: 100px;
  max-width: 100%;
`;
