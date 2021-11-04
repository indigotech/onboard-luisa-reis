import * as React from 'react';

import { Switch } from '@atomic/atm.switch';
import { H3 } from '@atomic/atm.typography';
import { Hbox } from '@atomic/obj.box';

export interface SwitchCellProps {
  title: string;
  onChange?: (checked?: boolean) => void;
  checked?: boolean;
}

export const SwitchCell: React.FC<SwitchCellProps> = (props) => {
  return (
    <Hbox>
      <Hbox.Item vAlign="center">
        <H3>{props.title}</H3>
      </Hbox.Item>
      <Hbox.Item vAlign="center" noGrow>
        <Switch checked={props.checked} onChange={props.onChange} />
      </Hbox.Item>
    </Hbox>
  );
};
