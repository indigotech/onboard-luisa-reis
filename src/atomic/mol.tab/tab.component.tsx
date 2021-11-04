import * as React from 'react';

import { TabItemStyled, TabItemTextStyled, TabStyled } from './tab.component.style';

interface TabItemProps {
  onTap?: () => void;
  isActiveItem?: boolean;
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const handleClick = () => {
    props.onTap?.();
  };

  return (
    <TabItemStyled onClick={handleClick}>
      <TabItemTextStyled active={props.isActiveItem}>{props.children}</TabItemTextStyled>
    </TabItemStyled>
  );
};

interface TabProps {
  initialIndex?: number;
  onIndexChanged?: (index: number) => void;
}

export const Tab: React.FC<TabProps> & { Item: React.FC } = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(props.initialIndex);

  const handleTap = React.useCallback(
    (index: number) => {
      if (index !== activeIndex) {
        setActiveIndex(index);

        props.onIndexChanged?.(index);
      }
    },
    [activeIndex, props],
  );

  const filteredChildren = React.useMemo(
    () =>
      React.Children.map(props.children as any, (child: React.ReactElement, index) => {
        if (child.type === TabItem) {
          return React.cloneElement<TabItemProps>(child, {
            isActiveItem: index === activeIndex,
            onTap: () => handleTap(index),
          });
        }
        throw new Error('Childrens type must be the same as the TabItem type');
      }),
    [props.children, activeIndex, handleTap],
  );

  return <TabStyled>{filteredChildren}</TabStyled>;
};

Tab.defaultProps = {
  initialIndex: 0,
};

Tab.Item = TabItem;
