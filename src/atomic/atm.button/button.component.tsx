import * as React from 'react';

import { LocationDescriptorObject, Path } from 'history';

import { ActivityIndicator } from '@atomic/atm.activity-indicator';

import {
  ButtonContentStyled,
  ButtonSpinnerStyled,
  ButtonStyled,
  VariantTypes,
  // todo: LinkButtonStyled,
} from './button.component.style';

export interface ButtonProps {
  /** Enables/disables a component. */
  disabled?: boolean;
  /** Enables/disables full-width button. */
  expanded?: boolean;
  /** Enables/disables loading indicator. */
  loading?: boolean;
  /** Event. Fired when button is clicked. */
  onClick?: () => any;
  /** Enables/disables button outlined style. */
  outlined?: boolean;
  /** Adds a <a target= /> attribute. Applies only when "to" props is declared. */
  target?: '_self' | '_parent' | '_blank' | '_top';
  /** When declared, button component is rendered as <a href.. />. Otherwise, it renders a <button /> element. */
  to?: Path | LocationDescriptorObject | string;
  /** Changes button's visual style. */
  variant: VariantTypes;
  /**
   * why is it necessary? https://github.com/indigotech/eok-weekly/issues/114
   * https://www.w3schools.com/tags/att_button_type.asp
   */
  type?: 'button' | 'submit' | 'reset'; // default-value: "button"
}

interface WithLinkProps extends ButtonProps {
  children?: any;
}

export class  Button extends React.Component<ButtonProps, undefined> {
  static defaultProps = {
    disabled: false,
    expanded: false,
    loading: false,
    outlined: false,
    kind: 'primary',
    type: 'button',
  };

  render() {
    // todo: return getButton(this.props.to ? LinkButtonStyled : ButtonStyled, this.props);
    return getButton(this.props.to ? undefined : ButtonStyled, this.props);
  }
}

const getButton = (Component: any, props: WithLinkProps) => {
  const { loading, disabled, type, outlined, target, expanded, ...others } = props;
  return (
    <Component
      disabled={loading || disabled}
      type={!props.to ? type : undefined}
      outlined={outlined ? 1 : 0}
      expanded={expanded ? 1 : 0}
      target={target}
      // https://developers.google.com/web/tools/lighthouse/audits/noopener
      rel={target === '_blank' ? 'noopener' : undefined}
      {...others}
    >
      <ButtonContentStyled processing={loading}>{props.children}</ButtonContentStyled>
      <ButtonSpinnerStyled processing={loading}>
        <ActivityIndicator type="spinner" />
      </ButtonSpinnerStyled>
    </Component>
  );
};
