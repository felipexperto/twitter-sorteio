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
const CardWinnerId = styled.h5`
  font-size: 24px;
  margin-bottom: .5rem;
  margin-top: 1rem;
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
  
`;
const CardListItem = styled.div`
  
`;
const CardListItemImage = styled.div`
  
`;
const CardListItemNick = styled.h5`
  
`;
const CardListItemId = styled.h6`
  
`;
const CardListItemPosition = styled.div`
  
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
  CardListItemImage,
  CardListItemNick,
  CardListItemId,
  CardListItemPosition,
};