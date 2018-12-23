import uuid from 'uuid/v4';

/**
 * wrapper for array of models
 *
 * @typedef {object} Collection
 */
export class Collection {
  /**
   * @param {array<Model>}
   */
  constructor(defaultModels) {
    /** @type {Array<Model>} */
    this.models = defaultModels || [];
    /** @type {string} */
    this.id = uuid();
  }
  /**
   * @type {*} args - Array.forEach params
   * @return {function}
   */
  forEach(...args) {
    return this.models.forEach(...args);
  }
  /**
   * @type {*} args - Array.map params
   * @return {function}
   */
  map(...args) {
    return this.models.map(...args);
  }
  /**
   * @return {number}
   */
  get length() {
    return this.models.length;
  }
}

export default Collection;
