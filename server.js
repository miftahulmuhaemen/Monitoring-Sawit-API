var express = require('express'),
    app = express(),
    port = process.env.PORT || 5432,
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var routes = require('./routes')
routes(app)

app.listen(port)