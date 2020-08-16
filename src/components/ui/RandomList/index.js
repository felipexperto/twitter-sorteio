import React from 'react';

import * as S from './styled';

const RandomList = () => {

	return (
		<S.Card>
			<S.CardHeader>
				<S.CardTitle>Perfil sorteado</S.CardTitle>
				<S.CardWinnerImage src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="" />
				<S.CardWinnerId>@BarackObama</S.CardWinnerId>
				<S.CardWinnerNick>Barack Obama</S.CardWinnerNick>
				<S.CardTotalRetweets>De um total de XX retweets</S.CardTotalRetweets>
			</S.CardHeader>
			<S.CardBody>
				AAAAA
				<S.CardList>
					<S.CardListItem>
						<div>
							<S.CardListItemImage src="" />
						</div>
						<div>
							<S.CardListItemNick></S.CardListItemNick>
							<S.CardListItemId></S.CardListItemId>
						</div>
						<div>
							<S.CardListItemPosition></S.CardListItemPosition>
						</div>
					</S.CardListItem>
				</S.CardList>
			</S.CardBody>
		</S.Card>
	)
};

export default RandomList;