import schema from 'js-schema';
import uuid from 'uuid/v4';

import Model from 'models/Model'

export const itemModel = schema({
  // name of item
  name: String,
  // item's id
  id: String,
  // description
  description: String,
  // optional flavor text
  flavorText: [String, null],
  // name of icon
  icon: String,
  // any modifying effects
  modifiers: [Array, null],
  // type of item
  typeId: String,
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

export class CharacterModel extends Model {
  constructor(options = {}) {
    super(options);

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = Object.assign({}, {
      name: null,
      id: null,
      description: '',
      flavorText: null,
      icon: '',
      modifiers: null,
      typeId: '',
      quantity: 0,
      isStackable: false,
    }, options);

    this.attributes.id = this.attributes.id || uuid();

    this.attributes.icon = ITEM_TYPE_ICON[this.attributes.typeId];

    // validate
    if (!itemModel(this.attributes)) {
      console.error(itemModel.errors(this.attributes));
    }
  }
}

export default CharacterModel;
