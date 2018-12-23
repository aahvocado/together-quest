import Collection from 'models/Collection';
import ItemModel, { ITEM_TYPE_ID } from 'models/ItemModel';
import EquipmentModel, { EQUIPMENT_SLOT_TYPE_ID } from 'models/EquipmentModel';

import * as catquestEffectsApi from 'apis/catquest/catquestEffectsApi';

/**
 * gives model of a new item (item should be the function name)
 *
 * @param {object} [options] - additional options to instatiate model with
 * @returns {ItemModel}
 */
// - GENERAL
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
// - HEAD
export function helmetZinc(options = {}) {
  return new EquipmentModel(Object.assign({
    name: 'Zinc Helmet',
    isStackable: false,
    typeId: ITEM_TYPE_ID.EQUIPMENT,
    description: 'Protects you from bad smells.',
    flavorText: 'Many canary miners died from the swell of smeat so you could wear this on your head.',
    //
    slotTypeId: EQUIPMENT_SLOT_TYPE_ID.HEAD,
  }, options));
}
// - BODY
export function jacketLeather(options = {}) {
  return new EquipmentModel(Object.assign({
    name: 'Leather Jacket',
    isStackable: false,
    typeId: ITEM_TYPE_ID.EQUIPMENT,
    description: 'Your signature style!',
    flavorText: 'Don\'t worry, it\'s actually faux leather.',
    //
    slotTypeId: EQUIPMENT_SLOT_TYPE_ID.BODY,
  }, options));
}
// - HANDS
export function rustySword(options = {}) {
  return new EquipmentModel(Object.assign({
    name: 'rusty sword',
    isStackable: false,
    typeId: ITEM_TYPE_ID.WEAPON,
    description: 'A sword that has been used too much or exposed to the salty ocean water too long.',
    flavorText: 'Any blacksmith would be embarassed.',
    //
    slotTypeId: EQUIPMENT_SLOT_TYPE_ID.HANDS,
  }, options));
}
export function bowTwanging(options = {}) {
  return new EquipmentModel(Object.assign({
    name: 'Compound Bow of Twanging',
    isStackable: false,
    typeId: ITEM_TYPE_ID.WEAPON,
    description: 'Ranged. A powerful bow whose unique craftsmanship resulted in being able to play music on it.',
    flavorText: 'Twingy twangy, jingly jangly~',
    //
    slotTypeId: EQUIPMENT_SLOT_TYPE_ID.HANDS,
  }, options));
}
// - PANTS
export function pantsBreakup(options = {}) {
  return new EquipmentModel(Object.assign({
    name: 'Breakup Jeans',
    isStackable: false,
    typeId: ITEM_TYPE_ID.EQUIPMENT,
    description: 'You got these from a couple who were fighting...',
    flavorText: 'Leslie got these jeans for Simon when she saw they were his favorite shade of grunge and came with dirt pre-smeared.',
    //
    slotTypeId: EQUIPMENT_SLOT_TYPE_ID.PANTS,
  }, options));
}
// - FEET
export function greavesSaintGrebes(options = {}) {
  return new EquipmentModel(Object.assign({
    name: 'Greaves of Saint Grebes',
    isStackable: false,
    typeId: ITEM_TYPE_ID.EQUIPMENT,
    description: 'Allows you to walk on water for short duration. Recharges in a day.',
    flavorText: 'Saint Grebes was a doctor that was clumsy and fell over constantly while on land, so he decided to make lakes his home of choice. He offered his services to all animals but so many of them fell into the water when visiting. He decided to get a magical blessing to allow others to float, but the only thing he had on him were these metallic greaves.',
    //
    slotTypeId: EQUIPMENT_SLOT_TYPE_ID.FEET,
    effects: new Collection({
      models: [
        catquestEffectsApi.debuffLeadFeet(),
      ]
    })
  }, options));
}
// - ACCESSORIES
export function braceletBranches(options = {}) {
  return new EquipmentModel(Object.assign({
    name: 'Bracelet of Branches',
    isStackable: false,
    typeId: ITEM_TYPE_ID.EQUIPMENT,
    description: 'Gives you the ability to manipulate small to medium length branches, vines, and roots.',
    flavorText: 'My favorite is to make vines do a wiggle dance.',
    //
    slotTypeId: EQUIPMENT_SLOT_TYPE_ID.ACCESSORY,
  }, options));
}
