import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Button, FloatingActionButton, ButtonProps } from '@atomic/atm.button';
import { FaIcon } from '@atomic/atm.fa-icon';

enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  alert = 'alert',
  neutral = 'neutral',
  callToAction = 'callToAction',
  accessory = 'accessory',
  link = 'link',
}

export default {
  title: 'Atomic/Atoms/Button',
  argTypes: {
    variant: { control: { type: 'select', options: ButtonVariant } },
    outlined: { control: { type: 'boolean' } },
    expended: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    text: { control: { type: 'text' } },
  },
} as Meta;

export const ButtonWithLabel: React.FC<ButtonProps & { text: string }> = (props) => (
  <Button
    variant={props.variant ?? 'primary'}
    onClick={() => {
      alert('Clicked');
    }}
    outlined={props.outlined}
    expanded={props.expanded}
    loading={props.loading}
    disabled={props.disabled}
  >
    <FaIcon.Bus />
    <p>{!!props.text ? props.text : 'Button Label'}</p>
  </Button>
);

export const ButtonWithLink: React.FC<ButtonProps> = (props) => (
  <Button
    variant="link"
    onClick={() => {
      alert('Open a link');
    }}
    outlined={props.outlined}
    expanded={props.expanded}
    loading={props.loading}
    disabled={props.disabled}
  >
    <FaIcon.Bus />
    Link button
  </Button>
);

export const FontingActionButton: React.FC<ButtonProps> = (props) => (
  <FloatingActionButton loading={props.loading}>
    <FaIcon.Heart />
  </FloatingActionButton>
);
