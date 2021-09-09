import { createGlobalStyle } from 'styled-components';

import { Color } from '@atomic/obj.constants';

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0.05);
    color: ${Color.Primary};
  }
`;
