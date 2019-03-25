const express = require('express')
var mysql = require('mysql')
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

  console.log(JSON.parse(request.body))

  /*var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "8011vova123"
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("create database if not exists Ikea", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });

    con.query("", function (err, result) {
      if (err) throw err;
      console.log("use Ikea db");
    });

    let command =
      `create table if not exists FormBuilder(
      name varchar(255) primary key not null,
      formJson json not null)`;

    con.query(command, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  })*/
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})