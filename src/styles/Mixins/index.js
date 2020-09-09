import { css } from 'styled-components';

export const visuallyHidden = () => css`
  clip: rect(0, 0, 0, 0);
  height: 0;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 0;
`;
