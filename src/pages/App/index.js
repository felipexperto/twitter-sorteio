import React from 'react';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from 'styles';
import { Footer, Header } from '../../components/layout';
import { Container, RandomList } from 'components/ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
        <Container>
          <RandomList />
        </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
