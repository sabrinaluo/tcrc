var path = require('path');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var config = require('./config');
var apiRouter = require('./apiRouter');

var staticDir = path.join(__dirname, 'dist');
var app = express();
app.use('/', express.static(staticDir));
// app.use('/api/', apiRouter);

app.listen(config.port, function () {
  console.log('app is listening on port: ' + config.port);
});