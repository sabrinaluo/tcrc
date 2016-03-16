var path = require('path');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var config = require('./config');
var apiRouter = require('./apiRouter');
var auth = require('./middleware/auth');

var staticDir = path.join(__dirname, 'dist');
var app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(morgan('dev'));

app.use('/', express.static(staticDir));
app.use('/api/', apiRouter);

app.listen(config.port, function () {
  console.log('app is listening on port: ' + config.port);
});

module.exports = app;
