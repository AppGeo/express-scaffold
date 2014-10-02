'use strict';

var path = require('path');
var http = require('http');
var express = require('express');
var app = express();
var logger = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV;


// Express setup
// -------------

//app.set('views', './server/views');
//app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(compress());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));


// Routes
// ------

app.use('/users', require('./routes/users'));

module.exports = app;