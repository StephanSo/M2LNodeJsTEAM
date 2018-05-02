const {Client} = require('pg');
const Role = require('../../model/role');


class DAORole {
    constructor() {
        this._client = new Client({
            connectionString : 'postgres://sonnois:sonnois@192.168.1.23:5432/m2lperso'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err) {
            if (err) return err;
        });
    }
    getRoleByUsername(usernameP,cb){
        const query={
            name:'fetch-role-by-username',
            text:'select role.* from "role" inner join "user" on "user"."role"= role."idRole" where "user".username = $1',
            values:[usernameP]
        }
        this._client.query(query, function (err,result) {
            if(err){
                console.log(err.stack);
            }
            else{
                let unRole = new Role(result.rows[0]['idRole'],result.rows[0]['libelle']);
                let leLibelle = unRole._libelle;
                cb(leLibelle);
            }
        })
    }

}

module.exports = DAORole;