//NB ON ABNADONNE LA NOTION DE PISTES EXPERT / PRIORITAIRE OU NON
//c'est diificile à qualifier

//idem que dans la table user
//on récupère les infos du profil
//ensuite on applique les filtres au début des conditions
//ici parcours au mot clé "fr" -> il est résident FR
//ensuite le mot clé "cederEnse"
//et dans le user on fait des conditions pour récupérer le bon parcours et ses pistes de réflexion
//si resident "fr" et typeParcours "cederEnse" alors c'est le fichier frPiste_parcoursCederEnse.js

//fr_parcoursCederEnse.js

.then((data) => {
  Finance.findOne({
    where: { userId: req.params.id },
  })
    .then(() => {
      Parcours.findOne({
        where: { userId: req.params.id },
      })
        .then((parcours) => {
          data.user.age < 70
            ? (condition.conditionAge = true)
            : (condition.conditionAge = false)
          data.user.ageConjoint < 70
            ? (condition.conditionAgeConjoint = true)
            : (condition.conditionAgeConjoint = false)

          data.user.enfantMajeur + data.user.enfantMineur >= 1
            ? (condition.conditionEnfantUn = true)
            : (condition.conditionEnfantUn = false)
          data.user.enfantMajeur + data.user.enfantMineur >= 2
            ? (condition.conditionEnfantDeux = true)
            : (condition.conditionEnfantDeux = false)
          data.user.enfantMineur >= 1
            ? (condition.conditionEnfantMineur = true)
            : (condition.conditionEnfantMineur = false)
          data.detentionImmoExploitation != ''
            ? (condition.immoExploitation = true)
            : (condition.immoExploitation = false)
          parcours.typeParcours === 'cederEntreprise' //OK
            ? (condition.conditionParcours = true)
            : (condition.conditionParcours = false)
          data.user.residenceFiscale === 'france' // OK
            ? (condition.conditionResidence = true)
            : (condition.conditionResidence = false)
          data.detentionImmoExploitation === 'societe' ||
            data.detentionImmoExploitation === 'societeEtHorsSociete'
            ? (condition.conditionImmoEntrepriseSociete = true)
            : (condition.conditionImmoEntrepriseSociete = false)
          data.detentionImmoExploitation === 'horsSociete'
            ? (condition.conditionImmoEntrepriseHorsSociete = true)
            : (condition.conditionImmoEntrepriseHorsSociete = false)
          data.user.nbrePetitEnfant >= 1
            ? (condition.conditionPetitEnfant = true)
            : (condition.conditionPetitEnfant = false)
          data.user.situationFamille === 'marie'
            ? (condition.conditionMarieOuiNon = true)
            : (condition.conditionMarieOuiNon = false)

          ///SANS CONDITION
          listePisteSansCondition.forEach(function (piste) {
            if (
              (piste.parcoursCeder === condition.conditionParcours   &&
              piste.residenceFiscale === condition.conditionResidence  
            ) {
              pisteSansConditionExperte.push(piste.nomPiste)
            }
          })


          const listePisteSansCondition = [
            // new pisteSansConditions("lbo", "", true, true, true, true, false, false, true),
            // new pisteSansConditions("reductionCapitalSeule", "", true, true, true, true, false, false, true),
            new pisteSansConditions(
              'assuranceVieIr',
              '',
              true,
              true,
              true,
              true,
              true,
              false,
              false,
            ),