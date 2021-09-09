import styled from 'styled-components';

import { InputPlaceholder } from '@atomic/atm.typography';
import { Color, FontSize, Spacing } from '@atomic/obj.constants';
import { FontWeight } from '@atomic/obj.constants';

interface InputLabelProps {
  filled?: boolean;
}

export const InputLabelChildren = styled.span``;

export const InputLabelWrapperStyled = styled(InputPlaceholder)<InputLabelProps>`
  position: absolute;
  top: ${Spacing.Large};
  left: ${Spacing.Medium};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Normal};
  color: ${(props) => (props.filled ? Color.Primary : Color.Gray)};
`;

export const InputLabelStyled = styled.div`
  position: relative;
  padding-top: ${Spacing.Medium};
`;
