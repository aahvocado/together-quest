
/**
 * finds all modifiers of given stats
 *  if `statTypeIds` is not passed in, it will try to use the ones in the character
 *
 * @param {CharacterModel} characterModel
 * @param {Array<string>} [statTypeIds]
 * @returns {Array}
 */
export function getAllStatModifiers(characterModel, statTypeIds) {
  if (!characterModel.get('equipments').models) {
    return null;
  }
  const statTypesToSearchFor = statTypeIds || getStatTypesOfCharacter(characterModel);

  // stat map to be returned
  let modifiedStats = {};
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
  characterModel.get('traits').forEach((traitModel) => {
    traitModel.get('modifiers').forEach((modifier) => {
      const targetStatId = modifier.targetTypeId;
      if (statTypesToSearchFor.includes(targetStatId)) {
        modifiedStats[targetStatId].push(traitModel);
      }
    })
  });

  // // search in `honors`
  characterModel.get('honors').forEach((honorModel) => {
    honorModel.get('modifiers').forEach((modifier) => {
      const targetStatId = modifier.targetTypeId;
      if (statTypesToSearchFor.includes(targetStatId)) {
        modifiedStats[targetStatId].push(honorModel);
      }
    })
  });

  // return list
  return modifiedStats;
}
/**
 * gets the value of each stat after modifiers are applied
 *
 * @param {CharacterModel} characterModel
 * @returns {Array}
 */
export function getModifiedStatValues(characterModel) {
  const allModifiers = getAllStatModifiers(characterModel);
  const typeIds = Object.keys(allModifiers);

  // stat map to be returned
  let modifiedStats = {};
  typeIds.forEach((typeId) => {
    modifiedStats[typeId] = allModifiers[typeId].reduce((accumulator, effectModel) => {
      return accumulator + effectModel.getModifierValueByType(typeId);
    }, 0)
  })

  return modifiedStats;
}
/**
 * calculate value
 *
 * @param {StatModel} statModel
 * @param {Array} modifierCollection
 * @returns {Number}
 */
export function calculateModifiedStatValue(statModel, modifierCollection) {
  const typeId = statModel.get('typeId');
  const baseValue = statModel.get('value');

  const combinedModifierValue = modifierCollection.reduce((accumulator, effectModel) => {
    return accumulator + effectModel.getModifierValueByType(typeId);
  }, 0)

  return baseValue + combinedModifierValue;
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
