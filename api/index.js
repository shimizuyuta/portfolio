require('dotenv').config();
const express = require('express')
const app = express()
app.disable('x-powered-by');

const router = require('./router')
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler')
const timeout = require('connect-timeout');

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
});
app.use(timeout(parseInt(process.env.SERVER_TIMEOUT_MSEC || 60000)));

app.use(haltOnTimedout);
app.use('/', router);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}


module.exports = {
	path: "/api",
	handler: app
};