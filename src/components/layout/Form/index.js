import React, { Fragment, useContext, useState } from 'react';

import { theme } from 'styles';
// import { Tooltip } from 'components/ui';
import {
  dateMask,
  hourMask,
  maxValueNumberMask,
  tweetIdMask } from 'utils/helpers';
import validate from './validate';
import * as S from './styled';

import FormContext from 'context/FormContext';

const Form = () => {
  const { setFormResponse } = useContext(FormContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const callbackDate = event => dateMask({ event, targetValue: event.target.value });
  const callbackHour = event => hourMask({ event, targetValue: event.target.value });
  const callbackTweetId = event => event.target.value = tweetIdMask(event.target.value);
  const callbackNumberOfResults = event => maxValueNumberMask({ event, targetValue: event.target.value, maxValue: 100 });

  const handleChange = (event, stateHook, callback) => {
    event.persist();
    if (typeof callback === 'function') callback(event);
    stateHook(newValues => ({ ...newValues, [event.target.name]: event.target.value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const { errors } = validate(values);
    
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      setFormResponse(values);
    }
  }

  return (
    <S.FormWrapper>
    <S.Form noValidate onSubmit={e => handleSubmit(e)}>
      <S.FormSection hasDivisor="true">
        <S.FormSectionTitle>Informações do Tweet</S.FormSectionTitle>
        <S.FormSectionFields>
          <S.FormFieldset isFullWidth={true}>
            <S.FormFieldsetLabel
              id="retweeted_link-label"
              htmlFor="retweeted_link"
            >
              Link do tweet original
            </S.FormFieldsetLabel>
            <S.FormFieldsetInputGroup>
              <S.FormFieldsetInputIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M4.222 19.778c.975.975 2.255 1.462 3.535 1.462 1.281-.001 2.562-.487 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829c-1.169 1.167-3.072 1.169-4.243 0-1.169-1.17-1.169-3.073 0-4.243l2.829-2.828L7.051 9.879l-2.829 2.828C2.273 14.656 2.273 17.829 4.222 19.778zM19.778 11.293c1.948-1.949 1.948-5.122 0-7.071-1.95-1.95-5.123-1.948-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829c1.17-1.167 3.073-1.169 4.243 0 1.169 1.17 1.169 3.073 0 4.243l-2.829 2.828 1.414 1.414L19.778 11.293z"/>
                  <path transform="rotate(-134.999 12 12)" d="M11 5.999H13V18H11z"/>
                </svg>
              </S.FormFieldsetInputIcon>
              <S.FormFieldsetInput
                aria-labelledby="retweeted_link-label"
                id="retweeted_link"
                name="retweeted_link"
                onChange={e => handleChange(e, setValues, callbackTweetId)}
                placeholder=""
                type="text"
                value={values.retweeted_link || ''}
              />
            </S.FormFieldsetInputGroup>
            <S.FormFieldsetHelp
              id="retweeted_link-help"
              errorMessage={!!errors.retweeted_link}
            >
              {(errors.retweeted_link) ? errors.retweeted_link : 'Ex: https://twitter.com/MomentsBrasil/status/...'}
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
              name="date"
              onChange={e => handleChange(e, setValues, callbackDate)}
              placeholder="DD/MM/AAAA"
              type="text"
              required
              value={values.date || ''}
            />
            <S.FormFieldsetHelp
              id="date-help"
              errorMessage={!!errors.date}
            >
              {(errors.date) && errors.date}
            </S.FormFieldsetHelp>
          </S.FormFieldset>
          <S.FormFieldset>
            <S.FormFieldsetLabel
              id="hours-label"
              htmlFor="hours"
            >
              Selecionar horário
            </S.FormFieldsetLabel>
            <S.FormFieldsetSwitchWrapper>
              <S.FormFieldsetSwitchComponent>
                <input
                  checked={values.hours || false}
                  className="input--checkbox"
                  id="hours"
                  name="hours"
                  onChange={e => {
                    const hoursEvent = { 
                      event: {
                        target: {
                          name: e.target.name,
                          value: !values.hours,
                        },
                        persist: e.persist,
                      }
                    };
                    handleChange(hoursEvent.event, setValues)
                  }}
                  type="checkbox"
                />
                <span className="slider"></span>
                <span className="icon icon--disable">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/>
                  </svg>
                </span>
                <span className="icon icon--active">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"/>
                  </svg>
                </span>
              </S.FormFieldsetSwitchComponent>
              <S.FormFieldsetSwitchText>
                {values.hours ? 'Ativado' : 'Desativado'}
              </S.FormFieldsetSwitchText>
            </S.FormFieldsetSwitchWrapper>
          </S.FormFieldset>
          {(values.hours) ? (
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
                  onChange={e => handleChange(e, setValues, callbackHour)}
                  placeholder="HH:MM"
                  type="text"
                  value={values.hour_begin || ''}
                />
                <S.FormFieldsetHelp
                  id="hour_begin-help"
                  errorMessage={!!errors.hour_begin}
                >
                  {(errors.hour_begin) ? errors.hour_begin : 'Ex: 09:34'}
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
                  maxLength="5"
                  name="hour_end"
                  onChange={e => handleChange(e, setValues, callbackHour)}
                  placeholder="HH:MM"
                  type="text"
                  value={values.hour_end || ''}
                />
                <S.FormFieldsetHelp
                  id="hour_end-help"
                  errorMessage={!!errors.hour_end}
                >
                  {(errors.hour_end) ? errors.hour_end : 'Ex: 22:15'}
                </S.FormFieldsetHelp>
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
              Quantidade de itens <span>(opcional e até 100 itens)</span>
            </S.FormFieldsetLabel>
            <S.FormFieldsetInput
              aria-labelledby="amount_results-label"
              id="amount_results"
              max="100"
              name="amount_results"
              onChange={e => handleChange(e, setValues, callbackNumberOfResults)}
              type="number"
              value={values.amount_results || ''}
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
