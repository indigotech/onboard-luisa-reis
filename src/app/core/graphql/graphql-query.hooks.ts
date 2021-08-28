import * as React from 'react';

import {
  useLazyQuery as useApolloLazyQuery,
  useQuery as useApolloQuery,
  ErrorPolicy,
  FetchMoreOptions,
  OperationVariables,
  WatchQueryFetchPolicy,
} from '@apollo/client';