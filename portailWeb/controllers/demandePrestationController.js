const DAOLigue= require('../DAO/DAOpg/DAOLigue');
const daoLigue = new DAOLigue();
const DAODemandePrestation = require('../DAO/DAOpg/DAODemandePrestation');
const daoDemandePrestation = new DAODemandePrestation();


exports.demandePrestation = function(req, res) { // attention à la route / depuis le /login
    console.log(req.session);
    res.render('ligue/demandePrestation',{user:req.session.user, role:req.session.role});

};

exports.faireDemande = function (req,res) {
    daoLigue.ligueByUser(req.session.user, function (laLigue) {
        idLigue = laLigue.idLigue;
        dateDemande = req.body.txtDate;
        nbCopie = req.body.nbCopie;
        typeCopie = req.body.rad1;
        nbAffr = req.body.nbCourier;
        pdsAffr = req.body.poidsCourrier;
        daoDemandePrestation.ajouterDemandePrestation(idLigue,dateDemande,nbCopie,typeCopie,nbAffr,pdsAffr);
        res.redirect('/');
    });


}
