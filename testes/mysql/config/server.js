var consign = require('consign');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}));

consign().include('app/routes')
    .then('config/dbConnect.js')
    .then('app/Models')
    .into(app)
module.exports = app;