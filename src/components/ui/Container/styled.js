import styled from 'styled-components/macro';

const wrapper = ({ theme }) => {
  const { sizes } = theme.main;
  
  return `
    background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};

    @media (min-width: ${sizes.tablet}px) {
      margin: 0 auto;
      max-width: 720px;
    }
    @media (min-width: ${sizes.desktop}px) {
      max-width: 960px;
    }
    @media (min-width: ${sizes.largeDesktop}px) {
      max-width: 1140px;
    }
  `
}
  
const wrapperStyled = styled.div`
  ${wrapper};
`;

export {
    wrapper,
    wrapperStyled,
};