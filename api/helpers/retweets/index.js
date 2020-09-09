const axios = require('axios');

const changeUTCDateTimezone = (utcDateString, lang, timeZone) => {
  const newDate = new Date(utcDateString).toLocaleString(lang, { timeZone });
  return newDate;
}

const filterByDate = (dateString, beginDateString, endDateString) => {
  return Date.parse(dateString) > Date.parse(beginDateString) && Date.parse(dateString) < Date.parse(endDateString)
}

const getRetweets = (uri, headers) => axios
  .get(uri, { ...headers })
  .then(response => response.data)
  .catch(err => err);

module.exports = {
  changeUTCDateTimezone,
  getRetweets,
  filterByDate
}