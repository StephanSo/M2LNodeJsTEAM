const {Client} = require('pg');
const Users = require('../../model/users');

class DAOUser{
    constructor(){
        this._client = new Client({
            connectionString : 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err){
            if (err) return err;
        });
    }

    getUser(cb){
        const query = {
            name:'fetch-all-user',
            text:'select * from "user"',
        };
        this._client.query(query, function(err,result){
            let lesUsers = [];
            if(err){
                console.log(err.stack);
            }else{
                let i=0;
                result.rows.forEach(function (row) {

                    let unUser = new Users(result.rows[i]['idUser'], result.rows[i]['username'], result.rows[i]['password']);
                    lesUsers.push(unUser);
                    i++;
                });

            }
            cb(lesUsers);
        })

    }
    loginUser(usernameP, passwordP, cb) {
        let userC ="ko";
        this.getUser(function (listUsers) {
                let i =0;

                while(i<listUsers.length && userC !=="ok")
                {
                    if(usernameP === listUsers[i]._username){
                        if(passwordP ===listUsers[i]._password){
                            console.log('CONNEXION');
                            userC="ok";


                        }else{
                            console.log('nonOk');
                        }
                    }
                    else{
                        console.log('nonOk')

                    }
                    i++;
                }

                cb(userC)
            }
        );
    }
}
module.exports = DAOUser;