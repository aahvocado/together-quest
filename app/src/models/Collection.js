import uuid from 'uuid/v4';

/**
 * array of models
 *
 * @typedef {object} Collection
 */
export class Collection {
  constructor(config = {}) {
    /** @type {Array<Model>} */
    this.models = config.models || [];
    /** @type {string} */
    this.id = uuid();
  }
  /**
   * interprets it as mapping around the list of models
   *
   * @type {*} args - Array.map params
   */
  map(...args) {
    return this.models.map(...args);
  }
}

export default Collection;
