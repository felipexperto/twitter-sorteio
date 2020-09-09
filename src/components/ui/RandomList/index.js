import React from 'react';
import * as S from './styled';

const RandomList = ({ retweetsList }) => {
	const allTweets = retweetsList.length;
	const tweetWinner = retweetsList.shift();
	const hasTweets = retweetsList && !!retweetsList.length;
	const hasWinner = tweetWinner && !!Object.keys(tweetWinner).length;

	return (
		<S.Card>
			{
				(hasWinner) && (
					<S.CardHeader>
						<S.CardTitle>Perfis sorteados</S.CardTitle>
						<S.CardWinnerImage src={tweetWinner.profile_image_url} alt={`Foto de @${tweetWinner.screen_name}`} />
						<S.CardWinnerId
							target="_blank"
							href={`https://twitter.com/${tweetWinner.screen_name}`}
						>
							@{tweetWinner.screen_name}
						</S.CardWinnerId>
						<S.CardWinnerNick>{tweetWinner.name}</S.CardWinnerNick>
						<S.CardTotalRetweets>De um total de {allTweets} retweets encontrados</S.CardTotalRetweets>
					</S.CardHeader>
				)
			}
			{
				(hasTweets) ? (
					<S.CardBody>
						<S.CardList>
							{
								retweetsList.map((item, index) => {
									const { name, screen_name, profile_image_url } = item;
									return (
									<S.CardListItem key={index+2}>
										<S.CardListItemColumn>
											<S.CardListItemImage src={profile_image_url} />
										</S.CardListItemColumn>
										<S.CardListItemColumn>
											<S.CardListItemId
												target="_blank"
												href={`https://twitter.com/${screen_name}`}
											>
												@{screen_name}
											</S.CardListItemId>
											<S.CardListItemNick>{name}</S.CardListItemNick>
										</S.CardListItemColumn>
										<S.CardListItemColumn>
											<S.CardListItemPosition>
												<div>
													{index+2}
												</div>
											</S.CardListItemPosition>
										</S.CardListItemColumn>
									</S.CardListItem>
								)})
							}
						</S.CardList>
					</S.CardBody>
				) : (
					null
				)
			}

		</S.Card>
	)
};

export default RandomList;