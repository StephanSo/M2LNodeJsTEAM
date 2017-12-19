const {Client} = require('pg');
class DAODemandePrestation {
    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }
    ajouterDemandePrestation(idLigue, dateDemande, nbCopie, typeCopie, nbAffr, pdsAffr) {
        const text='insert into prestation values(nextval(\'seq_num_presta\'),$1,$2,$3,$4,$5,$6,null)';

        const values =[idLigue, dateDemande,nbCopie,typeCopie,nbAffr,pdsAffr];
        this._client.query(text,values, function(err,res){
            if(err){
                console.log(err.stack);
            }
            else{
                console.log(res.rows[0]);
            }
        })

    }
}
module.exports = DAODemandePrestation;