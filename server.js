var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pgClient = require('./pg-connect');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var SourceMapSupport = require('source-map-support');
var app = express();
pgClient.connect(function(err){
  if(err) throw err;
  console.log("Connected to postgresql DB");
});
const port = process.env.PORT || 5000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', productsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
