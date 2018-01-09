class Facture {
    constructor(id, dateEdition, uneLigue) {
        this.numeroFacture = id;
        this._dateEdition = dateEdition;
        this._uneLigue = uneLigue;
    }
}
module.exports = Facture;