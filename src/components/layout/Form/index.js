import React, { useState } from 'react';

import { theme } from 'styles';
import { Tooltip } from 'components/ui';
import * as S from './styled';

const Form = () => {
  
  const [user, setUser] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [date, setDate] = useState('');
  const [hourBegin, setHourBegin] = useState('');
  const [hourEnd, setHourEnd] = useState('');
  const [numberOfResults, setNumberOfResults] = useState('');

  const handleChange = (event, stateHook, callback) => {
    event.persist();
    if (typeof callback === 'function') {
      stateHook(() => callback(event));
    } else {
      stateHook(event.target.value);
    }
    
  }

  const handleChangeDate = () => {

  }
  const handleChangeHour = () => {

  }
  const callbackNumberOfResults = (event) => {
    const currentValue = event.target.value;
    const isMaxInputLengthValid = /^\s*-?[0-9]{0,3}$/.test(currentValue);

    if (isMaxInputLengthValid) {
      return (currentValue < 101) ? currentValue : 100;
    } else {
      return numberOfResults;
    }
  }

  return (
    <S.FormWrapper>
    <S.Form novalidate>
      <S.FormSection hasDivisor="true">
        <S.FormSectionTitle>Informações do Tweet</S.FormSectionTitle>
        <S.FormSectionFields>
          <S.FormFieldset>
            <S.FormFieldsetLabel
              id="retweeted_from-label"
              htmlFor="retweeted_from"
            >
              Retweetado de @
            </S.FormFieldsetLabel>
            <S.FormFieldsetInput
              aria-labelledby="retweeted_from-label"
              id="retweeted_from"
              type="text"
              name="retweeted_from"
              placeholder="@NetflixBrasil"
              value={user}
              onChange={e => handleChange(e, setUser)}
            />
          </S.FormFieldset>
          <S.FormFieldset>
          <S.FormFieldsetLabel
            id="hashtag-label"
            htmlFor="hashtag"
          >
            Contém a hashtag <span>(opcional)</span>
            <Tooltip 
              height="16"
              width="16"
            />
          </S.FormFieldsetLabel>
          <S.FormFieldsetInput
            aria-labelledby="hashtag-label"
            id="hashtag"
            type="text"
            name="hashtag"
            placeholder="#HarryPotter"
            value={hashtag}
            onChange={e => handleChange(e, setHashtag)}
          />
          <S.FormFieldsetHelp
            id="hashtag-help"
          >
            Campo opcional
          </S.FormFieldsetHelp>
        </S.FormFieldset>
        </S.FormSectionFields>
      </S.FormSection>
      <S.FormSection hasDivisor="true">
        <S.FormSectionTitle>Intervalo de tempo</S.FormSectionTitle>
        <S.FormSectionFields>
          <S.FormFieldset>
            <S.FormFieldsetLabel
              id="date-label"
              htmlFor="date"
            >
              Data dos retweets
            </S.FormFieldsetLabel>
            <S.FormFieldsetInput
              aria-labelledby="date-label"
              id="date"
              type="text"
              name="date"
              required
              placeholder="DD/MM/AAAA"
              value={date}
              onChange={e => handleChange(e, setDate)}
            />
          </S.FormFieldset>
          <S.FormFieldset>
            {/* <!-- adicionar toggle button para horário específico. começar oculto --> */}
          </S.FormFieldset>
          <S.FormFieldset>
            <S.FormFieldsetLabel
              id="hour_begin-label"
              htmlFor="hour_begin"
            >
              Hora de início <span>(opcional)</span>
            </S.FormFieldsetLabel>
            <S.FormFieldsetInput
              aria-labelledby="hour_begin-label"
              id="hour_begin"
              type="text"
              name="hour_begin"
              placeholder="HH:MM"
              value={hourBegin}
              onChange={e => handleChange(e, setHourBegin)}
            />
            <S.FormFieldsetHelp
              id="hour_begin-help"
            >
              Campo opcional
            </S.FormFieldsetHelp>
          </S.FormFieldset>
          <S.FormFieldset>
            <S.FormFieldsetLabel
              id="hour_end-label"
              htmlFor="hour_end"
            >
              Hora de término <span>(opcional)</span>
            </S.FormFieldsetLabel>
            <S.FormFieldsetInput
              aria-labelledby="hour_end-label"
              id="hour_end"
              type="text"
              name="hour_end"
              placeholder="HH:MM"
              value={hourEnd}
              onChange={e => handleChange(e, setHourEnd)}
            />
            <S.FormFieldsetHelp
              id="hour_end-help"
            >
              Campo opcional
            </S.FormFieldsetHelp>
        </S.FormFieldset>
        </S.FormSectionFields>
      </S.FormSection>
      <S.FormSection>
        <S.FormSectionTitle>Configurações de resultado</S.FormSectionTitle>
        <S.FormSectionFields>
          <S.FormFieldset>
            <S.FormFieldsetLabel
              id="amount_results-label"
              htmlFor="amount_results"
            >
              Quantidade de resultados <span>(opcional)</span>
            </S.FormFieldsetLabel>
            <S.FormFieldsetInput
              aria-labelledby="amount_results-label amount_results-help"
              id="amount_results"
              max="100"
              name="amount_results"
              onChange={e => handleChange(e, setNumberOfResults, callbackNumberOfResults)}
              type="number"
              value={numberOfResults}
            />
            <S.FormFieldsetHelp
              id="amount_results-help"
            >
              Campo opcional<br/>
              Limite de 100 resultados
            </S.FormFieldsetHelp>
          </S.FormFieldset>
        </S.FormSectionFields>
      </S.FormSection>
      <S.FormSection alignment="center">
        <S.ButtonSubmit>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill={theme.main.colors.white} d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M8,17.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S8.828,17.5,8,17.5z M8,9.5C7.172,9.5,6.5,8.828,6.5,8 S7.172,6.5,8,6.5S9.5,7.172,9.5,8S8.828,9.5,8,9.5z M12,13.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 S12.828,13.5,12,13.5z M16,17.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,17.5,16,17.5z M16,9.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S16.828,9.5,16,9.5z"/>
          </svg>
          <span>Sortear</span>
        </S.ButtonSubmit>
      </S.FormSection>
    </S.Form>
  </S.FormWrapper>
  )
}

export default Form;
