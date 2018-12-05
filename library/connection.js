var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'sawit'
    
    // host: process.env.DB_HOST,
    // port: process.env.PORT,
    // user: process.env.DB_USER,
    // database: process.env.DB_DATABASE,
    // password: process.env.DB_PASS,
    // socketPath : '/cloudsql/${process.env.DB_INSTANCE_NAME'

    //     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
});

connection.connect(function (err) {
    if(err) throw err;
});



module.exports = connection;
