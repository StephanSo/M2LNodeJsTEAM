var express = require('express');
var router = express.Router();
const passport = require('passport');

var prestationController = require('../controllers/prestationController');

//get formulaire saisir nouvel affranchissement
router.get('/',prestationController.affiche_prestation);

//post affiche prestation selectionnée
router.get('/:id',prestationController.affiche_prestation_id);

//post valid prestation selectionnée (etat = true)
router.post('/:id',prestationController.valider_prestation);

module.exports = router;