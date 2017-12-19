const DAOUser= require('../DAO/DAOpg/DAOUser');
const daoUser = new DAOUser();
const DAORole = require('../DAO/DAOpg/DAORole');
const daoRole = new DAORole();
// LOGIN
exports.login_form = function(req, res) { // attention à la route / depuis le /login
     res.render('login');
 };

exports.login_authentication = function(req, res) {
    username = req.body.username;
    password = req.body.password;

    daoUser.loginUser(username, password, function (okpasok) {
        console.log(okpasok);
        if(okpasok==="ok"){
            req.session.user=username;
            daoRole.getRoleByUsername(username, function (leRole) {
                req.session.role=leRole;

                console.log('test', req.session);
                res.render('index', {user:req.session.user, role:req.session.role});
            })

        }
        else{
            res.render('login');
        }

    });

};


//LOGOUT
exports.logout = function(req, res){
     req.session.user = undefined;
     req.session.role = undefined;
     res.redirect('/');
 };