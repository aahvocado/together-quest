import schema from 'js-schema';

import Model from 'models/Model'

const effectSchema = schema({
  // type id
  typeId: String,
  // name
  name: String,
  // description
  description: String,
  // optional flavor text
  flavorText: [String, undefined],
  // name of icon (for IconComponent)
  icon: [String, undefined],
})

export const EFFECT_TYPE_ID = {
  GENERIC: 'GENERIC-EFFECT-ID',
  BUFF: 'BUFF-EFFECT-ID',
  DEBUFF: 'DEBUFF-EFFECT-ID',
  TEMPORARY: 'TEMPORARY-EFFECT-ID',
  SPECIAL: 'SPECIAL-EFFECT-ID',
  WEAPON: 'WEAPON-EFFECT-ID',
}

const EFFECT_TYPE_ICON = {
  [EFFECT_TYPE_ID.GENERIC]: 'fa-sun',
  [EFFECT_TYPE_ID.BUFF]: 'ra-aura',
  [EFFECT_TYPE_ID.DEBUFF]: 'ra-player-pain',
  [EFFECT_TYPE_ID.TEMPORARY]: 'ra-bottled-bolt',
  [EFFECT_TYPE_ID.SPECIAL]: 'ra-moon-sun',
}
/**
 * data for an item effect, status effect, stat modifier, etc
 */
export class EffectModel extends Model {
  constructor(defaultAttributes = {}) {
    super(defaultAttributes);

    this.schema = effectSchema;

    this.set(Object.assign({
      icon: EFFECT_TYPE_ICON[defaultAttributes.typeId],
    }, defaultAttributes));

    this.validate();
  }
}

export default EffectModel;
