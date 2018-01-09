var express = require('express');
var router = express.Router();

var factureController = require('../controllers/factureController');


router.get('/demandeAfficheFact', factureController.demandeAffFacture);
router.post('/demandeAfficheFact', factureController.afficheFactureDemander);

module.exports = router;