const express = require('express')
const app = express()
const cron = require('node-cron')

const timeData = require('./data')
const smaData = require('./sma')
const bandsData = require('./bbands')

const PORT = process.env.PORT

// Start Server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

//exceute every 1 min
cron.schedule('* * * * *', function() {
  console.log('Start Cron Job')
  //Getting data
  timeData.getData().then(data => {
    const parseData = Object.entries(data)

    console.log('---------- PARSING DATA ----------')

    const newData = parseData.map(candle => {
      return candle[1]['4. close']
    })

    // console.log(newData)
  })

  //   smaData.getSMA().then(data => console.log(data))
  //   bandsData.getBbands().then(data => console.log(data))
  smaData.getSMA().then(data => data)
  bandsData.getBbands().then(data => data)
  console.log('Done')
})
