import * as React from 'react';

import { CarouselPagerBulletStyled, CarouselPagerStyled } from './carousel-pager.component.style';

export interface CarouselPagerProps {
  total: number;
  current: number;
}

export const CarouselPager: React.FC<CarouselPagerProps> = (props) => {
  return (
    <CarouselPagerStyled>
      {new Array(props.total).fill(undefined).map((_i, index: number) => (
        <CarouselPagerBulletStyled key={'name' + index} active={index === props.current} />
      ))}
    </CarouselPagerStyled>
  );
};
