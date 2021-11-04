import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H4 } from '@atomic/atm.typography';

import { OrderByComponent, OrderByProps } from './order-by.component';

export default {
  title: 'Atomic/Molecules/OrderBy',
  component: OrderByComponent,
} as Meta;

export const OrderBy: React.FC<OrderByProps> = (props) => (
  <OrderByComponent order={props.order}>
    <H4>Title</H4>
  </OrderByComponent>
);
