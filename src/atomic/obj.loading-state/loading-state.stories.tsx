import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { Button } from '@atomic/atm.button';
import { Frame } from '@atomic/atm.frame';
import { Body, H2, H3 } from '@atomic/atm.typography';
import { TextShimmerBoxStyled } from '@atomic/mol.shimmer/shimmer.component.style';
import { Hbox } from '@atomic/obj.box';

import Image from '../../assets/img/img_logo.jpeg';

import { LoadingState as LoadingStateComponent } from './loading-state.component';

export default {
  title: 'Atomic/Objects/Loading State',
  component: LoadingStateComponent,
} as Meta;

interface LoadingStates {
  loading?: boolean;
  error?: boolean;
  data?: boolean;
}

export const LoadingState: React.FC = () => {
  const [loadingState, seLoadingStata] = React.useState<LoadingStates>({
    loading: false,
    error: false,
    data: false,
  });

  const simulateLoading = () => {
    seLoadingStata({ ...loadingState, loading: true });
    window.setTimeout(() => {
      seLoadingStata({ loading: false, data: true, error: false });
    }, 1000);
  };

  const simulateLoadingWithError = () => {
    seLoadingStata({ ...loadingState, loading: true });
    window.setTimeout(() => {
      seLoadingStata({ loading: false, data: false, error: true });
    }, 2000);
  };

  const resetStates = () => {
    seLoadingStata({ ...loadingState, loading: true });
    window.setTimeout(() => {
      seLoadingStata({ loading: false, data: false, error: false });
    }, 1000);
  };

  return (
    <LoadingStateComponent loading={loadingState.loading} error={loadingState.error} data={loadingState.data}>
      <LoadingStateComponent.Shimmer>
        <TextShimmerBoxStyled height="101px" />
      </LoadingStateComponent.Shimmer>
      <LoadingStateComponent.Error>
        <Hbox>
          <Hbox.Item>
            <Body>Some error occurred. LoadingStateComponent.Error is optional</Body>
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item noGrow>
            <Button variant="secondary" onClick={resetStates}>
              Back to Start
            </Button>
          </Hbox.Item>
        </Hbox>
      </LoadingStateComponent.Error>
      <LoadingStateComponent.NoData>
        <H2>Empty state</H2>
        <Body>Add LoadingStateComponent.NoData if you need an empty state placeholder</Body>
        <br />
        <Hbox>
          <Hbox.Item>
            <Button variant="primary" onClick={simulateLoading}>
              Load data with success
            </Button>
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item>
            <Button variant="alert" onClick={simulateLoadingWithError}>
              Load with error
            </Button>
          </Hbox.Item>
        </Hbox>
      </LoadingStateComponent.NoData>
      <Frame>
        <Hbox>
          <Hbox.Item hAlign="flex-start" noGrow>
            <img alt="logo" src={Image} width="40px" />
          </Hbox.Item>
          <Hbox.Separator />
          <Hbox.Item vAlign="flex-start">
            <H3>This is a fake data</H3>
          </Hbox.Item>
          <Hbox.Item noGrow>
            <Button variant="secondary" onClick={simulateLoadingWithError}>
              Load again
            </Button>
          </Hbox.Item>
        </Hbox>
      </Frame>
    </LoadingStateComponent>
  );
};
