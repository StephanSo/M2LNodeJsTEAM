const DAOPrestation = require('../DAO/DAOpg/DAOPrestation');
const daoPrestation = new DAOPrestation();
const DAOLigue = require('../DAO/DAOpg/DAOLigue');
const daoLigue = new DAOLigue();
exports.affiche_prestation = function(req, res) {
    daoPrestation.getAllPrestation(
        function (lesPrestations) {
            daoLigue.voirToutesLesLigue(function (ligue) {
                res.render('conseiller/choisirPrestation',{liste:lesPrestations, ligues:ligue,user:req.session.user, role:req.session.role});
            });

        })

};
exports.affiche_prestation_id = function(req,res){
    id = req.params.id;
    daoPrestation.getPrestationById(id, function(unePrestation){
        daoLigue.ligueById(unePrestation._nomligue,function (laLigue) {
            res.render('conseiller/prestationID', {prestation:unePrestation, ligue:laLigue,user:req.session.user, role:req.session.role});
        });

    });
};
exports.valider_prestation = function(req, res) {
    verif = req.body.valider;
    id = req.params.id;
    if(verif === 'on') {
        daoPrestation.UpdateTruePrestationById(id);
        let valid = 'La prestation à été valider';
        daoPrestation.getPrestationById(id, function(unePrestation){
            daoLigue.ligueById(unePrestation._nomligue,function (laLigue) {
                res.render('conseiller/prestationID', {prestation:unePrestation, ligue:laLigue, val:valid,user:req.session.user, role:req.session.role});
            });

        });
    }
    else{
        daoPrestation.UpdateFalsePrestationById(id);
        let erreur='La Prestation n\'as pas été accepter';
        daoPrestation.getPrestationById(id, function(unePrestation){
            daoLigue.ligueById(unePrestation._nomligue,function (laLigue) {
                res.render('conseiller/prestationID', {prestation:unePrestation, ligue:laLigue, erre:erreur,user:req.session.user, role:req.session.role});
            });

        });
    }
};