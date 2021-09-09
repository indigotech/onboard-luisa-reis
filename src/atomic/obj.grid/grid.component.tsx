import { Col as FlexCol, Grid as FlexGrid, Row as FlexRow } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import { Breakpoint, Spacing } from '@atomic/obj.constants';

export interface RowProps {
  mb?: boolean;
  mt?: boolean;
  noGutter?: boolean;
}

const RowStyled = styled(FlexRow)<RowProps>`
  margin-bottom: ${(props) => (props.mb ? Spacing.Medium : '0px')};
  margin-top: ${(props) => (props.mt ? Spacing.Medium : '0px')};
  ${(props) => {
    if (props.noGutter) {
      return `overflow: hidden;
              margin-left: -${rowMargin}rem;
              margin-right: -${rowMargin}rem;`;
    } else {
      return '';
    }
  }}
`;

export const Grid = FlexGrid;
export const Col = FlexCol;
export const Row = RowStyled;

export const GridSettings = {
  flexboxgrid: {
    gridSize: 12,
    // Defaults
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    breakpoints: Breakpoint,
  },
};

export const rowMargin = GridSettings.flexboxgrid.outerMargin + GridSettings.flexboxgrid.gutterWidth / 2;
export const VSeparator = styled.div`
  margin-top: ${Spacing.Small} 
`
