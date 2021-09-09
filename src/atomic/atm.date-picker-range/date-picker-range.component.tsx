import * as React from 'react';

import { DatePicker } from '@atomic/atm.date-picker';
import { Hbox } from '@atomic/obj.box';

export interface DatePickerRangeProps {
  startDate?: Date;
  endDate?: Date;
  onDateChange?: (params: DateChangesParams) => void;
}

interface DateChangesParams {
  startDate: Date;
  endDate: Date;
}

export const DatePickerRange: React.FC<DatePickerRangeProps> = (props) => {
  const [startDate, setStartDate] = React.useState(props.startDate);
  const [endDate, setEndDate] = React.useState(props.endDate);

  return (
    <Hbox>
      <Hbox.Item noGrow>
        <DatePicker onValueChange={setStartDate} placeholder={'Start date'} />
      </Hbox.Item>
      <Hbox.Separator />
      <Hbox.Item noGrow>
        <DatePicker
          startDate={startDate}
          endSelect
          endDate={endDate}
          onValueChange={setEndDate}
          placeholder={'End date'}
        />
      </Hbox.Item>
    </Hbox>
  );
};
