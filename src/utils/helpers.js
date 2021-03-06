const cloneArrayDeeply = array => JSON.parse(JSON.stringify(array));

const shuffleArray = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const dateMask = (args) => {
  const { event, targetValue } = args;

  const v = targetValue;
  let r = v.replace(/\D/g, '');

  if (r.length > 8) {
    r = r.replace(/^(\d{2})(\d{2})(\d{4}).*/, '$1/$2/$3');
  } else if (r.length > 4) {
    r = r.replace(/^(\d{2})(\d{2})(\d*).*/, '$1/$2/$3');
  } else if (r.length > 2) {
    r = r.replace(/^(\d{2})(\d{1})/, '$1/$2');
  } else if (r.length > 1) {
    r = r.replace(/^(\d*)/, '$1');
  }
  event.target.value = r;
};

const getCurrentDate = () => {
  const currentFullDate = new Date();
  const currentDay = parseInt(currentFullDate.getDate(), 10);
  const currentMonth = parseInt(currentFullDate.getMonth(), 10) + 1;
  const currentYear = parseInt(currentFullDate.getFullYear(), 10);

  return {
    currentDay,
    currentMonth,
    currentYear
  }
}

const getCurrentTime = () => {
  const currentFullDate = new Date();
  const currentHour = currentFullDate.getHours();
  const currentMinute = currentFullDate.getMinutes();

  return {
    currentHour,
    currentMinute
  }
}

const returnObjectFromStringDate = (str, separator, lang) => {
  const fullDate = str.split(separator); 
  let day, month, year;

  // string format: DD/MM/YYYY
  if (lang === 'pt') {
    day = parseInt(fullDate[0], 10);
    month = parseInt(fullDate[1], 10);
    year = parseInt(fullDate[2], 10);
  }
  if (lang === 'en') {
    day = parseInt(fullDate[2], 10);
    month = parseInt(fullDate[1], 10);
    year = parseInt(fullDate[0], 10);
  }
  return {
    day,
    month,
    year
  }
}

const isTimeIntervalValid = (beginHour, beginMinute, endHour, endMinute) => {
  const { currentDay, currentMonth, currentYear } = getCurrentDate();
  const begin = new Date(currentYear, currentMonth, currentDay, beginHour, beginMinute);
  const end = new Date(currentYear, currentMonth, currentDay, endHour, endMinute);

  return begin < end;
}

const isThisDateToday = (day, month, year) => {
  const { currentDay, currentMonth, currentYear } = getCurrentDate();

  const typedDay = (typeof day === 'number') ? day : parseInt(day);
  const typedMonth = (typeof month === 'number') ? month : parseInt(month);
  const typedYear = (typeof year === 'number') ? year : parseInt(year);

  return currentDay === typedDay && currentMonth === typedMonth && currentYear === typedYear;
}

const isThisDateValidForSearch = (day, month, year, minimumYear) => {
  const { currentDay, currentMonth, currentYear } = getCurrentDate();

  const yearNewerThanCurrentYear = year > currentYear;
  const monthNewerThanCurrentMonth = month > currentMonth;
  const dayNewerThanCurrentDay = day > currentDay;

  const sameYear = year === currentYear;
  const sameMonth = month === currentMonth;

  let error = {};
  let isValid = true;

  if (minimumYear) {
    if (year < minimumYear) {
      error.message = 'year.invalid';
    }
  } else if (month > 12) {
    error.message = 'month.invalid';
  } else if (day > 31) {
    error.message = 'day.invalid';
  } else if (yearNewerThanCurrentYear) {
    error.message = 'year.invalid';
  } else if (sameYear && monthNewerThanCurrentMonth) {
    error.message = 'month.invalid';
  } else if (sameYear && sameMonth && dayNewerThanCurrentDay) {
    error.message = 'day.invalid';
  }

  if (error.message) isValid = false;

  return {
    message: error.message,
    isValid,
  }
}

const hourMask = (args) => {
  const { event, targetValue } = args;

  const v = targetValue;
  let r = v.replace(/\D/g, '');

   if (r.length > 2) {
    r = r.replace(/^(\d{2})(\d{1})/, '$1:$2');
  } else if (r.length > 1) {
    r = r.replace(/^(\d*)/, '$1');
  }
  event.target.value = r;
};

const maxValueNumberMask = (args) => {
  const { event, targetValue, maxValue } = args;

  const currentValue = targetValue;
  const isMaxInputLengthValid = /^\s*-?[0-9]{0,3}$/.test(currentValue);

  if (isMaxInputLengthValid) {
    event.target.value = (currentValue <= maxValue) ? currentValue : maxValue;
  } else {
    const newValue = currentValue.split('').slice(0,-1).join('');
    event.target.value = newValue;
  }
}

const removeSpecialCharacters = (text) => {
  const from = 'ãàáäâèéëêìíïîòóöôùúüûñç·,;';
  const to = 'aaaaaeeeeiiiioooouuuunc---';
  const regx = new RegExp(from.split('').join('|'), 'g');

  return text
    .toString()
    .replace(regx, result => to.charAt(from.indexOf(result)));
}

const tweetIdMask = text => removeSpecialCharacters(text);

export {
  cloneArrayDeeply,
  dateMask,
  getCurrentDate,
  getCurrentTime,
  hourMask,
  isThisDateToday,
  isThisDateValidForSearch,
  isTimeIntervalValid,
  maxValueNumberMask,
  returnObjectFromStringDate,
  shuffleArray,
  tweetIdMask,
}
