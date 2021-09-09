import * as React from 'react';

import {
  Body,
  BodySecondary,
  DD,
  DT,
  H1,
  H2,
  H3,
  H4,
  HDisplay,
  InputDisabled,
  InputLabel,
  InputPlaceholder,
  InputValue,
  ProductPrice,
} from './typography.component.style';

export const TypographyComponents: React.FC = (props) => {
  return (
    <div>
      <Body {...props} />
      <BodySecondary {...props} />
      <DD />
      <DT />
      <H1 />
      <H2 />
      <H3 />
      <H4 />
      <HDisplay />
      <InputDisabled />
      <InputLabel {...props} />
      <InputPlaceholder />
      <InputValue />
      <ProductPrice {...props} />
    </div>
  );
};
