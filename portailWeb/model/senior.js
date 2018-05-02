const Users = require('../model/users');

class Senior extends Users{
    constructor(unIdUser, unUsername, unPassword,unNom, unNumSecu){
        super(unIdUser,unUsername,unPassword);
        this.nom = unNom;
        this.numSecu = unNumSecu;
        


    }
}

module.exports = Senior;