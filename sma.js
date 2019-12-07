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
  const response = await axios.get(process.env.BASE_URL + query)
  const data = response.data
  console.log(data)
  return data
}

module.exports.getSMA = getSMA
