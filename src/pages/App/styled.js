import styled from 'styled-components/macro';

const Jumbotron = styled.section`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  padding: 4rem 0;
  text-align: center;
`;

const centerAlignment = ({ theme }) => `
  margin: 0 auto;
  max-width: 100%;
  width: ${theme.main.sizes.phone}px;
`;
const Title = styled.h2`
  ${centerAlignment};
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: .5rem;
`;
const TitleDescription = styled.p`
  ${centerAlignment};
  font-size: 1.25rem;
  font-weight: 300;
`;

const ColumnsStyle = ({ theme }) => {
  const { sizes } = theme.main;
  
  return `
    display: flex;
    flex-direction: column;

    @media (min-width: ${sizes.tablet}px) {
      flex-direction: row;
    }
  `
}
const Columns = styled.div`
  ${ColumnsStyle};
`;
const ColumnStyle = ({ theme }) => {
  const { sizes } = theme.main;
  
  return `
    padding: 4rem;
    
    @media (min-width: ${sizes.tablet}px) {
      padding: 2rem;
      width: 50%;
    }
    @media (min-width: ${sizes.desktop}px) {
      padding: 4rem;
    }
  `
}
const Column = styled.div`
  ${ColumnStyle};
`;
const ColumnFirst = styled(Column)`
  background-color: ${({ theme }) => theme.main.colors.lightblue};
  overflow: hidden;
  position: relative;

  svg {
    height: 160vh;
    position: absolute;
    right: -50vh;
    top: -30vh;
    z-index: 0;
  }
`;
const ColumnSecond = styled(Column)`

`;

const ContainerRelative = styled.div`
  position: relative;
`;

export {
  ColumnFirst,
  ColumnSecond,
  Columns,
  ContainerRelative,
  Jumbotron,
  Title,
  TitleDescription,
};