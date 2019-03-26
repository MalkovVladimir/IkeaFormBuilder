var mysql = require('mysql')

var con = mysql.createConnection({
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
})