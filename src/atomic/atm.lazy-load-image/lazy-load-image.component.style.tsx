import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { Color } from '@atomic/obj.constants';

interface ImageStyledProps {
  loaded: boolean;
  round: boolean;
  height: number;
}

export const LazyLoadImageStyled = styled.img<ImageStyledProps>`
  display: block;
  width: 100%;
  transition: opacity 0.6s ease;
  opacity: ${(props) => (props.loaded ? '1' : '0')};
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  max-height: ${(props) => (props.loaded ? 'none' : '0')};
  border-radius: ${(props) => (props.round ? '50%' : '0')};
  -webkit-user-drag: none;
`;

interface PlaceholderStyledProps {
  aspectRatio: number;
}

export const LazyLoadPlaceholderStyled = styled.div<PlaceholderStyledProps>`
  width: 100%;
  padding-bottom: ${(props) => (props.aspectRatio ? props.aspectRatio * 100 + '%' : 'auto')};
  background-color: ${Color.GrayLight};
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
`;

const placeholderImage = (height: number) => `
  color: ${Color.Gray};
  font-size: ${height}px;
  position: absolute;
  top: calc(50% - ${height / 2}px);
`;

export const LazyLoadPlaceholderImageStyled = styled(FaIcon.Image)`
  ${placeholderImage(28)}
`;

export const LazyLoadErrorImageStyled = styled(FaIcon.Ban)`
  ${placeholderImage(32)}
`;
