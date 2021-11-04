import ColorFunc from 'color';
import styled from 'styled-components';

import { Border, Color, FontFamily } from '@atomic/obj.constants';
import { fieldBorderCss, fieldCss } from '@atomic/obj.form/field.component.styled';

const DATE_PICKER_COLOR = Color.Primary;

export const DateRangeStyled = styled.div`
  & .DateRangePickerInput {
    ${fieldBorderCss}
    width: 100%;
    vertical-align: middle;
  }

  & .DateInput_input {
    ${fieldCss}
  }

  & .DateInput_input__focused {
    border: 0;
  }

  & .DayPicker {
    font-family: ${FontFamily.Primary};
    border-width: 0;
    border-radius: ${Border.Radius};
    box-shadow: 4px 4px 30px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 30px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 4px 4px 30px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  & .DateInput_fang {
    display: none;
  }

  & .CalendarDay__selected {
    background: ${DATE_PICKER_COLOR};
    border-color: ${DATE_PICKER_COLOR};
    color: ${Color.White};
  }

  & .CalendarDay__selected_span {
    background-color: ${ColorFunc(Color.Primary).lighten(0.5).string()};
    border-color: ${ColorFunc(Color.Primary).lighten(0.5).string()};
  }
`;
