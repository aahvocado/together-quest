const characterSchema = {
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
  statMods: {
    strength: 0,
    agility: 0,
    wisdom: 0,
    charisma: 0,
    magic: 0,
  }
};
const equipmentSchema = {
  slot: '',
  name: '',
  statMods: {},
  description: '',
};

// export
// export default characterData;

export {
  characterSchema,
  equipmentSchema,
};
