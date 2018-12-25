import schema from 'js-schema';

// import Collection from 'models/Collection';
import Model from 'models/Model'

import * as catquestLanguageHelper from 'apis/catquest/catquestLanguageHelper';

const modifierSchema = schema({
  // type id
  typeId: String,
  // typeId of the StatType it is affecting
  targetTypeId: String,
  // value
  value: Number,
})

export const MODIFIER_TYPE_ID = {
  GENERIC: 'GENERIC-MODIFIER-ID',
}

const MODIFIER_TYPE_ICON = {
  [MODIFIER_TYPE_ID.GENERIC]: 'fa-adjust',
}
/**
 * data for an item effect, status effect, stat modifier, etc
 */
export class ModifierModel extends Model {
  /** @override */
  constructor(defaultAttributes = {}) {
    super(defaultAttributes);

    this.schema = modifierSchema;

    this.set(Object.assign({
      typeId: MODIFIER_TYPE_ID.GENERIC,
      icon: MODIFIER_TYPE_ICON[MODIFIER_TYPE_ID.GENERIC],
      name: catquestLanguageHelper.getStatName(defaultAttributes.targetTypeId),
      value: 0,
    }, defaultAttributes));

    this.validate();
  }
}

export default ModifierModel;
