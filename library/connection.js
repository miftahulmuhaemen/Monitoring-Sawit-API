var mysql = require('mysql');
require('dotenv').config();


let config = mysql.createConnection({
    // host: '127.0.0.1',
    // port: 3306,
    // user: 'root',
    // password: '12345678',
    // database: 'sawit'
    
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

config.socketPath = `/cloudsql/${process.env.DB_INSTANCE_NAME}`;


var connection = mysql.createConnection(config);

connection.connect(function (err) {
    if(err) throw err;
});

module.exports = connection;
