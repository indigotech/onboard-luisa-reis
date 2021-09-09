import * as React from 'react';

import { ActivityIndicator } from '@atomic/atm.activity-indicator';

import { LoadingCenteredStyled } from './loading.component.style';

export const LoadingCentered = () => (
  <LoadingCenteredStyled>
    <ActivityIndicator type="spinner" />
  </LoadingCenteredStyled>
);
