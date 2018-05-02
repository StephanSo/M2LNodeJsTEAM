var express = require('express');
var router = express.Router();
var androidController = require('../controllers/androidController');

router.get('/user', androidController.listeUser);
router.get('/user/:id', androidController.listActiviteSenior);

module.exports = router;