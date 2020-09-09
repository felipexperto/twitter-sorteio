const { TWITTER_API_KEY } = require('./../../../env');
const { RETWEETS_URI, TWEET_URI } = require('./../../../src/config');
const { verifyTweetId } = require('./../../helpers/tweet');
const { getRetweets, changeUTCDateTimezone, filterByDate } = require('./../../helpers/retweets');

const requestHeaders = {
  headers: {
    "Authorization": `Bearer ${TWITTER_API_KEY}`
  }
}

const getAllRetweets = async (req, res) => {

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
  const isTweetValid = await verifyTweetId(checkTweetStatusURI, requestHeaders);
  if (!isTweetValid) {
    res.statusMessage = 'Invalid tweet ID';
    res.status(404).send();
  } else {

    const requestURI = `${RETWEETS_URI}/${rt.id}.json?count=${rt.count}`;
    const retweets = await getRetweets(requestURI, requestHeaders);

    if (Object.keys(retweets).length) {
      retweets.map(item => {
        item.created_at_newtimezone = changeUTCDateTimezone(item.created_at, 'pt-BR', 'America/Argentina/Buenos_Aires');
      });
      const validRetweets = retweets.filter(item => filterByDate(item.created_at_newtimezone, rt.fullBeginDate, rt.fullEndDate));

      if (Object.keys(validRetweets).length) {
        res.send(validRetweets);
      } else {
        res.statusMessage = 'Retweets not found';
        res.status(404).send();
      }
    }
  }
};

module.exports = {
  getAllRetweets,
}
