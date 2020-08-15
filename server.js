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
const { DOMAIN, ENV, SERVER_PORT, TWEETS_URI } = require('./env-config');
const corsOrigin = (DOMAIN === 'localhost') && '*';
const app = express();

if (ENV === 'development') process.on('uncaughtException', exception => console.log(exception));

app.use(cors({
  origin: corsOrigin
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/tweets', (req, res) => {
  const requestParams = req.url.split('?q=')[1];

  if(!requestParams) res.status(500).send("Invalid parameters");
  
  const requestURI = `${TWEETS_URI}?q=${requestParams}`;
  
  axios
    .get(requestURI, {
      headers: {
        "Authorization": `Bearer ${TWITTER_API_KEY}`
      }
    })
    .then(response => {
      const tweets = response.data.statuses;
      const retweets = tweets.filter(tweet => tweet.retweeted_status && tweet);
      res.send(retweets);
    })
    .catch(err => res.send(err));
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));