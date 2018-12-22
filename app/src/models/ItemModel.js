import schema from 'js-schema';

import Collection from 'models/Collection';
import Model from 'models/Model'

const itemSchema = schema({
  // type id
  typeId: String,
  // name
  name: String,
  // description
  description: [String, undefined],
  // flavor text
  flavorText: [String, undefined],
  // name of icon (for IconComponent)
  icon: String,
  // number of this item
  quantity: Number,
  // can this item be stacked
  isStackable: Boolean,

  // any modifying effects
  effects: Collection,
})

export const ITEM_TYPE_ID = {
  CONSUMABLE: 'CONSUMABLE-ITEM-ID',
  CURRENCY: 'CURRENCY-ITEM-ID',
  EQUIPMENT: 'EQUIPMENT-ITEM-ID',
  FOOD: 'FOOD-ITEM-ID',
  TOOL: 'TOOL-ITEM-ID',
  WEAPON: 'WEAPON-ITEM-ID',
}

const ITEM_TYPE_ICON = {
  [ITEM_TYPE_ID.CONSUMABLE]: 'ra-heart-bottle',
  [ITEM_TYPE_ID.CURRENCY]: 'fa-money-bill',
  [ITEM_TYPE_ID.EQUIPMENT]: 'ra-plain-dagger',
  [ITEM_TYPE_ID.FOOD]: 'ra-meat',
  [ITEM_TYPE_ID.TOOL]: 'ra-hammer',
  [ITEM_TYPE_ID.WEAPON]: 'ra-plain-dagger',
}
/**
 * data for an item for a character's inventory
 */
export class ItemModel extends Model {
  constructor(defaultAttributes = {}) {
    super(defaultAttributes);

    this.schema = itemSchema;

    this.set(Object.assign({
      icon: ITEM_TYPE_ICON[defaultAttributes.typeId],
      quantity: 0,
      isStackable: false,
      effects: new Collection(),
    }, defaultAttributes));

    this.validate();
  }
}

export default ItemModel;
