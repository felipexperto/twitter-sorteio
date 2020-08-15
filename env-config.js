let DOMAIN = '';
let ENV = 'development';
let SERVER_PORT = '';
let APP_URL = '';

const TWEETS_URI = 'https://api.twitter.com/1.1/search/tweets.json';

if (process.env.NODE_ENV) {
  ENV = process.env.NODE_ENV;
}

/*
  https://create-react-app.dev/docs/adding-custom-environment-variables/
  When you run npm start, it is always equal to 'development', 
  when you run npm test it is always equal to 'test', 
  and when you run npm run build to make a production bundle, it is always equal to 'production'.
*/

switch (ENV) {
  case 'production':
    DOMAIN = '';
    SERVER_PORT = '';
    APP_URL = '';
    break;

  default:
    DOMAIN = 'localhost';
    SERVER_PORT = '3001';
    APP_URL = `${DOMAIN}:${SERVER_PORT}`;
    break;
}

module.exports = {
  APP_URL,
  DOMAIN,
  ENV,
  SERVER_PORT,
  TWEETS_URI
};
