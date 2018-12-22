import schema from 'js-schema';

import Model from 'models/Model'

export const statSchema = schema({
  // type
  typeId: String,
  // name of stat
  name: String,
  // description
  description: String,
  // name of icon
  icon: [String, null],
  // base value of modifier
  value: Number,
  // changes to the value
  modifier: Number,
  // how much a given amount affects a dice roll
  influence: Function,
})

export const STAT_TYPE_ID = {
  STRENGTH: 'strength-stat-id',
  AGILITY: 'agility-stat-id',
  WISDOM: 'wisdom-stat-id',
  CHARISMA: 'charisma-stat-id',
  MAGIC: 'magic-stat-id',
}

const STAT_TYPE_ICON = {
  [STAT_TYPE_ID.STRENGTH]: 'ra-muscle-up',
  [STAT_TYPE_ID.AGILITY]: 'fa-running',
  [STAT_TYPE_ID.WISDOM]: 'fa-brain',
  [STAT_TYPE_ID.CHARISMA]: 'fa-smile-wink',
  [STAT_TYPE_ID.MAGIC]: 'ra-fairy-wand',
}

export class StatModel extends Model {
  constructor(options = {}) {
    super(options);

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = Object.assign({}, {
      typeId: null,
      name: null,
      description: '',
      icon: '',
      value: 0,
      modifier: 0,
      influence: (value) => (value),
    }, options);

    this.attributes.icon = STAT_TYPE_ICON[this.attributes.typeId];

    // validate
    if (!statSchema(this.attributes)) {
      console.error('StatModel.js', statSchema.errors(this.attributes));
    }
  }
  /**
   * adds value and modifier together
   *
   * @returns {number}
   */
  getTrueValue() {
    const { value, modifier } = this.attributes;

    return value + modifier;
  }
}

export default StatModel;
