var express = require('express');
var router = express.Router();



var auth_controller = require('../controllers/auth_controller');

router.get('/login',auth_controller.login_form);

router.post('/login',auth_controller.login_authentication);

router.get('/logout',auth_controller.logout);


module.exports = router;

