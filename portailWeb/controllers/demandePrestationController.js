const DAOLigue= require('../DAO/DAOpg/DAOLigue');
const daoLigue = new DAOLigue();


exports.demandePrestation = function(req, res) { // attention à la route / depuis le /login
    console.log(req.session);
    daoLigue.voirToutesLesLigue(function (lesLigues) {
        res.render('ligue/demandePrestation',{user:req.session.user, role:req.session.role, listLigues:lesLigues});
    });
};