import EffectsModel, { EFFECT_TYPE_ID } from 'models/EffectsModel';

/**
 * gives model of a new item (item should be the function name)
 *
 * @param {object} [options] - additional options to instatiate model with
 * @returns {EffectsModel}
 */
// - GENERAL
export function statIncrease(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Stat Increased',
    typeId: EFFECT_TYPE_ID.BUFF,
    // description: '',
    flavorText: 'Buffs are the best! It\'s like your muscles have muscles!',
  }, options));
}
export function statDecrease(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Stat Decreased',
    typeId: EFFECT_TYPE_ID.DEBUFF,
    // description: '',
    flavorText: 'Debuffs are the worst. It\'s like your muscles ate pizza and sat on the couch all day.',
  }, options));
}
// - COMPLETELY UNIQUE
export function magicSensitivity(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Magic Sensitivity',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You have the unique ability to detect when something is more magical than usual.',
    flavorText: 'Dogs and birds have a propensitiy for magic but sometimes humans have a hidden potential.',
  }, options));
}
export function glowing(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Glowing',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You have the unique ability to see colored auras of creatures. You also have the ability to see specially created colored trails.',
    flavorText: 'The Glowers of Gideon love the colorful effects more than the practical use of glowing.',
  }, options));
}
