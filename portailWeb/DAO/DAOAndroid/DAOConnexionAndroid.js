const {Client} = require('pg');
const ActiviteAdapte = require('../../model/activiteadapte');
const Activite = require('../../model/activite');

class DAOConnexionAndroid {
    constructor() {
        this._client = new Client({
            connectionString : 'postgres://sonnois:sonnois@192.168.1.23:5432/m2lperso'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err) {
            if (err) return err;
        });
    }

    activiteParSenior(idSenior, cb){
        
        const query = {
            name:'fetch-senior-activite',
            text:'select * from activiteadapte where senior = $1',
            values: [idSenior]
        };
        this._client.query(query, function (err, result) {
            let lesActAdaps = [];
            if(err){
                console.log(err.stack);
            }
            else{
                result.rows.forEach(function (i) {
                    let uneActAdap = new ActiviteAdapte(i['senior'],i['activite']);
                    lesActAdaps.push(uneActAdap);
                    
                });
                cb(lesActAdaps);

            }
        })
    }
    lactivite(activite, cb){
        const query = {
            name:'fetch-activite',
            text:'select * from activite where identifiant = $1',
            values: [activite]
        };
        this._client.query(query, function(err, result){
            if(err){
                console.log(err.stack);
            }
            else{
                result.rows.forEach(function(){
                    let unActivite = new Activite(result.rows[0]['identifiant'],result.rows[0]['designation'],result.rows[0]['nbMax']);
                    cb(unActivite);
                })
            }
        })
        
    }
}
module.exports = DAOConnexionAndroid;