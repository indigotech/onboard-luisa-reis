import * as React from 'react';

import { VariantTypes } from '@atomic/atm.button/button.component.style';

import { PageDisabledStyled, PageStyled, PaginationStyled } from './pagination.component.style';

export interface PageItemProps {
  variant?: VariantTypes;
  active?: boolean;
  first?: boolean;
  last?: boolean;
  page: string;
  onClick: (page: number) => void;
}

const BOUNDARY_COUNT = 2; // Edge item plus possible separator
const SEPARATOR = '...';
const START_PAGE = 1;

const PaginationItem: React.FC<PageItemProps> = (props) => {
  if (props.page === SEPARATOR) {
    return <PageDisabledStyled>{props.page}</PageDisabledStyled>;
  }

  const { first, last, active } = props;

  const handleClick = () => {
    props.onClick(parseInt(props.page));
  };
  return (
    <PageStyled variant="neutral" outlined onClick={handleClick} first={first} last={last} active={active}>
      {props.page}
    </PageStyled>
  );
};

export interface PaginationProps {
  current: number;
  total: number;
  siblingCount: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationProps> = (props) => {
  const constructPaginationArray = (): string[] => {
    const paginationItems = [];
    const window = props.siblingCount * 2 + 1;
    const totalItems = window + BOUNDARY_COUNT * 2;
    if (totalItems >= props.total) {
      return [...new Array(props.total)].map((_value, index) => (index + 1).toString());
    }

    const untiedFirstSibling = props.current - props.siblingCount;
    const canTieWindowAndLeftBoundary = untiedFirstSibling <= START_PAGE + BOUNDARY_COUNT;
    const canTieWindowAndRightBoundary = untiedFirstSibling >= props.total - BOUNDARY_COUNT - window + 1;

    const firstSibling = canTieWindowAndLeftBoundary
      ? START_PAGE + BOUNDARY_COUNT
      : canTieWindowAndRightBoundary
      ? props.total - BOUNDARY_COUNT - window + 1
      : untiedFirstSibling;

    paginationItems.push(START_PAGE.toString());

    if (canTieWindowAndLeftBoundary) {
      paginationItems.push((START_PAGE + 1).toString());
    } else {
      paginationItems.push(SEPARATOR);
    }

    for (let page = firstSibling; page < firstSibling + window; page++) {
      paginationItems.push(page.toString());
    }

    if (canTieWindowAndRightBoundary) {
      paginationItems.push((props.total - 1).toString());
    } else {
      paginationItems.push(SEPARATOR);
    }

    paginationItems.push(props.total.toString());
    return paginationItems;
  };

  const constructedPaginationArray = constructPaginationArray();

  return (
    <PaginationStyled>
      {constructedPaginationArray.map((val: string, index: number) => (
        <PaginationItem
          first={index === 0 || constructedPaginationArray[index - 1] === SEPARATOR}
          last={val === props.total.toString() || constructedPaginationArray[index + 1] === SEPARATOR}
          key={'name' + index}
          active={val === props.current.toString()}
          onClick={props.onPageChange}
          page={val}
        ></PaginationItem>
      ))}
    </PaginationStyled>
  );
};
