import * as React from 'react';

import { SegmentedItemStyled, SegmentedStyled } from './segmented.component.style';

export const SegmentedItem: React.FC = (props) => <SegmentedItemStyled {...props} />;
export interface SegmentedProps {
  onChange?: (index: number) => any;
}

export interface SegmentedState {
  currentIndex: number;
}

export const Segmented: React.FC<SegmentedProps> = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClick = (index: number) => {
    return () => {
      setCurrentIndex(index);

      props.onChange?.(index);
    };
  };

  const renderChildren = () => {
    return React.Children.map(props.children, (child: any, index: number) => {
      return React.cloneElement(child, {
        selected: currentIndex === index,
        onClick: handleClick(index),
      });
    });
  };

  return <SegmentedStyled>{renderChildren()}</SegmentedStyled>;
};
