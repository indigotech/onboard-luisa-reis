import * as React from 'react';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Fade } from '@atomic/obj.animation/animation.component.style';

import {
  FlashMessageCloseStyled,
  FlashMessageContentStyled,
  FlashMessageStyled,
} from './flash-message.component.style';

export type FlashMessageType = 'alert' | 'success' | 'info' | 'warning';

export interface FlashMessageProps {
  type?: FlashMessageType;
  outlined?: boolean;
  dismissible?: boolean;
  autoClose?: boolean;
  onClose?: () => void;
}

interface FlashMessageState {
  hidden?: boolean;
  remove?: boolean;
}

const FlashIconTypes = {
  alert: FaIcon.FlashAlert,
  info: FaIcon.FlashInfo,
  success: FaIcon.FlashSuccess,
  warning: FaIcon.FlashWarning,
};

const timeToHide = 10 * 1000;

/**
 * This is an uncontrolled flash message.
 * It starts NOT hidden and after "timeToHide" seconds it is removed from DOM.
 * The user can also close it manually
 */
export class FlashMessage extends React.PureComponent<FlashMessageProps, FlashMessageState> {
  public static defaultProps: Partial<FlashMessageProps> = {
    type: 'info',
    dismissible: true,
    outlined: false,
    autoClose: true,
  };

  private timeoutList: number[] = [];

  constructor(props: FlashMessageProps) {
    super(props);

    this.state = {
      hidden: false,
      remove: false,
    };
  }

  componentDidMount() {
    this.startCloseTimer();
  }

  componentWillUnmount() {
    this.clearTimeoutList();
  }

  render() {
    const Icon = FlashIconTypes[this.props.type];
    const { children, dismissible, ...other } = this.props;
    return this.state.remove ? null : (
      <Fade show={!this.state.hidden}>
        <FlashMessageStyled {...other}>
          <Icon />
          <FlashMessageContentStyled>{children}</FlashMessageContentStyled>
          {dismissible ? (
            <FlashMessageCloseStyled onClick={this.handleCloseClick} {...other}>
              <FaIcon.Close />
            </FlashMessageCloseStyled>
          ) : null}
        </FlashMessageStyled>
      </Fade>
    );
  }

  private handleCloseClick = () => {
    this.startRemoveFromDomAnimation();
  };

  private startCloseTimer = () => {
    if (this.props.autoClose) {
      const timeout = setTimeout(() => this.startRemoveFromDomAnimation(), timeToHide);
      this.timeoutList.push(timeout);
    }
  };

  private startRemoveFromDomAnimation = () => {
    this.setState({ hidden: true }, () => {
      const timeout = setTimeout(() => this.removeFromDom(), 300);
      this.timeoutList.push(timeout);
    });
  };

  private removeFromDom = () => {
    this.setState({ remove: true }, () => {
      this.clearTimeoutList();
      this.props.onClose?.();
    });
  };

  private clearTimeoutList = () => {
    this.timeoutList.forEach((element: number) => clearTimeout(element));
  };
}
