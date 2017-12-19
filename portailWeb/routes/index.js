var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
    function(req, res) {
        console.log(req.session);

        res.render('index', { title: 'Portail de la M2L',user:req.session.user, role:req.session.role});
    }
);

module.exports = router;