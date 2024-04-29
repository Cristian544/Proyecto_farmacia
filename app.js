var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var users1Router = require('./routes/users1');
var billRouter = require('./routes/bill');
var categoryRouter = require('./routes/category');
var payment_methodRouter = require('./routes/payment_method');
var product_billRouter = require('./routes/product_bill');
var productRouter = require('./routes/product');
var user_billRouter = require('./routes/user_bill');
var usersRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users1', users1Router);
app.use('/bill', billRouter);
app.use('/category', categoryRouter);
app.use('/payment_method', payment_methodRouter);
app.use('/product_bill', product_billRouter);
app.use('/product', productRouter);
app.use('/user_bill', user_billRouter);
app.use('/users', usersRouter);

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

module.exports = app;
