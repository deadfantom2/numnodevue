var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
var session       = require('express-session');
var expresMongo   = require('express-mongo-db');
var config        = require('./config/config').database;
var mongoose      = require('mongoose');

// var URL = 'mongodb://localhost:27017/numanagenodevue';

var app = express();

// Db Mongo
mongoose.connect(config, {
  useNewUrlParser: true
}).then(() => {
  console.log(`Database connected successfully ${config}`)
}).catch(err => {
  console.log(`Unable to connect with the database ${err}`)
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expresMongo(URL));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization,Client-Security-Token");
  next();
});
app.options('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.send();
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

module.exports = app;
