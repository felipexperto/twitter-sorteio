import React from 'react';

import * as S from './styled';

const RandomList = () => {

	return (
		<S.Card>
			<S.CardHeader>
				<S.CardTitle>Perfil sorteado</S.CardTitle>
				<S.CardWinnerImage src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="" />
				<S.CardWinnerId href="#">@BarackObama</S.CardWinnerId>
				<S.CardWinnerNick>Barack Obama</S.CardWinnerNick>
				<S.CardTotalRetweets>De um total de XX retweets</S.CardTotalRetweets>
			</S.CardHeader>
			<S.CardBody>
				<S.CardList>

					{
						[2,3,4,5,6,7,8,9,100].map(item => (
							<S.CardListItem key={item}>
								<S.CardListItemColumn>
									<S.CardListItemImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
								</S.CardListItemColumn>
								<S.CardListItemColumn>
									<S.CardListItemId>@lorem_ipsum_{item}</S.CardListItemId>
									<S.CardListItemNick>Lorem Ipsum {item}</S.CardListItemNick>
								</S.CardListItemColumn>
								<S.CardListItemColumn>
									<S.CardListItemPosition>
										<div>
											{item}
										</div>
									</S.CardListItemPosition>
								</S.CardListItemColumn>
							</S.CardListItem>
						))
					}

				</S.CardList>
			</S.CardBody>
		</S.Card>
	)
};

export default RandomList;