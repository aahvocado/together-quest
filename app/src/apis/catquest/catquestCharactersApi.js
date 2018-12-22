import CharacterModel from 'models/CharacterModel';

import Collection from 'models/Collection';
import StatModel, { STAT_TYPE_ID } from 'models/StatModel';
// import ItemModel, { ITEM_TYPE_ID } from 'models/ItemModel';

import * as catquestItemsApi from 'apis/catquest/catquestItemsApi';

export function strengthStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.STRENGTH,
    name: 'strength',
    description: 'Represents your physical prowess.',
  }, options));
}
export function agilityStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.AGILITY,
    name: 'agility',
    description: 'Represents how quick you are able to move and reaction time.',
  }, options));
}
export function wisdomStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.WISDOM,
    name: 'wisdom',
    description: 'Represents your understanding of things and perception of surroundings.',
  }, options));
}
export function charismaStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.CHARISMA,
    name: 'charisma',
    description: 'Represents your social status and how well others react to the things you say.',
  }, options));
}
export function magicStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.MAGIC,
    name: 'magic',
    description: 'Represents your proficiency in using magic and magical artifacts.',
  }, options));
}
export const BLINKS = new CharacterModel({
  name: 'Blinks',
  id: 'BLINKS-ID',
  title: 'Not-Naked Human',
  stats: new Collection({
    models: [
      strengthStat({
        value: 2,
        modifier: -2,
      }),
      agilityStat({
        value: 4,
        modifier: -2,
      }),
      wisdomStat({
        value: 5,
        modifier: -2,
      }),
      charismaStat({
        value: 4,
        modifier: -2,
      }),
      magicStat({
        value: 1,
        modifier: -2,
      }),
    ],
  }),
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
  inventory: new Collection({
    models: [
      catquestItemsApi.catnipCoins({ quantity: 4 }),
      catquestItemsApi.doggyDollars({ quantity: 0 }),
      catquestItemsApi.brokenLeash(),
      catquestItemsApi.hammer(),
      catquestItemsApi.fryingPan(),
      catquestItemsApi.glowDust({ quantity: 1 }),
      catquestItemsApi.handsaw(),
      catquestItemsApi.potato({ quantity: 1, modifiers: ['glowing'] }),
      catquestItemsApi.rustySword({ quantity: 1 }),
      catquestItemsApi.brokenLeash(),
      // new ItemModel({
      //   name: 'Compound Bow of Twanging',
      //   isStackable: false,
      //   typeId: ITEM_TYPE_ID.EQUIPMENT,
      // }),
    ],
  }),
  traits: [
    'Magic Sensitivity',
    'Glowing a Bit',
    'Bruised',
  ],
  honors: [
    'Fire Fighting Human Champion',
  ],
});
export const NOOK = new CharacterModel({
  name: 'Nook',
  id: 'NOOK-ID',
  title: 'Mighty Savannah Cat',
  stats: new Collection({
    models: [
      new StatModel({
        typeId: STAT_TYPE_ID.STRENGTH,
        name: 'strength',
        value: 7,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.AGILITY,
        name: 'agility',
        value: 5,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.WISDOM,
        name: 'wisdom',
        value: 3,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.CHARISMA,
        name: 'charisma',
        value: 1,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.MAGIC,
        name: 'magic',
        value: 0,
        modifier: -2,
      }),
    ],
  }),
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
  stats: new Collection({
    models: [
      new StatModel({
        typeId: STAT_TYPE_ID.STRENGTH,
        name: 'strength',
        value: 4,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.AGILITY,
        name: 'agility',
        value: 0,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.WISDOM,
        name: 'wisdom',
        value: 5,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.CHARISMA,
        name: 'charisma',
        value: 6,
        modifier: -2,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.MAGIC,
        name: 'magic',
        value: 1,
        modifier: -2,
      }),
    ],
  }),
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
  stats: new Collection({
    models: [
      new StatModel({
        typeId: STAT_TYPE_ID.STRENGTH,
        name: 'strength',
        value: 6,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.AGILITY,
        name: 'agility',
        value: 2,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.WISDOM,
        name: 'wisdom',
        value: 4,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.CHARISMA,
        name: 'charisma',
        value: 4,
        modifier: 0,
      }),
      new StatModel({
        typeId: STAT_TYPE_ID.MAGIC,
        name: 'magic',
        value: 0,
        modifier: 0,
      }),
    ],
  }),
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
