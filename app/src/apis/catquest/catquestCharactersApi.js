import CharacterModel from 'models/CharacterModel';

import Collection from 'models/Collection';
import StatModel, { STAT_TYPE_ID } from 'models/StatModel';
// import ItemModel, { ITEM_TYPE_ID } from 'models/ItemModel';

import * as catquestItemsApi from 'apis/catquest/catquestItemsApi';
import * as catquestEffectsApi from 'apis/catquest/catquestEffectsApi';

export function strengthStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.STRENGTH,
    description: 'Represents your physical prowess.',
  }, options));
}
export function agilityStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.AGILITY,
    description: 'Represents how quick you are able to move and reaction time.',
  }, options));
}
export function wisdomStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.WISDOM,
    description: 'Represents your understanding of things and perception of surroundings.',
  }, options));
}
export function charismaStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.CHARISMA,
    description: 'Represents your social status and how well others react to the things you say.',
  }, options));
}
export function magicStat(options = {}) {
  return new StatModel(Object.assign({
    typeId: STAT_TYPE_ID.MAGIC,
    description: 'Represents your proficiency in using magic and magical artifacts.',
  }, options));
}
export const BLINKS = new CharacterModel({
  name: 'Blinks',
  id: 'BLINKS-ID',
  title: 'Not-Naked Human',
  stats: new Collection([
    strengthStat({ value: 2 }),
    agilityStat({ value: 4 }),
    wisdomStat({ value: 5 }),
    charismaStat({ value: 4 }),
    magicStat({ value: 1 }),
  ]),
  equipments: new Collection([
    catquestItemsApi.bowTwanging(),
    catquestItemsApi.jacketLeather(),
    catquestItemsApi.pantsBreakup(),
    catquestItemsApi.greavesSaintGrebes(),
    catquestItemsApi.braceletBranches(),
  ]),
  inventory: new Collection([
    catquestItemsApi.catnipCoins({ quantity: 4 }),
    catquestItemsApi.doggyDollars({ quantity: 0 }),
    catquestItemsApi.brokenLeash(),
    catquestItemsApi.hammer(),
    catquestItemsApi.fryingPan(),
    catquestItemsApi.glowDust({ quantity: 1 }),
    catquestItemsApi.handsaw(),
    catquestItemsApi.potato({ quantity: 1, modifiers: ['glowing'] }),
    catquestItemsApi.swordRusty(),
    catquestItemsApi.bowTwanging(),
  ]),
  traits: new Collection([
    catquestEffectsApi.magicSensitivity(),
    catquestEffectsApi.debuffWounded(),
  ]),
  honors: new Collection([
    catquestEffectsApi.championMeerkatHumanArena(),
  ]),
});
export const NOOK = new CharacterModel({
  name: 'Nook',
  id: 'NOOK-ID',
  title: 'Mighty Savannah Cat',
  stats: new Collection([
    strengthStat({ value: 7 }),
    agilityStat({ value: 5 }),
    wisdomStat({ value: 3 }),
    charismaStat({ value: 1 }),
    magicStat({ value: 0 }),
  ]),
  equipments: new Collection([
    catquestItemsApi.jacketLeather({ description: 'Cooler than Blinks\'' }),
    catquestItemsApi.swordBurning(),
    catquestItemsApi.gauntletAssassins(),
  ]),
  inventory: new Collection([
    catquestItemsApi.catnipCoins({ quantity: 78 }),
    catquestItemsApi.doggyDollars({ quantity: 10 }),
    catquestItemsApi.fragmentCrystal({ name: 'Red Fragment' }),
    catquestItemsApi.rapierNooks(),
    catquestItemsApi.daggerKris(),
    catquestItemsApi.daggerBackup(),
    catquestItemsApi.alcoholWhiskey(),
    catquestItemsApi.lockpick(),
  ]),
  traits: new Collection([
    catquestEffectsApi.traitIntimidating(),
    catquestEffectsApi.debuffWounded(),
  ]),
  honors: new Collection([
    catquestEffectsApi.championMeerkatMainArena(),
  ]),
});
export const PEARL = new CharacterModel({
  name: 'Pearl',
  id: 'PEARL-ID',
  title: 'Brave Dachshund Captain',
  stats: new Collection([
    strengthStat({ value: 4 }),
    agilityStat({ value: 0 }),
    wisdomStat({ value: 5 }),
    charismaStat({ value: 6 }),
    magicStat({ value: 1 }),
  ]),
  equipments: new Collection([
    catquestItemsApi.grapplingHook(),
    catquestItemsApi.locketTreats(),
  ]),
  inventory: new Collection([
    catquestItemsApi.catnipCoins({ quantity: 32 }),
    catquestItemsApi.doggyDollars({ quantity: 5 }),
    catquestItemsApi.gemWater(),
    catquestItemsApi.daggerKris(),
    catquestItemsApi.fistBoneKnuckles(),
    catquestItemsApi.knifeSharper(),
    catquestItemsApi.daggerDogCutting(),
  ]),
  traits: new Collection([
    catquestEffectsApi.legPegged(),
    catquestEffectsApi.barkAndBite(),
    catquestEffectsApi.debuffWounded(),
  ]),
  honors: new Collection([
    catquestEffectsApi.catArmyInsignia(),
  ]),
});
export const DOUGLAS = new CharacterModel({
  name: 'Douglas',
  id: 'DOUGLAS-ID',
  title: 'Mysterious Mole',
  stats: new Collection([
    strengthStat({ value: 6 }),
    agilityStat({ value: 2 }),
    wisdomStat({ value: 4 }),
    charismaStat({ value: 4 }),
    magicStat({ value: 0 }),
  ]),
  equipments: new Collection([
    catquestItemsApi.amuletTrencher(),
    catquestItemsApi.capeSnakeRug(),
    catquestItemsApi.armorMountainhopper(),
    catquestItemsApi.shieldCrystalline(),
  ]),
  inventory: new Collection([
    catquestItemsApi.catnipCoins({ quantity: 0 }),
    catquestItemsApi.doggyDollars({ quantity: 12 }),
    catquestItemsApi.unidentifiedScroll({ quantity: 3 }),
    catquestItemsApi.unidentifiedPotion({ quantity: 2 }),
    catquestItemsApi.pipette({ quantity: 1 }),
    catquestItemsApi.handLantern(),
    catquestItemsApi.torchMagical(),
  ]),
  traits: new Collection([
    catquestEffectsApi.nearSighted(),
    catquestEffectsApi.debuffWounded(),
  ]),
  honors: new Collection([
    catquestEffectsApi.championMeerkatHumanArena(),
  ]),
});
