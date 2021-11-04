import styled, { css, keyframes } from 'styled-components';

import { Border, Spacing } from '@atomic/obj.constants';

const shimmerAnimation = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export interface ShimmerProps {
  width?: string;
  height?: string;
  margin?: string;
}

export const BaseShimmerBoxStyled = styled.div`
  animation: ${shimmerAnimation} 3s linear infinite;
  animation-fill-mode: forwards;
  background: linear-gradient(90deg, #f5f5f5 8%, #eaeaea 38%, #f5f5f5 60%);
  background-size: 1000px;
  position: relative;
  border-radius: ${Border.Radius};
`;

export const textShimmerType = (width: string, height?: string, margin?: string) => css`
  height: ${height};
  width: ${width};
  margin: ${margin || `${Spacing.Small} 0`};
`;

export const TextShimmerBoxStyled = styled(BaseShimmerBoxStyled)<ShimmerProps>`
  ${(props) => textShimmerType(props.width ? props.width : '100%', props.height, props.margin)};
`;

export const thumbShimmerType = (x: string, y?: string, margin?: string) => css`
  width: ${x};
  height: ${y ? y : x};
  margin: ${margin || 'auto'};
`;

export const ThumbShimmerBoxStyled = styled(BaseShimmerBoxStyled)<ShimmerProps>`
  ${(props) => thumbShimmerType(props.width ? props.width : '100%', props.height, props.margin)};
`;

export interface ShimmerAspectRatioBoxProps {
  ratioPercentage: number;
}

export const ShimmerAspectRatioBoxStyled = styled(BaseShimmerBoxStyled)<ShimmerAspectRatioBoxProps>`
  width: 100%;
  padding-bottom: ${(props) => props.ratioPercentage}%;
`;

export interface ShimmerCircleProps {
  /** in pixels */
  radius?: number;
}

export const ShimmerCircleStyled = styled(BaseShimmerBoxStyled)<ShimmerCircleProps>`
  height: ${(props) => 2 * props.radius}px;
  width: ${(props) => 2 * props.radius}px;
  border-radius: ${(props) => props.radius}px;
`;
