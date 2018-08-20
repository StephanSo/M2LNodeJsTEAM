const {Client} = require('pg');
class DAODemandePrestation {
    constructor() {
        this._client = new Client({
            connectionString : 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err) {
            if (err) return err;
        });
    }
    ajouterDemandePrestation(idLigue, dateDemande, nbCopie, typeCopie, nbAffr, pdsAffr) {
        const text='insert into prestation values(nextval(\'seq_num_prestations\'),$1,$2,null,$5,$6,$4,$3)';

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