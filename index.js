const timeData = require('./data')
const smaData = require('./sma')
const bandsData = require('./bbands')

//Getting data
timeData.getData().then(data => {
  const parseData = Object.entries(data)

  console.log('---------- PARSING DATA ----------')

  const newData = parseData.map(candle => {
    return candle[1]['4. close']
  })

  console.log(newData)
})

smaData.getSMA().then(data => console.log(data))
bandsData.getBbands().then(data => console.log(data))
