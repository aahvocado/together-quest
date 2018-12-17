import _ from 'lodash';
import { schema } from 'js-schema';

export const statSchema = schema({
  // name of stat
  name: String,
  // base value of modifier
  value: Number,
  // changes to the value
  modifier: Number,
  // how much a given amount affects a dice roll
  influence: Function,
})

export class StatModel {
  constructor(options = {}) {

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = _.assign({}, {
      name: null,
      value: 0,
      modifier: 0,
      influence: (value) => (value),
    }, options.attributes);

    // validate
    if (!statSchema(this.attributes)) {
      console.error('schema mismatch');
    }

  }
}

export default StatModel;
