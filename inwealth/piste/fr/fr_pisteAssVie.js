module.exports = {
  pisteAssVie: function (
    nomPiste,
    url,
    residenceFiscale,
    typeParcours,// on modifie le nom du champ
    //parcoursDonner,//on supprime cette donnée obsolète
    regimeCte,
    regimeSdb,
    age,
    // pisteExperte,
    // pistePrioritaire,
    // pisteNonPrioritaire,
  ) {
    this.nomPiste = nomPiste
    this.url = url
    this.residenceFiscale = residenceFiscale
    this.typeParcours = typeParcours
    // this.parcoursDonner = parcoursDonner // on supprime

    this.regimeCte = regimeCte
    this.regimeSdb = regimeSdb

    this.age = age // aprés 70 ans la condition est false. Donc les pistes avec un âge > 70 ans s'affichent

    // this.pisteExperte = pisteExperte
    // this.pistePrioritaire = pistePrioritaire
    // this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}
