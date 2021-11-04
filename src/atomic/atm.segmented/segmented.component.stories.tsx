import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Segmented as SegmentedComponent, SegmentedItem } from './segmented.component';

export default {
  title: 'Atomic/Atoms/Segmented',
} as Meta;

export const Segmented: React.FC = () => {
  return (
    <SegmentedComponent>
      <SegmentedItem>Segment 1</SegmentedItem>
      <SegmentedItem>Segment 2</SegmentedItem>
      <SegmentedItem>Segment 3</SegmentedItem>
    </SegmentedComponent>
  );
};
