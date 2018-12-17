export const characterSchema = {
  name: undefined,
  id: undefined,
  title: undefined,
  stats: {
    strength: 0,
    agility: 0,
    wisdom: 0,
    charisma: 0,
    magic: 0,
  },
  equipments: [],
  stuff: [],
  traits: [],
  honors: [],
};

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

export const equipmentSchema = {
  slot: '',
  name: '',
  statMods: {},
  description: '',
};
