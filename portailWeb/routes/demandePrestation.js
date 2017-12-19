var express = require('express');
var router = express.Router();
var demandePrestationController = require('../controllers/demandePrestationController');

router.get('/', demandePrestationController.demandePrestation);



module.exports = router;