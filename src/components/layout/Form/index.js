import React, { Fragment, useState, useEffect } from 'react';

import { theme } from 'styles';
import { Tooltip } from 'components/ui';
import { dateMask, hourMask } from 'utils/helpers';
import * as S from './styled';

const Form = () => {
  
  const [user, setUser] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [date, setDate] = useState('');
  const [hourBegin, setHourBegin] = useState('');
  const [hourEnd, setHourEnd] = useState('');
  const [hours, setHours] = useState(false);
  const [numberOfResults, setNumberOfResults] = useState('');

  const handleChange = (event, stateHook, callback) => {
    event.persist();
    if (typeof callback === 'function') {
      stateHook(() => callback(event));
    } else {
      stateHook(event.target.value);
    }
  }

  const callbackDate = (event) => {
    const { keyCode, target } = event;
    return dateMask({ event, keyCode, targetValue: target.value });
  }
  const callbackHour = (event) => {
    const { keyCode, target } = event;
    return hourMask({ event, keyCode, targetValue: target.value });
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
            <S.FormFieldsetInputGroup>
              <S.FormFieldsetInputIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c1.466,0,2.961-0.371,4.442-1.104l-0.885-1.793C14.353,19.698,13.156,20,12,20 c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8v1c0,0.692-0.313,2-1.5,2c-1.396,0-1.494-1.819-1.5-2V8h-2v0.025 C14.162,7.391,13.13,7,12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5c1.45,0,2.748-0.631,3.662-1.621C16.186,16.269,17.07,17,18.5,17 c2.273,0,3.5-2.061,3.5-4v-1C22,6.486,17.514,2,12,2z M12,15c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S13.654,15,12,15z"/>
                </svg>
              </S.FormFieldsetInputIcon>
              <S.FormFieldsetInput
                aria-labelledby="retweeted_from-label"
                id="retweeted_from"
                type="text"
                name="retweeted_from"
                placeholder="NetflixBrasil"
                value={user}
                onChange={e => handleChange(e, setUser)}
              />
            </S.FormFieldsetInputGroup>
          </S.FormFieldset>
          <S.FormFieldset>
          <S.FormFieldsetLabel
            id="hashtag-label"
            htmlFor="hashtag"
          >
            Contém a hashtag <span>(opcional)</span>
          </S.FormFieldsetLabel>
          <S.FormFieldsetInputGroup>
            <S.FormFieldsetInputIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <path d="M16.018,3.815L15.232,8h-4.966l0.716-3.815L9.018,3.815L8.232,8H4v2h3.857l-0.751,4H3v2h3.731l-0.714,3.805l1.965,0.369 L8.766,16h4.966l-0.714,3.805l1.965,0.369L15.766,16H20v-2h-3.859l0.751-4H21V8h-3.733l0.716-3.815L16.018,3.815z M14.106,14H9.141 l0.751-4h4.966L14.106,14z"/>
            </svg>
            </S.FormFieldsetInputIcon>
            <S.FormFieldsetInput
              aria-labelledby="hashtag-label"
              id="hashtag"
              type="text"
              name="hashtag"
              placeholder="HarryPotter"
              value={hashtag}
              onChange={e => handleChange(e, setHashtag)}
            />
          </S.FormFieldsetInputGroup>
          <S.FormFieldsetHelp
            id="hashtag-help"
          >
            Opcional
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
              onChange={e => handleChange(e, setDate, callbackDate)}
              placeholder="DD/MM/AAAA"
              value={date}
            />
          </S.FormFieldset>
          <S.FormFieldset>
            <S.FormFieldsetLabel
              id="hours-label"
              htmlFor="hours"
            >
              Selecionar horário específico
            </S.FormFieldsetLabel>
            <S.FormFieldsetSwitchWrapper>
              <S.FormFieldsetSwitchComponent>
                <input
                  className="input--checkbox"
                  checked={hours}
                  onChange={() => setHours(!hours)}
                  type="checkbox"
                />
                <span class="slider"></span>
                <span class="icon icon--disable">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/>
                  </svg>
                </span>
                <span class="icon icon--active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"/>
                  </svg>
                </span>
              </S.FormFieldsetSwitchComponent>
              <S.FormFieldsetSwitchText>
                {hours ? 'Ativado' : 'Desativado'}
              </S.FormFieldsetSwitchText>
            </S.FormFieldsetSwitchWrapper>
          </S.FormFieldset>
          {(hours) ? (
            <Fragment>
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
                  maxLength="5"
                  name="hour_begin"
                  onChange={e => handleChange(e, setHourBegin, callbackHour)}
                  placeholder="HH:MM"
                  type="text"
                  value={hourBegin}
                />
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
                  maxLength="5"
                  name="hour_end"
                  onChange={e => handleChange(e, setHourEnd, callbackHour)}
                  placeholder="HH:MM"
                  type="text"
                  value={hourEnd}
                />
              </S.FormFieldset>
            </Fragment>
          ) : '' }
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
              Quantidade de resultados <span>(opcional e até 100 itens)</span>
            </S.FormFieldsetLabel>
            <S.FormFieldsetInput
              aria-labelledby="amount_results-label"
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
              Opcional e até 100 itens
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
