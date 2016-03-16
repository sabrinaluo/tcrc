var express = require('express');
var tutorController = require('./api/tutor');
var authController = require('./api/auth');
var config = require('./config');
var router = express.Router();

// router.get('/tutors', tutorController.index);

router.post('/login', authController.login);

module.exports = router;
