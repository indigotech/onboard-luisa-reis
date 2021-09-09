import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Button } from '@atomic/atm.button';
import { H2 } from '@atomic/atm.typography';

import { Fade } from './animation.component.style';

export default { title: 'Atomic/Objects/Animation' } as Meta;

export const FadeIn: React.FC = () => {
  const [timestamp, setTimestamp] = React.useState(Date.now());

  function handleClick() {
    setTimestamp(Date.now());
  }
  return (
    <>
      <Fade key={timestamp} show>
        <H2> Fade in example </H2>
      </Fade>
      <Button variant="primary" onClick={handleClick}>
        see fade in
      </Button>
    </>
  );
};

export const FadeOut: React.FC = () => {
  const [timestamp, setTimestamp] = React.useState(Date.now());

  function handleClick() {
    setTimestamp(Date.now());
  }

  return (
    <>
      <Fade key={timestamp} show={false}>
        <H2> Fade out example </H2>
      </Fade>
      <Button variant="primary" onClick={handleClick}>
        see fade out
      </Button>
    </>
  );
};

export const Toggle: React.FC = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Fade show={show}>
        <H2> Fade out example </H2>
      </Fade>
      <Button variant="primary" onClick={() => setShow(!show)}>
        toggle
      </Button>
    </>
  );
};
