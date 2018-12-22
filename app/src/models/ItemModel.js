import schema from 'js-schema';

import Model from 'models/Model'

const itemSchema = schema({
  // type
  typeId: String,
  // name of item
  name: String,
  // description
  description: String,
  // optional flavor text
  flavorText: [String, null],
  // name of icon
  icon: String,
  // any modifying effects
  modifiers: [Array, null],
  // number of this item
  quantity: Number,
  // can this item be stacked
  isStackable: Boolean,
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
  constructor(options = {}) {
    super(options);

    this.schema = itemSchema;

    this.set(Object.assign({
      typeId: undefined,
      name: undefined,
      description: '',
      flavorText: null,
      icon: undefined,
      modifiers: null,
      quantity: 0,
      isStackable: false,
    }, options));

    this.set({
      icon: this.attributes.icon || ITEM_TYPE_ICON[this.attributes.typeId],
    })

    this.validate();
  }
}

export default ItemModel;
