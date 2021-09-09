import styled from 'styled-components';

import { Spacing } from '@atomic/obj.constants';

interface BoxProps {
  // src: https://www.w3schools.com/cssref/css3_pr_align-items.asp
  hAlign?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
  // src: https://www.w3schools.com/cssref/css3_pr_justify-content.asp
  vAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
}

export interface HboxProps extends BoxProps {
  noGrow?: boolean;
}

const HboxStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`;

export const Hbox: any = HboxStyled;
Hbox.displayName = 'Hbox';

Hbox.Item = styled.div<HboxProps>`
  flex-direction: column;
  display: flex;
  ${(props) => (!props.noGrow ? 'flex: 1;' : null)}
  justify-content: ${(props) => (props.vAlign ? props.vAlign : 'flex-start')};
  align-items: ${(props) => (props.hAlign ? props.hAlign : 'stretch')};
`;
Hbox.Item.displayName = 'Hbox.Item';

Hbox.Separator = styled.div`
  width: ${Spacing.Small};
`;
Hbox.Separator.displayName = 'Hbox.Separator';

export const Separator = styled.div`
  margin-bottom: ${Spacing.Large};
`;
