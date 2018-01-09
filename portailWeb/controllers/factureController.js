const DAOLigues= require('../DAO/DAOpg/DAOLigue');
const daoLigues = new DAOLigues();
const DAOFacture= require('../DAO/DAOpg/DAOFacture');
const daoFacture = new DAOFacture();


exports.demandeAffFacture = function (req, res, next) {
    daoLigues.voirToutesLesLigue(function (lesLigues) {
        res.render('../views/ligue/facture/demandeAffFacture.pug',{listLigues :lesLigues,user:req.session.user, role:req.session.role});
    });

};
exports.afficheFactureDemander = function (req, res, next){
    mois = req.body.test;
    ligue = req.body.ligue;
    annee = req.body.annee;
    daoFacture.afficherFacture(ligue,annee,mois, function (laFacture) {
        res.render('../views/ligue/facture/affFactureDetail',{facture :laFacture,user:req.session.user, role:req.session.role});


    })
};