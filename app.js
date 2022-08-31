const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const db = require('./config/connection').mongoURI;
const jwt = require('jsonwebtoken');
require("dotenv").config();
global.__basedir = __dirname;

mongoose
   .connect(db)
   .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/', (req, res) => res.send('What are you doing here!'));
app.get('/', (request, response) => {
  response.render('index', {
    title: 'BookStore',
    name: 'BookStore',
    baseurl: 'http://localhost:8080/'
  });
});

app.get('/about', (request, response) => {
  response.render('about', {
    title: 'BookStore',
    name: 'BookStore',
    baseurl: 'http://localhost:8080/'
  });
});

// catch routing
require("./routes")(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Launch app to listen to specified port
app.listen(port, () => console.log("server running on port "+port));

module.exports = app;
