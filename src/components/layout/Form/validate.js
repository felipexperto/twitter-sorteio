import {
  getCurrentTime,
  isThisDateToday,
  isThisDateValidForSearch,
  isTimeIntervalValid,
  returnObjectFromStringDate } from 'utils/helpers';

const getErrorMessage = (key) => {
  const messages = {
    'year.invalid': () => 'Insira um ano válido',
    'month.invalid': () => 'Insira um mês válido',
    'day.invalid': () => 'Insira um dia válido',
    'default': () => '',
  }
  return (messages[key] || messages['default'])();
}

export default function validate(values) {
  const errors = {};

  if (!values.retweeted_from) {
    errors.retweeted_from = 'Insira um usuário';
  }
  
  if (!values.hashtag) {
    errors.hashtag = 'Insira uma hashtag';
  }

  let inputDay, inputMonth, inputYear;
  
  if (!values.date) {
    errors.date = 'Insira uma data';
  } else if (values.date.length < 10) {
    errors.date = 'Insira uma data válida';
  } else {
    const fullDate = returnObjectFromStringDate(values.date, '/', 'pt');
    const twitterYearCreation = 2006;
    inputDay = fullDate.day;
    inputMonth = fullDate.month;
    inputYear = fullDate.year;

    const { message, isValid } = isThisDateValidForSearch(inputDay, inputMonth, inputYear, twitterYearCreation);
    
    if (!isValid) {
      const errorMessage = getErrorMessage(message);
      errors.date = errorMessage;
    }
  }

  if (values.hours) {

    let inputBeginHour, inputBeginMinute, inputEndHour, inputEndMinute;

    if (!values.hour_begin) {
      errors.hour_begin = 'Insira um horário';
    } else if (values.hour_begin.length < 5) {
      errors.hour_begin = 'Insira um horário';
    } else {
      const inputFullBeginHour = values.hour_begin.split(':');
      inputBeginHour = parseInt(inputFullBeginHour[0], 10);
      inputBeginMinute = parseInt(inputFullBeginHour[1], 10);

      if (inputBeginHour > 23) errors.hour_begin = 'Insira uma hora válida';
      if (inputBeginMinute > 59) errors.hour_begin = 'Insira um minuto válido';

      if (isThisDateToday(inputDay, inputMonth, inputYear)) {
        const { currentHour, currentMinute } = getCurrentTime();
        if (inputBeginHour > currentHour) errors.hour_begin = 'Insira uma hora válida';
        if (inputBeginMinute > currentMinute) errors.hour_begin = 'Insira um minuto válido';
      }
    }

    if (!values.hour_end) {
      errors.hour_end = 'Insira um horário';
    } else if (values.hour_begin.length < 5) {
      errors.hour_end = 'Insira um horário';
    } else {
      const inputFullEndHour = values.hour_end.split(':');
      inputEndHour = parseInt(inputFullEndHour[0], 10);
      inputEndMinute = parseInt(inputFullEndHour[1], 10);

      if (inputEndHour > 23) errors.hour_end = 'Insira uma hora válida';
      if (inputEndMinute > 59) errors.hour_end = 'Insira um minuto válido';

      if (isThisDateToday(inputDay, inputMonth, inputYear)) {
        const { currentHour, currentMinute } = getCurrentTime();
        if (inputEndHour > currentHour) errors.hour_end = 'Insira uma hora válida';
        if (inputEndMinute > currentMinute) errors.hour_end = 'Insira um minuto válido';
      }
    }

    if (!errors.hour_begin && !errors.hour_end) {
      if (!isTimeIntervalValid(inputBeginHour, inputBeginMinute, inputEndHour, inputEndMinute)) {
        errors.hour_begin = 'Insira um intervalo válido';
        errors.hour_end = 'Insira um intervalo válido';
      };
    }
  }

  return {
    errors
  }
}