module.exports = {
    ch_entreprise: function (
        residenceFiscale,
        typeParcours,// on modifie le nom du champ
        nomPiste,
        url,
    ) {
        this.residenceFiscale = residenceFiscale
        this.typeParcours = typeParcours
        this.nomPiste = nomPiste
        this.url = url
    },
}
