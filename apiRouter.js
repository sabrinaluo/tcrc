var express = require('express');
var tutorController = require('./api/tutor');
var config = require('./config');
var router = express.Router();

router.get('/tutors', tutorController.index);

