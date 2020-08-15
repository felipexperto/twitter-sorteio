import React from 'react';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from 'styles';
import { Form, Footer, Header } from '../../components/layout';
import { Container, RandomList } from 'components/ui';
import * as S from './styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles backgroundColor={theme.main.colors.extraextralightgray} />
      <Header />
      <S.Jumbotron backgroundColor={theme.main.colors.white} >
        <Container>
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
            <path fill={theme.main.colors.blue} d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M8,17.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S8.828,17.5,8,17.5z M8,9.5C7.172,9.5,6.5,8.828,6.5,8 S7.172,6.5,8,6.5S9.5,7.172,9.5,8S8.828,9.5,8,9.5z M12,13.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 S12.828,13.5,12,13.5z M16,17.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,17.5,16,17.5z M16,9.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,9.5,16,9.5z"/>
          </svg>
          <S.Title>Título</S.Title>
          <S.TitleDescription>
            Amet aliqua sit proident id exercitation. 
            Incididunt esse officia cupidatat proident sunt commodo et do consectetur ut exercitation mollit nulla.
          </S.TitleDescription>
        </Container>
      </S.Jumbotron>
      <Container>
        <S.Columns>
          <S.Column>
          <RandomList />
          </S.Column>
          <S.Column>
            <Form />
          </S.Column>
        </S.Columns>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
