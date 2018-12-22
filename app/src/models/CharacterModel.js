import schema from 'js-schema';

import Collection from 'models/Collection';
import Model from 'models/Model'

const characterSchema = schema({
  // name of character
  name: String,
  // character's id
  id: String,
  // sub title of character
  title: String,
/*  // list of stats
  stats: Collection,
  // list of equipment
  equipments: Collection,
  // list of inventory
  inventory: Collection,
  // any innate traits
  traits: Collection,
  // honors given
  honors: Collection,*/
})

export class CharacterModel extends Model {
  constructor(options = {}) {
    super(options);

    this.schema = characterSchema;

    this.set(Object.assign({
      name: null,
      title: '',
      stats: new Collection(),
      equipments: new Collection(),
      inventory: new Collection(),
      traits: new Collection(),
      honors: new Collection(),
    }, options));

    this.validate();
  }
}

export default CharacterModel;
