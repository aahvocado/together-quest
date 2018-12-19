import CharacterModel from 'models/CharacterModel';
import StatModel from 'models/StatModel';

const STRENGTH_ID = 'STRENGTH-STAT-ID';
const AGILITY_ID = 'AGILITY-STAT-ID';
const WISDOM_ID = 'WISDOM-STAT-ID';
const CHARISMA_ID = 'CHARISMA-STAT-ID';
const MAGIC_ID = 'MAGIC-STAT-ID';

export const NOOK = new CharacterModel({
  name: 'Nook',
  id: 'NOOK-ID',
  title: 'Mighty Savannah Cat',
  stats: [
    new StatModel({
      id: STRENGTH_ID,
      name: 'strength',
      value: 7,
      modifier: -2,
    }),
    new StatModel({
      id: AGILITY_ID,
      name: 'agility',
      value: 5,
      modifier: -2,
    }),
    new StatModel({
      id: WISDOM_ID,
      name: 'wisdom',
      value: 3,
      modifier: -2,
    }),
    new StatModel({
      id: CHARISMA_ID,
      name: 'charisma',
      value: 1,
      modifier: -2,
    }),
    new StatModel({
      id: MAGIC_ID,
      name: 'magic',
      value: 0,
      modifier: -2,
    }),
  ],
  equipments: [{
    slot: 'hand',
    name: 'Assassin\'s gaunlet',
    statMods: {},
    description: "",
  }, {
    slot: 'hand',
    name: 'Burning Blade (out of fluid)',
    statMods: {strength: 1},
    description: "Your personal rapier!",
  }, {
    slot: 'body',
    name: 'Leather Jacket',
    statMods: {},
    description: "Cooler than Blink's",
  }],
  stuff: [
    '78 catnip coins',
    '10 doggy dollars',
    'the Red fragment',
    'backup dagger',
    'kris',
    'whiskey bottle with water',
    'Nook\'s Rapier',
    'lockpicking kit'
  ],
  traits: [
    'Tall',
    'Intimidating',
    'Crippled'
  ],
  honors: [
    'Flaming Cat Champion'
  ],
  statMods: {
    strength: 1,
    agility: -2,
    wisdom: 0,
    charisma: 0,
    magic: 0,
  }
});
export const PEARL = new CharacterModel({
  name: 'Pearl',
  id: 'PEARL-ID',
  title: 'Brave Dachshund Captain',
  stats: [
    new StatModel({
      id: STRENGTH_ID,
      name: 'strength',
      value: 4,
      modifier: -2,
    }),
    new StatModel({
      id: AGILITY_ID,
      name: 'agility',
      value: 0,
      modifier: -2,
    }),
    new StatModel({
      id: WISDOM_ID,
      name: 'wisdom',
      value: 5,
      modifier: -2,
    }),
    new StatModel({
      id: CHARISMA_ID,
      name: 'charisma',
      value: 6,
      modifier: -2,
    }),
    new StatModel({
      id: MAGIC_ID,
      name: 'magic',
      value: 1,
      modifier: -2,
    }),
  ],
  equipments: [{
    slot: 'accessory',
    name: 'Mink\'s Grappling Hook',
    statMods: {},
    description: '',
  }, {
    slot: 'neck',
    name: 'Locket of Treats',
    statMods: {},
    description: 'Once per day, make a random candy treat!',
  }, {
    slot: 'hand',
    name: 'Sharper Knife',
    statMods: {},
    description: 'It will be sharper than the one in your other hand',
  }],
  stuff: [
    '32 catnip coins',
    '5 doggy dollars',
    'the Water Gem',
    'kris',
    'dog cutting dagger',
    'bone knuckles',
  ],
  traits: [
    'Peg-Legged',
    'Bark',
    'Bite',
    'Wounded',
  ],
  honors: [
    'Esteemed Member of the Cat Army',
  ],
  statMods: {
    strength: -1,
    agility: 0,
    wisdom: 0,
    charisma: 1,
    magic: 0,
  }
});
export const DOUGLAS = new CharacterModel({
  name: 'Douglas',
  id: 'DOUGLAS-ID',
  title: 'Mysterious Mole',
  stats: [
    new StatModel({
      id: STRENGTH_ID,
      name: 'strength',
      value: 6,
      modifier: 0,
    }),
    new StatModel({
      id: AGILITY_ID,
      name: 'agility',
      value: 2,
      modifier: 0,
    }),
    new StatModel({
      id: WISDOM_ID,
      name: 'wisdom',
      value: 4,
      modifier: 0,
    }),
    new StatModel({
      id: CHARISMA_ID,
      name: 'charisma',
      value: 4,
      modifier: 0,
    }),
    new StatModel({
      id: MAGIC_ID,
      name: 'magic',
      value: 0,
      modifier: 0,
    }),
  ],
  equipments: [{
    slot: 'body',
    name: 'Mountainhopper\'s Cursed Armor',
    statMods: {},
    description: '',
  }, {
    slot: 'back',
    name: 'Snake-Eye Rug Cape',
    statMods: {},
    description: '',
  }, {
    slot: 'neck',
    name: 'Trencher Amulet',
    statMods: {},
    description: '',
  }, {
    slot: 'hand',
    name: 'Crystalline Shield',
    statMods: {},
    description: '',
  }, {
    slot: 'hand',
    name: 'Magical torch',
    statMods: {},
    description: '',
  }],
  stuff: [
    '0 catnip coins',
    '12 doggy dollars',
    'lantern (unlit)',
    '(3 unidentified scrolls)',
    '(2 unindentified beakers)',
    'pipette',
  ],
  traits: [
    'Short Sighted',
  ],
  honors: [
    'Fire Fighting Human Champion',
  ],
});
export const PALLY = new CharacterModel({
  name: 'Pally',
  id: 'PALLY-ID',
  title: 'Cat Monk of Pallas',
  stats: {
    strength: 5,
    agility: 3,
    wisdom: 5,
    charisma: 3,
    magic: 0,
  },
  equipments: [{
    slot: 'feet',
    name: 'Boots of the Aristocrat',
    statMods: {},
    description: 'Once per day, you can click your heels to instantly clean all your clothes.',
  }, {
    slot: 'back',
    name: 'Cloak of Warmth',
    statMods: {},
    description: 'Warms you right up.',
  }, {
    slot: 'hands',
    name: 'Crossbow of Disgust',
    statMods: {},
    description: 'It shoots bugs!',
  }],
  stuff: [
    '4 catnip coins',
    '0 doggy dollars',
    'Chovy\'s Box of Scents',
    'blindfold',
    'Birdsbane Staff',
    'cave mushrooms',
    'jar of dust',
  ],
  traits: [
    'Fluffy',
    'Contemplative',
  ],
  honors: [
  ],
  statMods: {
    strength: 0,
    agility: 0,
    wisdom: 0,
    charisma: 0,
    magic: 0,
  }
});

export const BLINKS = new CharacterModel({
  name: 'Blinks',
  id: 'BLINKS-ID',
  title: 'Not-Naked Human',
  stats: [
    new StatModel({
      id: STRENGTH_ID,
      name: 'strength',
      value: 2,
      modifier: -2,
    }),
    new StatModel({
      id: AGILITY_ID,
      name: 'agility',
      value: 4,
      modifier: -2,
    }),
    new StatModel({
      id: WISDOM_ID,
      name: 'wisdom',
      value: 5,
      modifier: -2,
    }),
    new StatModel({
      id: CHARISMA_ID,
      name: 'charisma',
      value: 4,
      modifier: -2,
    }),
    new StatModel({
      id: MAGIC_ID,
      name: 'magic',
      value: 1,
      modifier: -2,
    }),
  ],
  equipments: [{
    slot: 'head',
    name: 'Zinc Helmet',
    statMods: {},
    description: "Protects you from bad smells.",
  }, {
    slot: 'body',
    name: 'Leather Jacket',
    statMods: {},
    description: "Your signature style!",
  }, {
    slot: 'wrist',
    name: 'Bracelet of Branches',
    statMods: {},
    description: "Allows you to maniuplate vines.",
  }, {
    slot: 'pants',
    name: 'Breakup Jeans',
    statMods: {},
    description: "Gotten from a couple cats who were in the middle of a couple's spat.",
  }, {
    slot: 'feet',
    name: 'Greaves of Saint Grebes',
    statMods: {agility: -1},
    description: "Lets you walk on water for a short duration.",
  }],
  stuff: [
    '4 catnip coins',
    '0 doggy dollars',
    'a broken leash',
    'hammer',
    'dented pan',
    'vial of glow moth dust',
    'handsaw',
    'a glowing potato',
    'rusty sword',
    'Compound Bow of Twanging'
  ],
  traits: [
    'Magic Sensitivity',
    'Glowing a Bit',
    'Bruised',
  ],
  honors: [
    'Fire Fighting Human Champion',
  ],
});
