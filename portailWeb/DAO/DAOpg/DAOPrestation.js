const {Client} = require('pg');
const Prestation = require('../../model/prestation');

class DAOPrestation{
    constructor(){
        this._client = new Client({
            connectionString : 'postgres://groupe0:groupe0@192.168.222.86:5432/M2L'
            // connectionString : process.ENV.DATABASE_URL
        });

        this._client.connect(function (err){
            if (err) return err;
        });
    }

    getAllPrestation(cb){
        const requete={
            name:'fetch-all-prestation',
            text:'select * from prestation order by idpresta',
        };
        this._client.query(requete, function (err, result) {
            let lesPrestations= [];
            if(err){
                console.log(err.stack);
            }
            else{
                let i =0;
                result.rows.forEach(function () {

                    let unePrestation = new Prestation(result.rows[i]['idpresta'], result.rows[i]['ligue'],result.rows[i]['date'],result.rows[i]['nbcopie'],
                        result.rows[i]['typecopie'],result.rows[i]['nbcourrier'],result.rows[i]['poidsCourrier'],result.rows[i]['etat']);
                    lesPrestations.push(unePrestation);
                    i++;
                });
            }
            cb(lesPrestations)
        })
    }
    getPrestationById(id,cb){
        const requete={
            name:'fetch-prestation-by-id',
            text:'select * from prestation where idpresta=$1',
            values: [id]
        };
        this._client.query(requete, function (err, result){

            if(err){
                console.log(err.stack);
            }
            else{

                result.rows.forEach(function () {
                    //console.log('TESTI',result.rows[i]['etat']);
                    let unePrestation = new Prestation(result.rows[0]['idpresta'], result.rows[0]['ligue'],result.rows[0]['date'],result.rows[0]['nbcopie'],
                        result.rows[0]['typecopie'],result.rows[0]['nbcourrier'],result.rows[0]['poidscourrier'],result.rows[0]['etat']);
                    cb(unePrestation);
                });
            }

        })
    }
    UpdateTruePrestationById(id){
        const requete={
            name:'updateT-prestation-by-id',
            text:'update prestation set etat=true where idpresta=$1',
            values: [id]
        };
        this._client.query(requete, function (err, result){

            if(err){
                console.log(err.stack);
            }
            else{
                console.log(result.rows);
            }

        })
    }
    UpdateFalsePrestationById(id){
        const requete={
            name:'updateF-prestation-by-id',
            text:'update prestation set etat=false where idpresta=$1',
            values: [id]
        };
        this._client.query(requete, function (err, result){

            if(err){
                console.log(err.stack);
            }
            else{
                console.log(result.rows);
            }

        })
    }
}

module.exports = DAOPrestation;