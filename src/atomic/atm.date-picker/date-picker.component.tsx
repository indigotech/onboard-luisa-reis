import * as React from 'react';

import ptBR from 'date-fns/locale/pt-BR';
import { registerLocale } from 'react-datepicker';

import { DatePickerStyled } from './date-picker.component.style';

// Based on https://reactdatepicker.com/
export interface DatePickerProps {
  startDate?: Date;
  endDate?: Date;
  placeholder?: string;
  onValueChange?: (date: Date) => void;
  onFocusChange?: (focused: boolean) => void;
  showTimeSelect?: boolean;
  disabled?: boolean;
  endSelect?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  React.useEffect(() => {
    registerLocale('pt-br', ptBR);
  }, []);

  const handleDateChange = (date: Date) => {
    if (props.endSelect) {
      if (!props.endDate) {
        setEndDate(date);
      }
    } else {
      if (!props.startDate) {
        setStartDate(date);
      }
    }
    props.onValueChange?.(date);
  };

  const handleFocusChange = (focused: boolean) => () => {
    props.onFocusChange?.(focused);
  };

  return (
    <DatePickerStyled
      locale="pt-br"
      dateFormat="dd/MM/yyyy"
      onChange={handleDateChange}
      startDate={props.startDate ?? startDate}
      endDate={props.endDate ?? endDate}
      selected={props.endSelect ? endDate : startDate}
      onFocus={handleFocusChange(true)}
      onBlur={handleFocusChange(false)}
      placeholderText={props.placeholder}
      showTimeSelect={props.showTimeSelect}
      disabled={props.disabled}
      selectsStart={!props.endSelect}
      selectsEnd={props.endSelect}
    />
  );
};
