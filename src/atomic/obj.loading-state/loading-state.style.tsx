import styled from 'styled-components';
export interface LoadingStateDataProps {
  visible?: boolean;
}

export interface LoadingProps {
  visible?: boolean;
  topMost?: boolean;
}

export const LoadingStateStyled = styled.div`
  position: relative;
`;

export const LoadingStateBlockStyled = styled.div<LoadingStateDataProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const LoadingStyled = styled.div<LoadingProps>`
  top: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: ${(props) => (props.topMost ? 'fixed' : 'absolute')};
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  align-items: center;
  justify-content: center;
`;
