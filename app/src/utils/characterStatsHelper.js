
/**
 * finds all modifiers of given stats
 *  if `statTypeIds` is not passed in, it will try to use the ones in the character
 *
 * @param {CharacterModel} characterModel
 * @param {array<string>} [statTypeIds]
 * @returns {Collection}
 */
export function getAllStatModifiers(characterModel, statTypeIds) {
  if (!characterModel.get('equipments').models) {
    return null;
  }
  const statTypesToSearchFor = statTypeIds || getStatTypesOfCharacter(characterModel);

  let modifiedStats = {}; // to be returned

  // create map to each stat
  statTypesToSearchFor.forEach((statTypeId) => {
    modifiedStats[statTypeId] = [];
  });

  // search in `equipments`
  characterModel.get('equipments').forEach((equipmentModel) => {
    equipmentModel.get('effects').forEach((equipmentEffectModel) => {
      equipmentEffectModel.get('modifiers').forEach((modifier) => {
        const targetStatId = modifier.targetTypeId;
        if (statTypesToSearchFor.includes(targetStatId)) {
          modifiedStats[targetStatId].push(equipmentEffectModel);
        }
      })
    })
  });

  // // search in `traits`
  // const modifiersFromTraits = characterModel.get('traits').get('effects').map((traitModel) => (
  //   if (statTypesToSearchFor.includes(traitModel.get('typeId'))) {
  //     return traitModel;
  //   }
  // ));

  // // search in `honors`
  // const modifiersFromHonors = characterModel.get('honors').get('effects').map((honorModel) => (
  //   if (statTypesToSearchFor.includes(honorModel.get('typeId'))) {
  //     return honorModel;
  //   }
  // ));

  // return list
  return modifiedStats;
}
/**
 * finds all modifiers of given stats
 *
 * @param {CharacterModel} characterModel
 * @returns {Array<String>}
 */
 function getStatTypesOfCharacter(characterModel) {
  return characterModel.get('stats').map((statModel) => (statModel.get('typeId')));
}
