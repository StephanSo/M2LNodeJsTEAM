const {Client} = require('pg');
const Ligue = require('../../model/ligue');

class DAOLigue {
    constructor() {
        this._client = new Client({
            connectionString : 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err) {
            if (err) return err;
        });
    }
    voirToutesLesLigue(displaycb){
        const query = {
            name: 'toutesLesLigues',
            text: 'SELECT * FROM ligue',
        };
        this._client.query(query, function(err, result){
            let lesLigues = [];
            if (err) {
                console.log(err.stack);
            }
            else {
                result.rows.forEach(function(row) {
                    let uneLigue;
                    uneLigue = new Ligue(row['idLigue'], row['nom']);
                    lesLigues.push(uneLigue);
                });
            }
            displaycb(lesLigues);
        });
    };
    ligueByUser(username,cb){
        const query = {
            name:'fetch-une-ligue',
            text:'select ligue."idLigue",nom from ligue inner join "user" on "idLigue"= "user"."idUser" where "user".username= $1',
            values:[username]
        };
        this._client.query(query, function (err, result) {
            if(err){
                console.log(err.stack);
            }
            else{
                result.rows.forEach(function () {
                    let uneLigue = new Ligue(result.rows[0]['idLigue'],result.rows[0]['nom']);
                    cb(uneLigue);

                });
            }
        })

    }
    ligueById(id,cb){
        const query={
            name:'fetch-une-ligue-ById',
            text:'select nom from ligue where "idLigue" =$1',
            values:[id]
        };
        this._client.query(query,function(err, result){
            if(err){
                console.log(err.stack);

            }
            else{
                let laLigue = new Ligue(id, result.rows[0]['nom']);
                cb(laLigue);
            }
        })
    }
}
module.exports = DAOLigue;