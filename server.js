const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');
// const requestURI = 'https://api.twitter.com/1.1/search/tweets.json?q=from%3Avagastech&result_type=recent&count=12';
// const requestURI = 'https://api.twitter.com/1.1/search/tweets.json?q=TECHNO&result_type=recent&geocode=-23.6705893,-46.7713017km&granularity=neighborhood&count=12';
const requestURI = 'https://api.twitter.com/1.1/search/tweets.json?q=%23FreeFire&result_type=recent&count=12';
const token = 'AAAAAAAAAAAAAAAAAAAAANGCAQEAAAAAQNeJ5YKYScqBaWpE4zGev%2Fv5jAU%3DekfxQiiiwlGoWgIrUJUs2UWk3kuVr1SXlYI0pE0UG4CCQHHdLp';

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/tweets', (req, res) => {
  axios
    .get(requestURI, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    // .then(response => res.send(response.data.statuses))
    .then(response => {
      const tweets = response.data.statuses;
      const retweets = tweets.map(tweet => tweet.retweeted_status && tweet);
      res.send(retweets);
    })
    .catch(err => res.send(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));