class Prestation{
    constructor(idpresta, nomligue,date , nbcopie, typecopie, nbcourrier,poidscourrier,etat){
        this._idpresta = idpresta;
        this._nomligue = nomligue;
        this._date = date;
        this._nbcopie = nbcopie;
        this._typecopie = typecopie;
        this._nbcourrier =nbcourrier;
        this._poidscourrier= poidscourrier;
        this._etat=etat;

    }
}
module.exports = Prestation;