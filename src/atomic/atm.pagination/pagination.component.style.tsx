import styled from 'styled-components';

import { ButtonStyled, VariantTypes } from '@atomic/atm.button/button.component.style';
import { Border, Color, Spacing } from '@atomic/obj.constants';

export const PaginationStyled = styled.div`
  text-align: center;
`;

export interface PageStyledProps {
  variant?: VariantTypes;
  active?: boolean;
  first?: boolean;
  last?: boolean;
  onClick: (page: number) => void;
  outlined: boolean;
}

export const PageStyled = styled(ButtonStyled)<PageStyledProps>`
  border-width: ${Border.Width};
  border-right-width: 0;
  background-color: ${(props) => (props.active ? Color.Primary : 'transparent')};
  color: ${(props) => (props.active ? Color.White : Color.Neutral)};
  content: ${(props) => (props.first ? 'true' : 'false')};

  ${(props) => {
    let borderRadius = 'border-radius: 0;';

    if (props.first && props.last) {
      borderRadius = `border-radius: ${Border.RadiusLarge}; border-right-width: ${Border.Width};`;
    } else if (props.first && !props.last) {
      borderRadius = `border-radius: ${Border.RadiusLarge} 0 0 ${Border.RadiusLarge};`;
    } else if (!props.first && props.last) {
      borderRadius = `border-radius: 0 ${Border.RadiusLarge} ${Border.RadiusLarge} 0; border-right-width: ${Border.Width};`;
    }

    return borderRadius;
  }}

  & + & {
    margin-left: 0;
  }
`;

export const PageDisabledStyled = styled.label`
  padding: ${Spacing.Medium};
  border-width: 0;
`;
