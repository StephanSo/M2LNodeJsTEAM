const DAOUser= require('../DAO/DAOpg/DAOUser');
const daoUser = new DAOUser();

exports.listeUser = function (req,res) {
    daoUser.getUser(function (LesUsers) {
        let ListUser = JSON.stringify(LesUsers);
        res.send(ListUser);
    })
};