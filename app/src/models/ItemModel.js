import _ from 'lodash';
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
  // name of icon
  icon: String,
  // any stats this modifies
  modifier: [Array, null],
  // type of item
  typeId: String,
  // number of this item
  quantity: Number,
  // can this item be stacked
  isStackable: Boolean,
})

export const ITEM_TYPE_ID = {
  CONSUMABLE: 'CONSUMABLE-ITEM-ID',
  EQUIPMENT: 'EQUIPMENT-ITEM-ID',
}

const ITEM_TYPE_ICON = {
  'CONSUMABLE-ITEM-ID': 'ra-heart-bottle',
  'EQUIPMENT-ITEM-ID': 'ra-plain-dagger',
}

export class CharacterModel extends Model {
  constructor(options = {}) {
    super(options);

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = _.assign({}, {
      name: null,
      id: null,
      description: '',
      icon: '',
      modifier: null,
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
