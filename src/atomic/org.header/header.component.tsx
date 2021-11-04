import * as React from 'react';

import { HeaderDeskStyled, HeaderMobileStyled } from './header.component.style';

const HeaderMobile: React.FC = (props) => <HeaderMobileStyled>{props.children}</HeaderMobileStyled>;
const HeaderDesk: React.FC = (props) => <HeaderDeskStyled>{props.children}</HeaderDeskStyled>;

export class Header extends React.Component {
  static Mobile = HeaderMobile;
  static Desk = HeaderDesk;

  render() {
    return <div className="appHeader">{this.props.children}</div>;
  }
}
