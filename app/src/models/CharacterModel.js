import _ from 'lodash';
import schema from 'js-schema';

export const characterSchema = schema({
  // name of character
  name: String,
  // character's id
  id: String,
  // sub title of character
  title: String,
  // list of stats
  stats: Array,
  // list of equipment
  equipments: Array,
  // list of inventory
  inventory: Array,
  // any innate traits
  traits: Array,
  // honors given
  honors: Array,
})

export class CharacterModel {
  constructor(options = {}) {

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = _.assign({}, {
      name: null,
      id: null,
      title: '',
      stats: [],
      equipments: [],
      inventory: [],
      traits: [],
      honors: [],
    }, options);

    // validate
    if (!characterSchema(this.attributes)) {
      console.error('schema mismatch');
    }

  }
}

export default CharacterModel;
