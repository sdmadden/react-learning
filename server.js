const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('dist'))

app.get('/api/getList', (req, res) => {
  var list = ['item1', 'item2', 'item3']
  res.json(list)
  console.log('Sent list of items')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
