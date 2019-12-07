require('dotenv').config()

const querystring = require('querystring')
const axios = require('axios').default

const PARAMS = {
  function: 'BBANDS',
  symbol: 'AAPL',
  interval: '60min',
  time_period: '200',
  series_type: 'close',
  apikey: process.env.API_KEY
}

const query = querystring.stringify(PARAMS)

async function getBbands() {
  console.log('Calling BBands API...')
  const data = await axios
    .get(process.env.BASE_URL + query)
    .then(res => console.log(res.data))
  return data
}

const bBandsData = getBbands()

module.exports.getBbands = bBandsData
