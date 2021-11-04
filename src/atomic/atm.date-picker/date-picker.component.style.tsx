import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import { fieldBorderCss, fieldCss } from '@atomic/obj.form/field.component.styled';
// eslint-disable-next-line import/no-unassigned-import
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerStyled = styled(DatePicker)`
  ${fieldBorderCss}
  ${fieldCss}
`;
