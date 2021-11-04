import * as React from 'react';

import { ActivityIndicator } from '@atomic/atm.activity-indicator';

import {
  FloatingActionButtonContentStyled,
  FloatingActionButtonSpinnerStyled,
  FloatingActionButtonStyled,
} from './floating-action-button.component.style';

export interface FloatingActionButtonProps {
  disabled?: boolean;
  expanded?: boolean;
  loading?: boolean;
  onClick?: () => any;
  outlined?: boolean;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = (props) => (
  <FloatingActionButtonStyled onClick={props.onClick} disabled={props.loading || props.disabled} {...props}>
    <FloatingActionButtonContentStyled loading={props.loading}>{props.children}</FloatingActionButtonContentStyled>
    <FloatingActionButtonSpinnerStyled loading={props.loading}>
      <ActivityIndicator type="spinner" />
    </FloatingActionButtonSpinnerStyled>
  </FloatingActionButtonStyled>
);
