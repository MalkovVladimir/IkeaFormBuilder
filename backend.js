const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname))
app.use(express.json())

app.get('/', (request, response) => {
  response.sendFile('index.html', { root: __dirname })
})

app.post('/', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/')
  response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')

  console.log(request.body)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})