// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : '',
//   database : 'db_sawit'
// })
//
// connection.connect(function (err) {
//   if(err) throw err
// })

var pg = require('pg')
var conString = 'postgres://rivlunuwhujquj:e647f4cd9a0ee3e5c6fc027f62104b4d6c7bd7a1a6711de6846dc25dd9b22cf1@ec2-54-83-49-109.compute-1.amazonaws.com:5432/d40j83837ca2kp'
var client = new pg.Client(conString)
client.connect(function (err){
  if(err) throw err
})

module.exports = client;
