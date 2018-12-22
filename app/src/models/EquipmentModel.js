import schema from 'js-schema';

// import Model from 'models/Model'
import ItemModel from 'models/ItemModel';

const equipmentSchema = schema({
  // id of the slot
  slotTypeId: String,
})

export const EQUIPMENT_SLOT_TYPE_ID = {
  HEAD: 'HEAD-EQUIPMENT-SLOT-ID',
  BODY: 'BODY-EQUIPMENT-SLOT-ID',
  BACK: 'BACK-EQUIPMENT-SLOT-ID',
  PANTS: 'PANTS-EQUIPMENT-SLOT-ID',
  HANDS: 'HANDS-EQUIPMENT-SLOT-ID',
  FEET: 'FEET-EQUIPMENT-SLOT-ID',
  ACCESSORY: 'ACCESSORY-EQUIPMENT-SLOT-ID',
  // dynamic?
  PRIMARY_HAND: 'PRIMARY_HAND-EQUIPMENT-SLOT-ID',
  SECONDARY_HAND: 'SECONDARY_HAND-EQUIPMENT-SLOT-ID',
  ACCESSORY_1: 'ACCESSORY_1-EQUIPMENT-SLOT-ID',
  ACCESSORY_2: 'ACCESSORY_2-EQUIPMENT-SLOT-ID',
  ACCESSORY_3: 'ACCESSORY_3-EQUIPMENT-SLOT-ID',
}

/**
 * includes all weapons, equipment, accessories, etc
 */
export class EquipmentModel extends ItemModel {
  constructor(options = {}) {
    super(options);

    this.schema = equipmentSchema;

    this.set(Object.assign({
      slotTypeId: undefined,
    }, options));

    this.validate();
  }
}

export default EquipmentModel;
