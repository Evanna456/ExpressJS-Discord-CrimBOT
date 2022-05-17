var createError:any = require('http-errors');
var express:any = require('express');
var path:any = require('path');
var cookieParser:any = require('cookie-parser');
var logger:any = require('morgan');
var rateLimit:any = require("express-rate-limit");

var indexRouter:any = require('./routes/index');
//var usersRouter = require('./routes/users');

var app:any = express();

//ratelimiter
const limit:any = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(limit);

app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req:any, res:any, next:any) {
  next(createError(404));
});

// error handler
app.use(function (err:any, req:any, res:any, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(404).render('errors/404');
});

module.exports = app;