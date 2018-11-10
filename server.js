var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);
app.listen(port);
console.log("WEB API Running.......");
