import * as React from 'react';

import {
  TableColumnStyled,
  TableHeaderStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from './table.component.style';

export const TR = TableRowStyled;
export const TD = TableColumnStyled;
export const THead = TableHeadStyled;
export const TH = TableHeaderStyled;

export class Table extends React.Component {
  render() {
    const { header, body } = this.getTypedChildren();

    return (
      <TableStyled>
        {header}
        <tbody>{body}</tbody>
      </TableStyled>
    );
  }

  private getTypedChildren() {
    let header;
    const body: any[] = [];

    React.Children.forEach(this.props.children, (child: any) => {
      if (child?.type) {
        switch (child.type) {
          case THead:
            header = child;
            break;
          default:
            body.push(child);
        }
      } else {
        body.push(child);
      }
    });

    return { header, body };
  }
}
