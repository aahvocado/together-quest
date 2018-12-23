import Collection from 'models/Collection';
import { STAT_TYPE_ID } from 'models/StatModel';
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
// - EXTENSION OF STAT CHANGES
export function debuffLeadFeet(options = {}) {
  return statDecrease(Object.assign({
    name: 'Lead Feet',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'Your feet are so heavy.',
    modifiers: new Collection({
      models: [
        {
          targetTypeId: STAT_TYPE_ID.AGILITY,
          value: -1,
        },
      ],
    }),
  }, options));
}
export function debuffWounded(options = {}) {
  return statDecrease(Object.assign({
    name: 'Wounded',
    description: 'Ouch - you were nearly killed!',
    modifiers: new Collection({
      models: [
        {
          targetTypeId: STAT_TYPE_ID.STRENGTH,
          value: -2,
        }, {
          targetTypeId: STAT_TYPE_ID.AGILITY,
          value: -2,
        }, {
          targetTypeId: STAT_TYPE_ID.WISDOM,
          value: -2,
        }, {
          targetTypeId: STAT_TYPE_ID.CHARISMA,
          value: -2,
        }, {
          targetTypeId: STAT_TYPE_ID.MAGIC,
          value: -2,
        },
      ],
    }),
  }, options));
}
// - COMPLETELY UNIQUE
export function magicSensitivity(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Magic Sensitivity',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You have the unique ability to detect when something is more magical than usual.',
    flavorText: 'Dogs and birds have a propensitiy for magic but sometimes humans have a hidden potential.',
    modifiers: new Collection({
      models: [
        {
          targetTypeId: STAT_TYPE_ID.MAGIC,
          value: 1,
        },
      ],
    }),
  }, options));
}
export function championMeerkatHumanArena(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Champion of the Fire Festival',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You won the human division of the arena at Meermont Clounge!',
    flavorText: 'The human division is treated like a big joke but for humans it is their one chance to get respect among other humans. They prove their worth, but would still lose to an average meerkat.',
    modifiers: new Collection({
      models: [
        {
          targetTypeId: STAT_TYPE_ID.STRENGTH,
          value: 1,
        },
      ],
    }),
  }, options));
}
export function glowing(options = {}) {
  return new EffectsModel(Object.assign({
    name: 'Glowing',
    typeId: EFFECT_TYPE_ID.SPECIAL,
    description: 'You have the unique ability to see colored auras of creatures. You also have the ability to see specially created colored trails.',
    flavorText: 'The Glowers of Gideon love the colorful effects more than the practical use of glowing.',
    modifiers: new Collection({
      models: [
        {
          targetTypeId: STAT_TYPE_ID.STRENGTH,
          value: 1,
        }, {
          targetTypeId: STAT_TYPE_ID.AGILITY,
          value: 1,
        }, {
          targetTypeId: STAT_TYPE_ID.WISDOM,
          value: 1,
        }, {
          targetTypeId: STAT_TYPE_ID.CHARISMA,
          value: 1,
        }, {
          targetTypeId: STAT_TYPE_ID.MAGIC,
          value: 1,
        },
      ],
    }),
  }, options));
}
