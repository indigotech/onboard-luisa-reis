import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H2 } from '@atomic/atm.typography';
import { Col, Grid, Row } from '@atomic/obj.grid';

import { Tab } from './tab.component';

export default {
  title: 'Atomic/Molecules/Tab',
  component: Tab,
} as Meta;

export const TabBar: React.FC = () => (
  <Grid fluid>
    <H2>Text</H2>
    <Row>
      <Col xs={8}>
        <Tab initialIndex={1}>
          <Tab.Item>Item 1</Tab.Item>
          <Tab.Item>Item 2</Tab.Item>
          <Tab.Item>Item 3</Tab.Item>
        </Tab>
      </Col>
    </Row>
  </Grid>
);
