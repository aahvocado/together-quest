import Collection from 'models/Collection';
import { STAT_TYPE_ID } from 'models/StatModel';
import EffectsModel, { EFFECT_TYPE_ID } from 'models/EffectsModel';
import ModifierModel from 'models/ModifierModel';

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
    flavorText: 'Buffs are the best! It\'s like your muscles have muscles!',
  }, options));
}
export function statDecrease(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Stat Decreased',
    typeId: EFFECT_TYPE_ID.DEBUFF,
    flavorText: 'Debuffs are the worst. It\'s like your muscles ate pizza and sat on the couch all day.',
  }, options));
}
// - STATMODIFIERS
export function modifierStrength(options = {}) {
  return new ModifierModel(Object.assign({
    targetTypeId: STAT_TYPE_ID.STRENGTH,
  }, options))
}
export function modifierAgility(options = {}) {
  return new ModifierModel(Object.assign({
    targetTypeId: STAT_TYPE_ID.AGILITY,
  }, options))
}
export function modifierWisdom(options = {}) {
  return new ModifierModel(Object.assign({
    targetTypeId: STAT_TYPE_ID.WISDOM,
  }, options))
}
export function modifierCharisma(options = {}) {
  return new ModifierModel(Object.assign({
    targetTypeId: STAT_TYPE_ID.CHARISMA,
  }, options))
}
export function modifierMagic(options = {}) {
  return new ModifierModel(Object.assign({
    targetTypeId: STAT_TYPE_ID.MAGIC,
  }, options))
}
// - MORE SPECIFIC BUFFS/DEBUFFS
export function debuffLeadFeet(options = {}) {
  return statDecrease(Object.assign({
    name: 'Lead Feet',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'Your feet are so heavy.',
    modifiers: new Collection([
      modifierAgility({ value: -2 }),
    ]),
  }, options));
}
export function debuffWounded(options = {}) {
  return statDecrease(Object.assign({
    name: 'Wounded',
    description: 'Ouch - you were nearly killed!',
    modifiers: new Collection([
      modifierStrength({ value: -2 }),
      modifierAgility({ value: -2 }),
      modifierWisdom({ value: -2 }),
      modifierCharisma({ value: -2 }),
      modifierMagic({ value: -2 }),
    ]),
  }, options));
}
// - UNINTERESTING
export function traitIntimidating(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Intimidating',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'Other people are more nervous and wary of you.',
  }, options));
}
export function legPegged(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Peg-Legged',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'One of your legs is made of wood.',
    modifiers: new Collection([
      modifierAgility({ value: -1 }),
    ]),
  }, options));
}
export function barkAndBite(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Bark and Bite',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You have a terrifying bark and bite. Quite scary, honestly.',
  }, options));
}
// - COMPLETELY UNIQUE
export function magicSensitivity(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Magic Sensitivity',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You have the unique ability to detect when something is more magical than usual.',
    flavorText: 'Dogs and birds have a propensitiy for magic but sometimes humans have a hidden potential.',
    modifiers: new Collection([
      modifierMagic({ value: 1 }),
    ]),
  }, options));
}
export function championMeerkatHumanArena(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Human Winner of the Fire Festival',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You won the human division of the arena at Meermont Clounge!',
    flavorText: 'The human division is treated like a big joke but for humans it is their one chance to get respect among other humans. They prove their worth, but would still lose to an average meerkat.',
    modifiers: new Collection([
      modifierStrength({ value: 1 }),
    ]),
  }, options));
}
export function championMeerkatMainArena(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Champion of the Fire Festival',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You skillfully won all your fights in the Fire Festival at Meermont Clounge!',
    flavorText: 'Meerkats are pretty tough despite their small size so you must be even tougher! Fighting is a tradition during the Festival of Fire because many contestants burn themselves and that\'s hilarious.',
    modifiers: new Collection([
      modifierStrength({ value: 1 }),
    ]),
  }, options));
}
export function glowing(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Glowing',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You have the unique ability to see colored auras of creatures. You also have the ability to see specially created colored trails.',
    flavorText: 'The Glowers of Gideon love the colorful effects more than the practical use of glowing.',
    modifiers: new Collection([
      modifierStrength({ value: 1 }),
      modifierAgility({ value: 1 }),
      modifierWisdom({ value: 1 }),
      modifierCharisma({ value: 1 }),
      modifierMagic({ value: 1 }),
    ]),
  }, options));
}
export function catArmyInsignia(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Esteemed Member of the Cat Army',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You are a highly respected member of the Cat Army.',
    flavorText: 'This is rarely handed out, as the Cat Army is already selective about the members that they surround themselves with.',
    modifiers: new Collection([
      modifierCharisma({ value: 1 }),
    ]),
  }, options));
}
