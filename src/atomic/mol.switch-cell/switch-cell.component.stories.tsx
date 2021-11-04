import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H2 } from '@atomic/atm.typography';
import { Grid, Col, Row } from '@atomic/obj.grid';

import { SwitchCell } from './switch-cell.component';

export default {
  title: 'Atomic/Molecules/SwitchCell',
  argTypes: {
    title: { control: { type: 'text' } },
    onChange: { action: 'onChange' },
  },
} as Meta;

interface SwitchCellStoryProps {
  title: string;
  onChange: (checked: boolean) => void;
}

export const Default: React.FC<SwitchCellStoryProps> = (props) => (
  <Grid fluid>
    <Row noGutter>
      <Col xs={12}>
        <H2>Switch cell</H2>
        <SwitchCell title={props.title ?? 'Switch'} onChange={props.onChange} />
      </Col>
    </Row>
  </Grid>
);

Default.defaultProps = {
  title: 'Switch',
};
