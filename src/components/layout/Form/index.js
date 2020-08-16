import React from 'react';

import * as S from './styled';

const Form = () => (
  <S.FormWrapper>
    <S.Form novalidate>
      <S.FormSection hasDivisor="true">
        <S.FormSectionTitle>Informações do Tweet</S.FormSectionTitle>
        <S.FormFieldset>
          <label
            id="retweeted_from-label"
            htmlFor="retweeted_from"
          >
            Retweetado de @
          </label>
          <input
            aria-labelledby="retweeted_from-label"
            id="retweeted_from"
            type="text"
            name="retweeted_from"
            placeholder="@BarackObama"
          />
        </S.FormFieldset>
        <S.FormFieldset>
          <label
            id="hashtag-label"
            htmlFor="hashtag"
          >
            Contém a hashtag <span>(opcional)</span>
          </label>
          <input
            aria-labelledby="hashtag-label"
            id="hashtag"
            type="text"
            name="hashtag"
          />
        </S.FormFieldset>
      </S.FormSection>
      <S.FormSection hasDivisor="true">
        <S.FormSectionTitle>Intervalo de tempo</S.FormSectionTitle>
        <S.FormFieldset>
          <label
            id="day-label"
            htmlFor="day"
          >
            Dia dos retweets
          </label>
          <input
            aria-labelledby="day-label"
            id="day"
            type="text"
            name="day"
            required
          />
        </S.FormFieldset>
        <S.FormFieldset>
          <label
            id="hour_begin-label"
            htmlFor="hour_begin"
          >
            Hora de início <span>(opcional)</span>
          </label>
          <input
            aria-labelledby="hour_begin-label"
            id="hour_begin"
            type="text"
            name="hour_begin"
          />
        </S.FormFieldset>
        <S.FormFieldset>
          <label
            id="hour_end-label"
            htmlFor="hour_end"
          >
            Hora de término <span>(opcional)</span>
          </label>
          <input
            aria-labelledby="hour_end-label"
            id="hour_end"
            type="text"
            name="hour_end"
          />
        </S.FormFieldset>
      </S.FormSection>
      <S.FormSection>
        <S.FormSectionTitle>Configurações de resultado</S.FormSectionTitle>
        <S.FormFieldset>
          <label
            id="amount_results-label"
            htmlFor="amount_results"
          >
            Número máximo de resultados <span>(opcional)</span>
          </label>
          <input
            aria-labelledby="amount_results-label amount_results-help"
            id="amount_results"
            type="text"
            name="amount_results"
          />
          <small
            id="amount_results-help"
          >
            Limite de 100 resultados
          </small>
        </S.FormFieldset>
      </S.FormSection>
    </S.Form>
  </S.FormWrapper>
)

export default Form;
