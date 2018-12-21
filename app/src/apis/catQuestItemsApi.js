// import Collection from 'models/Collection';
import ItemModel, { ITEM_TYPE_ID } from 'models/ItemModel';

export function catnipCoins(options = {}) {
  return new ItemModel(Object.assign({
    name: 'catnip coins',
    isStackable: true,
    typeId: ITEM_TYPE_ID.CONSUMABLE,
    description: 'Currency for lands under the jurisdiction of the Cat Empire.',
    flavorText: 'A currency that was created and quickly adopted within the past two decades. Even those part of the Dog Nation will accept this currency. The coin is minted with the scent of a rare Nepeta Constellatia plant which elevates its desirability beyond greed.',
  }, options));
}
