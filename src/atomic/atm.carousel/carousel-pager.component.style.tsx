import styled from 'styled-components';

import { Color } from '@atomic/obj.constants';

interface CarouselProps {
  active: boolean;
}

export const CarouselPagerBulletStyled = styled.span<CarouselProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${Color.Accessory};
  opacity: ${(props) => (props.active ? '1' : '0.5')};

  &:nth-child(n + 2) {
    margin-left: 4px;
  }
`;

export const CarouselPagerStyled = styled.div`
  text-align: center;
`;
