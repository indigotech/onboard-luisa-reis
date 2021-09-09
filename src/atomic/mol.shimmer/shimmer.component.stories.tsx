import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H2 } from '@atomic/atm.typography';

import { ShimmerCircleStyled, TextShimmerBoxStyled, ThumbShimmerBoxStyled } from './shimmer.component.style';

export default { title: 'Atomic/Molecules/Shimmer' } as Meta;

export const Text: React.FC = () => (
  <div>
    <H2>Text</H2>
    <TextShimmerBoxStyled height="20px" />
  </div>
);

export const Thumb: React.FC = () => (
  <div>
    <H2>Thumb</H2>
    <ThumbShimmerBoxStyled width="40px" />
  </div>
);

export const Circle: React.FC = () => (
  <div>
    <H2>Circle</H2>
    <ShimmerCircleStyled radius={40} />
  </div>
);
