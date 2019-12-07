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
  try {
    console.log('Calling SMA API...')
    const response = await axios.get(process.env.BASE_URL + query)
    console.log('Fetch info: ' + response.data['Meta Data']['2: Indicator'])
    const data = response.data
    //   console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports.getSMA = getSMA
