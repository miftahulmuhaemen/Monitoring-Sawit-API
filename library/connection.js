var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    port:3306,
    user: 'sql12265328',
    password: '5KnYvgyqNU',
    database: 'sql12265328'
});

connection.connect(function (err) {
    if(err) throw err;
});



module.exports = connection;
