const STAT_TYPE_ID = {
  STRENGTH: 'strength-stat-id',
  AGILITY: 'agility-stat-id',
  WISDOM: 'wisdom-stat-id',
  CHARISMA: 'charisma-stat-id',
  MAGIC: 'magic-stat-id',
}

const STAT_NAME = {
  [STAT_TYPE_ID.STRENGTH]: 'strength',
  [STAT_TYPE_ID.AGILITY]: 'agility',
  [STAT_TYPE_ID.WISDOM]: 'wisdom',
  [STAT_TYPE_ID.CHARISMA]: 'charisma',
  [STAT_TYPE_ID.MAGIC]: 'magic',
}
/**
 * @param {string} typeId - id of stat
 * @returns {string}
 */
export function getStatName(typeId) {
  return STAT_NAME[typeId];
}
