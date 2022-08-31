module.exports = {
  pisteDonation: function (
    nomPiste,
    url,
    residenceFiscale,
    typeParcours,
    // parcoursDonner,
    enfantMineur,
    conditionEnfUn,
    conditionEnfDeux,
    enfantHandicape,
    enfantLitDifferent,
    // pisteExperte,
    // pistePrioritaire,
    // pisteNonPrioritaire,
  ) {
    this.nomPiste = nomPiste
    this.url = url
    this.residenceFiscale = residenceFiscale
    this.typeParcours = typeParcours
    // this.parcoursDonner = parcoursDonner
    this.enfantMineur = enfantMineur
    this.conditionEnfUn = conditionEnfUn
    this.conditionEnfDeux = conditionEnfDeux
    this.enfantHandicape = enfantHandicape
    this.enfantLitDifferent = enfantLitDifferent
    // this.pisteExperte = pisteExperte
    // this.pistePrioritaire = pistePrioritaire
    // this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}
