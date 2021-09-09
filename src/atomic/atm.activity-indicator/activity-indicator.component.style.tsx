import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Color } from '@atomic/obj.constants';

interface ActivityIndicatorStyledProps {
  light?: boolean;
}

export const ActivityIndicatorStyled = styled(FontAwesomeIcon)<ActivityIndicatorStyledProps>`
  color: ${(props) => (props.light == null ? 'inherit' : props.light ? Color.White : Color.Primary)};
  display: inline-block;
`;
