import styled from 'styled-components';

import { Border, Color, FontFamily, Spacing } from '@atomic/obj.constants';

interface TextAlignProps {
  textAlign?: 'right' | 'center' | 'left';
}

export const TableStyled = styled.table`
  border-style: solid;
  border-width: 0;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;
  font-family: ${FontFamily.Primary};
`;

export const TableHeadStyled = styled.thead``;

export const TableHeaderStyled = styled.th<TextAlignProps>`
  color: ${Color.Primary};
  padding: ${Spacing.Medium};
  text-align: ${(props) => props.textAlign || 'center'};
`;

export const TableColumnStyled = styled.td<TextAlignProps>`
  border-style: solid;
  border-color: ${Border.Color};
  border-width: 0;
  padding: ${Spacing.XSmall};
  text-align: ${(props) => props.textAlign || 'center'};

  &:last-child {
    padding-right: ${Spacing.XSmall};
    border-right-width: 0;
  }
`;

export const TableRowStyled = styled.tr`
  ${(props) =>
    props.onClick &&
    `
    &:hover > td {
      background-color: ${Color.GrayXLight};
      cursor: pointer;
    }`}

  &:nth-child(odd) {
    background-color: ${Color.GrayXLight};
  }
`;
