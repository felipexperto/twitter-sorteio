import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from 'styles';
import { Form, Footer, Header } from '../../components/layout';
import { Container, Loader, RandomList } from 'components/ui';
import * as S from './styled';

import { returnObjectFromStringDate } from 'utils/helpers';
import { FormProvider } from 'context/FormContext';

function App() {
  const [formResponse, setFormResponse] = useState({});
  const [retweets, setRetweets] = useState([]);

  const formatRequestParameters = ({
    amount_results,
    date,
    hour_begin,
    hour_end,
    retweeted_link,
   }) => {
      // Docs: https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweets-id

      const rtCount = amount_results ? amount_results : 10;
      const rtId = `${retweeted_link.split('/').slice(-1).pop()}`;
      
      const { day, month, year } = returnObjectFromStringDate(date, '/', 'pt');
      const rtDate = `${year}-${month}-${day}`;
      
      const rtHourBegin = hour_begin ? `${hour_begin}:00` : '00:00:00';
      const rtHourEnd = hour_end ? `${hour_end}:59` : '23:59:59';

      return {
        rtCount,
        rtDate,
        rtHourBegin,
        rtHourEnd,
        rtId,
      };
  }

	useEffect(() => {
    if (!Object.keys(formResponse).length) return;

    const paramsRetweet = formatRequestParameters({ ...formResponse });
    
		fetch(`http://localhost:3001/api/retweets`, {
      method: 'GET',
      headers: {
        ...paramsRetweet
      },
    })
		.then(async (response) => {
      if (response.status !== 200) {
        console.group();
          console.error(`${response.status} ${response.statusText}`);
          console.dir(response);
        console.groupEnd();
      } else {
        const responseJSON = await response.json();
        const retweetsFilteredInfo = responseJSON.map(item => {
          const { user } = item;
          return {
            name: user.name,
            screen_name: user.screen_name,
            profile_image_url: user.profile_image_url,
          }
        });

        // TODO: shuffle array

        // update state
        setRetweets(() => retweetsFilteredInfo);
      }
    })
		.catch(err => {
			console.error(err);
    });
  }, [formResponse]);
  
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles backgroundColor={theme.main.colors.extraextralightgray} />
        <Header />
        <S.Jumbotron backgroundColor={theme.main.colors.white} >
          <Container>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
              <path fill={theme.main.colors.blue} d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M8,17.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S8.828,17.5,8,17.5z M8,9.5C7.172,9.5,6.5,8.828,6.5,8 S7.172,6.5,8,6.5S9.5,7.172,9.5,8S8.828,9.5,8,9.5z M12,13.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 S12.828,13.5,12,13.5z M16,17.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,17.5,16,17.5z M16,9.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,9.5,16,9.5z"/>
            </svg>
            <S.Title>Sorteador de RT</S.Title>
            <S.TitleDescription>
              Plataforma experimental e não oficial de sorteio.
              Incididunt esse officia cupidatat proident sunt commodo et do consectetur ut exercitation mollit nulla.
            </S.TitleDescription>
          </Container>
        </S.Jumbotron>
        <S.Columns>
          <S.ColumnFirst isLoaderVisible={!retweets.length}>
            <svg viewBox="0 0 24 24">
              <g>
                <path fill={theme.main.colors.blue} d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <S.ContainerRelative>
              {
                (!!retweets.length) ? (
                  <RandomList retweetsList={retweets} />
                ) : (
                  <Loader message={<>Aguardando sorteio.<br/> Seus resultados aparecerão aqui.</>} />
                )
              }
            </S.ContainerRelative>
          </S.ColumnFirst>
          <S.ColumnSecond>
            <FormProvider value={{formResponse, setFormResponse}}>
              <Form />
            </FormProvider>
          </S.ColumnSecond>
        </S.Columns>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
