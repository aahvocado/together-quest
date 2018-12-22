import schema from 'js-schema';

// import Model from 'models/Model'
import ItemModel from 'models/ItemModel';

const equipmentSchema = schema({
  // type id of the slot
  slotTypeId: String,
  // name of the slot
  slotName: String,
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

const EQUIPMENT_SLOT_NAME = {
  [EQUIPMENT_SLOT_TYPE_ID.HEAD]: 'Head',
  [EQUIPMENT_SLOT_TYPE_ID.BODY]: 'Body',
  [EQUIPMENT_SLOT_TYPE_ID.BACK]: 'Back',
  [EQUIPMENT_SLOT_TYPE_ID.PANTS]: 'Pants',
  [EQUIPMENT_SLOT_TYPE_ID.HANDS]: 'Hands',
  [EQUIPMENT_SLOT_TYPE_ID.FEET]: 'Feet',
  [EQUIPMENT_SLOT_TYPE_ID.ACCESSORY]: 'Accessory',
}

/**
 * includes all weapons, equipment, accessories, etc
 */
export class EquipmentModel extends ItemModel {
  constructor(defaultAttributes = {}) {
    super(defaultAttributes);

    this.schema = equipmentSchema;

    this.set(Object.assign({
      slotName: EQUIPMENT_SLOT_NAME[this.get('slotTypeId')],
    }, defaultAttributes));

    this.validate();
  }
}

export default EquipmentModel;
