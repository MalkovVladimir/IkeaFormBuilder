const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: __dirname })
})

app.post('/', (request, response) => {
  //response.sendFile('index.html', {root: __dirname })
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})