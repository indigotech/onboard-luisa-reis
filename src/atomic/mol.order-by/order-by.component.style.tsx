import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Color } from '@atomic/obj.constants';

import { OrderByOrder } from './order-by.component';

const orderByIcons: { [key: string]: IconProp } = {
  asc: faSortUp,
  desc: faSortDown,
  none: faSort,
};

export const OrderByStyled = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export interface OrderByIconProps {
  order?: OrderByOrder;
}

export const OrderByIconStyled = styled(FontAwesomeIcon).attrs((props: OrderByIconProps) => ({
  icon: orderByIcons[props.order || 'none'],
}))<OrderByIconProps>`
  color: ${(props) => (props.order ? Color.GrayDark : Color.Gray)};
`;
