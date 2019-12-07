require('dotenv').config()

const querystring = require('querystring')
const axios = require('axios').default

const PARAMS = {
  function: 'SMA',
  symbol: 'AAPL',
  interval: '60min',
  time_period: '200',
  series_type: 'close',
  apikey: process.env.API_KEY
}

const query = querystring.stringify(PARAMS)

async function getSMA() {
  console.log('Calling SMA API...')
  const data = await axios
    .get(process.env.BASE_URL + query)
    .then(response => response.data)
  return data
}

const smaData = getSMA()

module.exports.smaData = smaData
