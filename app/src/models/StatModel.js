import _ from 'lodash';
import schema from 'js-schema';

export const statSchema = schema({
  // id
  id: String,
  // name of stat
  name: String,
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

const STAT_DEFAULT_MAP = {
  strength: {
    icon: 'ra-muscle-up'
  },
  agility: {
    icon: 'fa-running'
  },
  wisdom: {
    icon: 'fa-brain'
  },
  charisma: {
    icon: 'fa-smile-wink'
  },
  magic: {
    icon: 'ra-fairy-wand'
  },
}

export class StatModel {
  constructor(options = {}) {

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = _.assign({}, {
      id: '',
      name: null,
      icon: '',
      value: 0,
      modifier: 0,
      influence: (value) => (value),
    }, options);

    this.attributes.icon = STAT_DEFAULT_MAP[this.attributes.name].icon;

    // validate
    if (!statSchema(this.attributes)) {
      console.error(statSchema.errors(this.attributes));
    }
  }
}

export default StatModel;
