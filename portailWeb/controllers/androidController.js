const DAOUser= require('../DAO/DAOpg/DAOUser');
const daoUser = new DAOUser();
const DAOAndroid = require('../DAO/DAOAndroid/DAOCOnnexionAndroid');
const daoAndroid = new DAOAndroid();

exports.listeUser = function (req,res) {
    daoUser.getUserAndroid(function (LesUsers) {
        let ListUser = JSON.stringify(LesUsers);
        res.send(ListUser);
    })
};

exports.listActiviteSenior = function(req,res){
	let lesActs= [];
	let id = req.params.id;
	daoAndroid.activiteParSenior(id,function(lesActiviteAdap){
		let size = lesActiviteAdap.length;
		let compte= 0;
		lesActiviteAdap.forEach(function(i){
			idAct = i.activite;
			daoAndroid.lactivite(idAct,function(lactivite){
				lesActs.push(lactivite);
				compte +=1;
				console.log(compte);
				console.log(size);
				if(compte ==size){
					let listAct = JSON.stringify(lesActs);
					res.send(listAct);
				}
				
			})

			
		})
		
	})

}