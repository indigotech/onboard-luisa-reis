import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { H2 } from '@atomic/atm.typography';
import { Col, Grid, Row } from '@atomic/obj.grid';

import Logo from '../../assets/img/img_logo.jpeg';

import { LazyLoadImage as LazyLoadImageComponent, LazyLoadImageProps } from './lazy-load-image.component';

export default {
  title: 'Atomic/Atoms/Lazy Load Image',
  component: LazyLoadImageComponent,
} as Meta;

export const LazyLoadImage: React.FC<LazyLoadImageProps> = (props) => (
  <Grid fluid>
    <H2>LazyLoadImage</H2>
    <Row>
      <Col xs={6}>
        <LazyLoadImageComponent aspectRatio={props.aspectRatio} round={props.round} src={Logo} />
      </Col>
      <Col xs={6}>
        <LazyLoadImageComponent aspectRatio={9 / 16} src={Logo} />
      </Col>
    </Row>
  </Grid>
);
