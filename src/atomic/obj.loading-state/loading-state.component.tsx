import * as React from 'react';

import { ActivityIndicator } from '@atomic/atm.activity-indicator';

import { LoadingStateBlockStyled, LoadingStateStyled, LoadingStyled } from './loading-state.style';

export interface LoadingStateProps {
  topMost?: boolean;
  loading?: boolean;
  enableActivityIndicator?: boolean;
  error?: boolean;
  data?: boolean;
}

const StateShimmer: React.FC = (props) => <>{props.children}</>;
StateShimmer.displayName = 'StateShimmer';

const StateError: React.FC = (props) => <>{props.children}</>;
StateError.displayName = 'StateError';

const StateNoData: React.FC = (props) => <>{props.children}</>;
StateNoData.displayName = 'StateNoData';

export class LoadingState extends React.Component<LoadingStateProps, undefined> {
  static defaultProps = {
    data: true,
    enableActivityIndicator: true,
    topMost: false,
  };

  static Shimmer = StateShimmer;
  static Error = StateError;
  static NoData = StateNoData;

  render() {
    const { shimmer, error, noData, data } = this.getTypedChildren();
    return (
      <LoadingStateStyled>
        <LoadingStateBlockStyled visible={this.props.error && !this.props.loading && !this.props.data}>
          {error}
        </LoadingStateBlockStyled>
        <LoadingStateBlockStyled visible={!this.props.data && this.props.loading}>{shimmer}</LoadingStateBlockStyled>
        <LoadingStateBlockStyled visible={!this.props.error && !this.props.data && !this.props.loading}>
          {noData}
        </LoadingStateBlockStyled>
        <LoadingStateBlockStyled visible={this.props.data}>{this.props.data && data}</LoadingStateBlockStyled>
        <LoadingStyled
          visible={this.props.data && this.props.loading && this.props.enableActivityIndicator}
          topMost={this.props.topMost}
        >
          <ActivityIndicator type="spinner" />
        </LoadingStyled>
      </LoadingStateStyled>
    );
  }

  private getTypedChildren() {
    let shimmer;
    let error;
    let noData;
    const data: any[] = [];

    React.Children.map(this.props.children, (child: any) => {
      if (child?.type) {
        switch (child.type.displayName) {
          case StateShimmer.displayName:
            shimmer = child;
            break;
          case StateError.displayName:
            error = child;
            break;
          case StateNoData.displayName:
            noData = child;
            break;
          default:
            data.push(child);
        }
      } else {
        data.push(child);
      }
    });

    return { shimmer, error, noData, data };
  }
}
