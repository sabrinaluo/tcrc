var jwt = require('jsonwebtoken');
var DB = require('./../src/db.json');
var ERROR = require('./error.json');
var config = require('./../config');
var jwtSecret = config.jwtSecret;

exports.login = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var users = DB.users;
  var creds = DB.creds;
  var user = users.hasOwnProperty(username) ? users[username] : null;

  if (user === null) {
    res.status(400).send(ERROR.userNotExists);
    return;
  }

  if (creds[username] !== password) {
    res.status(400).send(ERROR.userPassNotMatch);
    return;
  }

  var token = jwt.sign({username: username}, jwtSecret);

  res.send({
      status: 200,
      error: null,
      data: {user: user, token: token}
    });
};
