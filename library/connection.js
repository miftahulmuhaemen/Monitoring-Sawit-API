var mysql = require('mysql');
require('dotenv').config();


let config = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    socketPath : '/cloudsql/${process.env.DB_INSTANCE_NAME}`'
});

var connection = mysql.createConnection(config);

connection.connect(function (err) {
    if(err) throw err;
});

module.exports = connection;
