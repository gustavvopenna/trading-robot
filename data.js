require('dotenv').config()

const querystring = require('querystring')
const axios = require('axios').default

const PARAMS = {
  function: 'TIME_SERIES_INTRADAY',
  symbol: 'AAPL',
  interval: '60min',
  apikey: process.env.API_KEY
}

const query = querystring.stringify(PARAMS)

async function getData() {
  console.log('Calling Data API...')
  const response = await axios.get(process.env.BASE_URL + query)
  console.log('Fetch info: ' + response.data['Meta Data']['1. Information'])
  console.log('----------------------------------------------------------')

  const data = response.data[`Time Series (${PARAMS.interval})`]
  console.log(data)
  return data
}

module.exports.getData = getData
