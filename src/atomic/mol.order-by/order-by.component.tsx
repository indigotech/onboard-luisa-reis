import * as React from 'react';

import { Hbox } from '@atomic/obj.box';

import { OrderByIconStyled, OrderByStyled } from './order-by.component.style';

export type OrderByOrder = 'asc' | 'desc' | 'none';

export interface OrderByProps {
  order?: OrderByOrder;
  onTap?: () => any;
}

export const OrderByComponent: React.FC<OrderByProps> = (props) => {
  const handleClick = () => {
    props.onTap?.();
  };

  return (
    <OrderByStyled onClick={handleClick}>
      <Hbox>
        <Hbox.Item noGrow>{props.children}</Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item noGrow vAlign="center">
          <OrderByIconStyled order={props.order} />
        </Hbox.Item>
        <Hbox.Separator />
      </Hbox>
    </OrderByStyled>
  );
};
