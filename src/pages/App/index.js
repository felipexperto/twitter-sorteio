import React from 'react';
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from 'styles';
import { Footer, Header } from '../../components/layout';
import { Container, RandomList } from 'components/ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles backgroundColor={theme.main.colors.extraextralightgray} />
      <Header />
        <Container>
          <section>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
              <path fill={theme.main.colors.blue} d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M8,17.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S8.828,17.5,8,17.5z M8,9.5C7.172,9.5,6.5,8.828,6.5,8 S7.172,6.5,8,6.5S9.5,7.172,9.5,8S8.828,9.5,8,9.5z M12,13.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 S12.828,13.5,12,13.5z M16,17.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,17.5,16,17.5z M16,9.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,9.5,16,9.5z"/>
            </svg>
            <h2>Título</h2>
            <p>Descrição</p>
          </section>
          <section>
            <form novalidate>
              <section>
              <h4>Informações do Tweet</h4>
                <div>
                  <label for="retweeted_from">Retweetado de @</label>
                  <input id="retweeted_from" type="text" name="retweeted_from" placeholder="@BarackObama" />
                </div>
                <div>
                  <label for="hashtag">Contém a hashtag <span>(opcional)</span></label>
                  <input id="hashtag" type="text" name="hashtag" />
                </div>
              </section>
              <hr/>
              <section>
              <h4>Intervalo de tempo</h4>
                <div>
                  <label for="day">Dia</label>
                  <input id="day" type="text" name="day" placeholder="@BarackObama" required />
                </div>
                <div>
                  <label for="hour_begin">Hora de início <span>(opcional)</span></label>
                  <input id="hour_begin" type="text" name="hour_begin" placeholder="@BarackObama" />
                </div>
                <div>
                  <label for="hour_end">Hora de término <span>(opcional)</span></label>
                  <input id="hour_end" type="text" name="hour_end" />
                </div>
              </section>
              <hr/>
              <section>
              <h4>Configurações de resultado</h4>
                <div>
                  <label for="amount_results">Número máximo de resultados <span>(opcional)</span></label>
                  <input id="amount_results" type="text" name="amount_results" />
                  <small>Limite de 100 resultados</small>
                </div>
              </section>
            </form>
          </section>
          <RandomList />
        </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
