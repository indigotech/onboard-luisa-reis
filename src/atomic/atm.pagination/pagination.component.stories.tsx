import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { PaginationComponent, PaginationProps } from './pagination.component';

export default {
  title: 'Atomic/Atoms/Pagination',
  component: PaginationComponent,
  args: {
    current: 1,
    total: 15,
    siblingCount: 2,
  },
} as Meta;

export const Pagination: React.FC<PaginationProps> = (args) => {
  const [current, setCurrent] = React.useState(args.current);
  return (
    <PaginationComponent
      {...args}
      current={current}
      // eslint-disable-next-line react/jsx-no-bind
      onPageChange={(index: number) => setCurrent(index)}
    />
  );
};
