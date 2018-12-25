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
  // -- EXTEND MODELS WITH ARRAY FUNCTIONS
  /**
   * @type {*} args - Array.find params
   * @return {function}
   */
  find(...args) {
    return this.models.find(...args);
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
   * @type {*} args - Array.reduce params
   * @return {function}
   */
  reduce(...args) {
    return this.models.reduce(...args);
  }
  /**
   * @type {*} args - Array.push params
   * @return {function}
   */
  push(...args) {
    return this.models.push(...args);
  }
  /**
   * @return {number}
   */
  get length() {
    return this.models.length;
  }
}

export default Collection;
