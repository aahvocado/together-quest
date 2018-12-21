// import Collection from 'models/Collection';
import ItemModel, { ITEM_TYPE_ID } from 'models/ItemModel';

/**
 * gives model of a new item (item should be the function name)
 *
 * @param {object} [options] - additional options to instatiate model with
 * @returns {ItemModel}
 */
export function catnipCoins(options = {}) {
  return new ItemModel(Object.assign({
    name: 'catnip coins',
    isStackable: true,
    typeId: ITEM_TYPE_ID.CURRENCY,
    description: 'Currency for lands under the jurisdiction of the Cat Empire.',
    flavorText: 'A currency that was created and quickly adopted within the past two decades. Even those part of the Dog Nation will accept this currency. The coin is minted with the scent of a rare Nepeta Constellatia plant which elevates its desirability beyond greed.',
  }, options));
}
export function doggyDollars(options = {}) {
  return new ItemModel(Object.assign({
    name: 'doggy dollars',
    isStackable: true,
    typeId: ITEM_TYPE_ID.CURRENCY,
    description: 'Currency for lands under the jurisdiction of the Dog Nation.',
    flavorText: 'A drawing of four dogs sitting around a table playing cards and laughing is depicted on the face of the currency.',
  }, options));
}
export function brokenLeash(options = {}) {
  return new ItemModel(Object.assign({
    name: 'broken leash',
    isStackable: false,
    typeId: ITEM_TYPE_ID.TOOL,
    description: 'A nylon leash that Blinks found on him. The leash looks like it was cut haphazardly with a knife.',
    flavorText: 'A simple and comfortable leash specially designed to be worn by humans.',
  }, options));
}
export function hammer(options = {}) {
  return new ItemModel(Object.assign({
    name: 'hammer',
    isStackable: false,
    typeId: ITEM_TYPE_ID.TOOL,
    description: 'A simple claw hammer tool.',
    flavorText: 'Has an adjustable grip that allows those without opposable thumbs to properly hold.',
  }, options));
}
export function fryingPan(options = {}) {
  return new ItemModel(Object.assign({
    name: 'skillet',
    isStackable: false,
    typeId: ITEM_TYPE_ID.TOOL,
    description: 'A flat-bottomed pan made of iron.',
    flavorText: 'Skillets and pans are an uncommon cooking tool as the only food that are cooked with them are fish.',
  }, options));
}
export function glowDust(options = {}) {
  return new ItemModel(Object.assign({
    name: 'vial of glow dust',
    isStackable: true,
    typeId: ITEM_TYPE_ID.CONSUMABLE,
    description: 'Can be used on a small object which will cause it to glow for a whole day.',
    flavorText: 'Made from grinding and drying a luna moth.',
  }, options));
}
export function handsaw(options = {}) {
  return new ItemModel(Object.assign({
    name: 'handsaw',
    isStackable: false,
    typeId: ITEM_TYPE_ID.TOOL,
    description: 'A simple and convenient tool made for cutting wood.',
    flavorText: 'Humans are the most common laborers and craftsmen for carpentry due to their dexterity with tools.',
  }, options));
}
export function potato(options = {}) {
  return new ItemModel(Object.assign({
    name: 'potato',
    isStackable: true,
    typeId: ITEM_TYPE_ID.FOOD,
    description: 'Potato',
    flavorText: 'A staple for boars, rats, and mice who have developed a smorgasbord of dishes and preparation styles.',
  }, options));
}
export function rustySword(options = {}) {
  return new ItemModel(Object.assign({
    name: 'rusty sword',
    isStackable: true,
    typeId: ITEM_TYPE_ID.WEAPON,
    description: 'A sword that has been used too much or exposed to the salty ocean water too long.',
    flavorText: 'Any blacksmith would be embarassed.',
  }, options));
}
