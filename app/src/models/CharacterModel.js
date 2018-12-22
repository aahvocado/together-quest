import schema from 'js-schema';

import Collection from 'models/Collection';
import Model from 'models/Model'

const characterSchema = schema({
  // name
  name: String,
  // description, title, honorific, or subheading
  '?title': String,
  // // list of stats
  // stats: Collection,
  // // list of equipment
  // equipments: Collection,
  // // list of inventory
  // inventory: Collection,
  // // any innate traits
  // traits: Collection,
  // // honors given
  // honors: Collection,
})

export class CharacterModel extends Model {
  constructor(defaultAttributes = {}) {
    super(defaultAttributes);

    this.schema = characterSchema;

    this.set(Object.assign({
      stats: new Collection(),
      equipments: new Collection(),
      inventory: new Collection(),
      traits: new Collection(),
      honors: new Collection(),
    }, defaultAttributes));

    this.validate();
  }
}

export default CharacterModel;
