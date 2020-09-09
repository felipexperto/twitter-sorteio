const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/*
  A TWITTER_API_KEY is required for this application
  You can request one at https://developer.twitter.com/en/apply-for-access
  
  If already have one, you must rename 'env.example.js' to 'env.js'
  And follow the example below:

  const TWITTER_API_KEY='<YOUR_API_KEY_GOES_HERE>';

  Now you are good to go :)
*/
const { DOMAIN, ENV, SERVER_PORT } = require('./src/config');

const { getAllRetweets } = require('./api/requests/retweets');

const corsOrigin = (DOMAIN === 'localhost') && '*';
const app = express();

if (ENV === 'development') process.on('uncaughtException', exception => console.log(exception));

app.use(cors({
  origin: corsOrigin
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/retweets', getAllRetweets);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));