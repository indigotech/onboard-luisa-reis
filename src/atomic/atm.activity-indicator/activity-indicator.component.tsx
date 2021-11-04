import * as React from 'react';

import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faCog, faSync, faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { ActivityIndicatorStyled } from './activity-indicator.component.style';

export type ActivityIndicatorType = 'spinner' | 'circle-notch' | 'sync' | 'cog';
export interface ActivityIndicatorProps {
  type: ActivityIndicatorType;
  size?: SizeProp;
  light?: boolean;
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = (props) => {
  const { type, size, light } = props;
  let activityIndicator: JSX.Element;
  switch (type) {
    case 'circle-notch':
      activityIndicator = <ActivityIndicatorStyled icon={faCircleNotch} size={size} light={light} spin />;
      break;
    case 'cog':
      activityIndicator = <ActivityIndicatorStyled icon={faCog} size={size} light={light} spin />;
      break;
    case 'sync':
      activityIndicator = <ActivityIndicatorStyled icon={faSync} size={size} light={light} spin />;
      break;
    case 'spinner':
      activityIndicator = <ActivityIndicatorStyled icon={faSpinner} size={size} light={light} spin />;
      break;
  }
  return activityIndicator;
};
