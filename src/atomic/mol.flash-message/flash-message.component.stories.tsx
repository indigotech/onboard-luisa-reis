import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Button } from '@atomic/atm.button';
import { Body } from '@atomic/atm.typography';

import { FlashMessage, FlashMessageProps } from '../mol.flash-message';

enum flashType {
  success = 'success',
  warning = 'warning',
  alert = 'alert',
  info = 'info',
}

export default {
  title: 'Atomic/Molecules/Flash Message',
  component: FlashMessage,
  argTypes: {
    type: { control: { type: 'select', options: flashType } },
  },
} as Meta;

export const Exemple: React.FC<FlashMessageProps> = (props) => {
  const [timestamp, setTimestamp] = React.useState(Date.now());

  function handleClick() {
    setTimestamp(Date.now());
  }

  return (
    <div>
      <FlashMessage type={props.type} dismissible={props.dismissible} key={timestamp}>
        <Body> This is an example of a flash message. This is an example of a flash message. </Body>
      </FlashMessage>
      <br />
      <Button variant="primary" onClick={handleClick}>
        Show flash message again
      </Button>
    </div>
  );
};
