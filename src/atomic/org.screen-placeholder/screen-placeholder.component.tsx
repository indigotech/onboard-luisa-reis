import * as React from 'react';

import { LazyLoadImage } from '@atomic/atm.lazy-load-image';
import { Body, H3 } from '@atomic/atm.typography';
import { Col, Row } from '@atomic/obj.grid';

import { ScreenPlaceholderImageWrapperStyled, ScreenPlaceholderStyled } from './screen-placeholder.component.style';

export interface ScreenPlaceholderProps {
  src: string;
  title: string;
  message: string;
}

export const ScreenPlaceholder: React.FC<ScreenPlaceholderProps> = (props) => (
  <ScreenPlaceholderStyled>
    <ScreenPlaceholderImageWrapperStyled>
      <LazyLoadImage src={props.src} aspectRatio={1} />
    </ScreenPlaceholderImageWrapperStyled>
    <Row mb>
      <Col xs={12}>
        <H3>{props.title}</H3>
        <Body>{props.message}</Body>
      </Col>
    </Row>
    <Row mb>
      <Col xs={12}>{props.children}</Col>
    </Row>
  </ScreenPlaceholderStyled>
);
