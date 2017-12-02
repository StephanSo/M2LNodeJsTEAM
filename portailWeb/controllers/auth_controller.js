const DAOUser= require('../DAO/DAOpg/DAOUser');
const daoUser = new DAOUser();

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
            req.session.cookie.user=username;
            console.log('test', req.session);
            res.render('index', {user:req.session.cookie.user});
        }
        else{
            res.render('login');
        }

    });

};


//LOGOUT
exports.logout = function(req, res){
     req.logout();
     res.redirect('/');
 };