const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

/*
  A TWITTER_API_KEY is required for this application
  You can request one at https://developer.twitter.com/en/apply-for-access
  
  If already have one, you must rename 'env.example.js' to 'env.js'
  And follow the example below:

  const TWITTER_API_KEY='<YOUR_API_KEY_GOES_HERE>';

  Now you are good to go :)
*/

const { TWITTER_API_KEY } = require('./env');
const { DOMAIN, ENV, SERVER_PORT, RETWEETS_URI, TWEET_URI } = require('./src/config');

const corsOrigin = (DOMAIN === 'localhost') && '*';
const app = express();

if (ENV === 'development') process.on('uncaughtException', exception => console.log(exception));

app.use(cors({
  origin: corsOrigin
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const requestHeaders = {
  headers: {
    "Authorization": `Bearer ${TWITTER_API_KEY}`
  }
}

const changeUTCDateTimezone = (utcDateString, lang, timeZone) => new Date(utcDateString).toLocaleString(lang, { timeZone });

const verifyTweetId = uri => axios
  .get(uri, { ...requestHeaders })
  .then(response => response.status)
  .catch(err => err.status);

const getRetweets = uri => axios
  .get(uri, { ...requestHeaders })
  .then(response => response.data)
  .catch(err => err);

const filterByDate = (dateString, beginDateString, endDateString) => {
  return Date.parse(dateString) > Date.parse(beginDateString) && Date.parse(dateString) < Date.parse(endDateString)
}

app.get('/api/retweets', async (req, res) => {

  const rt = {
    count : req.header('rtCount'),
    date : req.header('rtDate'),
    fullBeginDate : `${req.header('rtDate')} ${req.header('rtHourBegin')}`,
    fullEndDate : `${req.header('rtDate')} ${req.header('rtHourEnd')}`,
    hourBegin : req.header('rtHourBegin'),
    hourEnd : req.header('rtHourEnd'),
    id : req.header('rtId'),
  }

  if (!rt.id) res.status(500).send("Tweet ID not found");
  
  const checkTweetStatusURI = `${TWEET_URI}?id=${rt.id}`;
  const isTweetValid = await verifyTweetId(checkTweetStatusURI);
  if (!isTweetValid) {
    res.statusMessage = 'Invalid tweet ID';
    res.status(404).send();
  }

  const requestURI = `${RETWEETS_URI}/${rt.id}.json?count=${rt.count}`;
  const retweets = await getRetweets(requestURI);

  if (Object.keys(retweets)) {
    retweets.map(item => {
      item.created_at_newtimezone = changeUTCDateTimezone(item.created_at, 'pt-BR', 'America/Argentina/Buenos_Aires');
    });
    const validRetweets = retweets.filter(item => filterByDate(item.created_at_newtimezone, rt.fullBeginDate, rt.fullEndDate));

    if (!Object.keys(validRetweets).length) { 
      res.statusMessage = 'Retweets not found';
      res.status(404).send();
    }
    res.send(validRetweets);
  }
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));