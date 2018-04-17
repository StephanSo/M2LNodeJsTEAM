var express = require('express');
var router = express.Router();
var androidController = require('../controllers/androidController');

router.get('/user', androidController.listeUser);


module.exports = router;