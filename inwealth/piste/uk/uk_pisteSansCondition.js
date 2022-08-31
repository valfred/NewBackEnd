module.exports = {
    uk_pisteSansCondition: function (
        residenceFiscale,
        typeParcours,// on modifie le nom du champ
        sansCondition,
        nomPiste,
        url,
    ) {
        this.residenceFiscale = residenceFiscale
        this.typeParcours = typeParcours
        this.sansCondition = sansCondition
        this.nomPiste = nomPiste
        this.url = url
    },
}
