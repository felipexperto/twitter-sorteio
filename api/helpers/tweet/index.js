const axios = require('axios');

const verifyTweetId = (uri, headers) => axios
  .get(uri, { ...headers })
  .then(response => response.status)
  .catch(err => err.status);

module.exports = {
  verifyTweetId,
}