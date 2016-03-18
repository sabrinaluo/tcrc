var DB = require('./../src/db.json');
var ERROR = require('./error.json');
var config = require('./../config');

exports.tutors = function(req, res) {
  var tutors = getTutors();

  res.send({
    status: 200,
    error: null,
    data: {tutors: tutors}
  });
};

exports.tutor = function(req, res) {
  var tutors = getTutors();
  var username = req.params.username;
  var tutor = tutors.filter(function(tutor) {
    return tutor.username === username;
  });

  if (!tutor.length) {
    return res.status(404).send({
      status: 404,
      error: ERROR.userNotExists.error
    });
  }
  res.send({
    status: 200,
    error: null,
    data: {tutor: tutor}
  });
};

function getTutors() {
  var users = DB.users;
  var tutors = [];
  for (var username in users) {
    var user = users[username];
    if (user.type === 'tutor') {
      tutors.push(user);
    }
  }
  return tutors;
}
