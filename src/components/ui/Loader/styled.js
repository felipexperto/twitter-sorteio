import styled, { css, keyframes } from 'styled-components/macro';

const rotating = keyframes`
  from {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

const animation = () => css`
  -webkit-animation: ${rotating} 1s linear infinite;
  -moz-animation: ${rotating} 1s linear infinite;
  animation: ${rotating} 1s linear infinite;
`;

const defaultHeight = 80;
const defaultWidth = 80;

const dimensions = (height, width) => css`
  height: ${height}px;
  width: ${width}px;
`;

const SpinningLoaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const SpinningLoaderAnimation = styled.div`
  ${dimensions(defaultHeight, defaultWidth)}
  margin-bottom: 1rem;
`;

const SpinningLoaderBar = styled.div`
  ${animation};
  ${dimensions(defaultHeight, defaultWidth)};
  border: 4px solid ${({ theme }) => theme.main.colors.white};
  border-left-color: transparent;
  border-radius: 50%;
  position: absolute;
`;

const SpinningLoaderIcon = styled.div`
  ${dimensions(defaultHeight, defaultWidth)}
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;

  > svg {
    ${dimensions(defaultHeight * 0.375, defaultWidth * 0.375)}
  }
`;

const SpinningLoaderMessage = styled.div`
  color: ${({ theme }) => theme.main.colors.white};
  font-weight: ${({ theme }) => theme.main.fonts.weight.bold };
  line-height: 1.4em;
  text-align: center;
`;

export {
  SpinningLoaderAnimation,
  SpinningLoaderBar,
  SpinningLoaderIcon,
  SpinningLoaderMessage,
  SpinningLoaderWrapper,
};
