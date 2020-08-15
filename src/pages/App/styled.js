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

    > :nth-child(1) {
      
    }
    > :nth-child(2) {
      
    }

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
    padding: 4rem 0;
    
    @media (min-width: ${sizes.tablet}px) {
      width: 50%;
    }
  `
}
const Column = styled.div`
  ${ColumnStyle};
`;





export {
  Column,
  Columns,
  Jumbotron,
  Title,
  TitleDescription,
};