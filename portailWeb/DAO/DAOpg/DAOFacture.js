const {Client} = require('pg');
const Facture = require('../../model/facture');
class DAOFacture{
    constructor(){
        this._client= new Client({
            connectionString : 'postgres://sonnois:sonnois@192.168.1.23:5432/m2lperso'
        });
        this._client.connect(function (err) {
            if (err) return err;
        });
    }
    afficherFacture(ligue,annee,mois,cb){
        const query={
            name:'fetch-une-facture ',
            text:'select * from facture where ligue =$1 and to_char(date("date"),\'yyyy\')=$2 and to_char(date("date"),\'mm\')=$3',

        };
        const values= [ligue,annee ,mois];
        this._client.query(query,values, function(err,res){
            if(err){
                console.log(err.stack);
            }
            else{
                console.log(res);
                let uneFacture = new Facture(res.rows[0]['numeroFacture'], res.rows[0]['date'],res.rows[0]['ligue']);
                cb(uneFacture);
            }
        })

    }
}
module.exports=DAOFacture;