import _ from 'lodash';
import { characterSchema } from 'data/characterSchema';

export class CharacterModel {
  constructor(options = {}) {

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = _.assign({}, {
      // name of character
      name: null,
      // character's id
      id: null,
      // sub title of character
      title: '',
      // list of stats
      stats: [],
      // list of equipment
      equipments: [],
      // list of inventory
      inventory: [],
      // any innate traits
      traits: [],
      // honors given
      honors: [],
    }, options.attributes);

    // validate
    if (!characterSchema(this.attributes)) {
      console.error('CharacterModel schema mismatch');
    }

  }
}

export default CharacterModel;
