import { schema } from 'js-schema';

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

export const statSchema = {
  // name of stat
  name: '',
  // base value of modifier
  value: 0,
  // changes to the value
  modifier: 0,
  // how much a given amount affects a dice roll
  influence: (value) => (value),
}
