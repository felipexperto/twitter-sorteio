import styled from 'styled-components/macro';

const cardStyle = ({ theme }) => {
  const { sizes } = theme.main;
  
  return `
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 16px;
    overflow: hidden;

    @media (min-width: ${sizes.tablet}px) {
      border: 0;
    }
    @media (min-width: ${sizes.desktop}px) {
      
    }
    @media (min-width: ${sizes.largeDesktop}px) {
      
    }
  `
}
  
const Card = styled.div`
  ${cardStyle};
`;
const CardTitle = styled.h5`
  font-size: 24px;
  margin-top: 0;
`;
const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.main.colors.white };
  padding: 2rem;
  text-align: center; 
`;
  const CardBody = styled.div`
  background-color: ${({ theme }) => theme.main.colors.extraextralightgray };
  padding: 2rem;
`;

const CardWinnerImage = styled.img`
  background-color: ${({ theme }) => theme.main.colors.extralightgray };
  border: 1rem solid ${({ theme }) => theme.main.colors.extraextralightgray };
  border-radius: 100rem;
  max-width: 90%;
  width: 120px;
`;
const CardWinnerId = styled.a`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: .5rem;
  margin-top: 1rem;

  &:active,
  &:focus,
  &:hover,
  &:link,
  &:visited {
    color: ${({ theme }) => theme.main.colors.black };
  }
  &:active,
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;
const CardWinnerNick = styled.h6`
  color: ${({ theme }) => theme.main.colors.lightgray };
  font-size: 18px;
  margin-bottom: 1rem;
  margin-top: 0;
`;


const CardTotalRetweets = styled.div`
  color: ${({ theme }) => theme.main.colors.gray };
  font-size: .8rem;
`;

const CardList = styled.div`
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
`;
const CardListItemColumn = styled.div`
  
`;
const CardListItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  padding: 1rem .5rem;

  > :nth-child(1) {
    text-align: right;
    width: 20%;
  }
  > :nth-child(2) {
    padding: 0 1rem;
    width: 70%;
  }
  > :nth-child(3) {
    width: 10%;
  }
`;
const CardListItemImage = styled.img`
  border-radius: 100rem;
  max-width: 100%;
  width: 60px;
`;
const CardListItemNick = styled.div`
  color: ${({ theme }) => theme.main.colors.darkgray };
  font-size: .9rem;
`;
const CardListItemId = styled.a`
  color: ${({ theme }) => theme.main.colors.black };
  display: block;
  font-weight: ${({ theme }) => theme.main.fonts.weight.bold };
  margin-bottom: .25rem;
`;
const CardListItemPosition = styled.div`
  
  > div {
    background-color: ${({ theme }) => theme.main.colors.blue };
    border-radius: 100rem;
    color: ${({ theme }) => theme.main.colors.white };
    display: inline-block;
    font-size: .8rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    width: 1.5rem;
  }
`;


export {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardWinnerImage,
  CardWinnerNick,
  CardWinnerId,
  CardTotalRetweets,
  CardList,
  CardListItem,
  CardListItemColumn,
  CardListItemImage,
  CardListItemNick,
  CardListItemId,
  CardListItemPosition,
};