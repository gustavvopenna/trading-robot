const timeData = require('./data')
// const smaData = require('./sma')
// const getBbands = require('./bbands').getBbands

//Getting data
timeData.getData().then(data => {
  const parseData = Object.entries(data)

  console.log('---------- PARSING DATA ----------')

  const newData = parseData.map(candle => {
    return candle[1]['4. close']
  })

  console.log(newData)
})

// Calling Indicatiors
// smaData.then(res => console.log(res))
// getBbands.then(res => console.log(res))
