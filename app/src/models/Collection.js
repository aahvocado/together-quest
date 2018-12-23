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
   * @return {function}
   */
  map(...args) {
    return this.models.map(...args);
  }
  // /**
  //  * @return {number}
  //  */
  // length() {
  //   return this.models.length;
  // }
  /**
   * @return {number}
   */
  get length() {
    return this.models.length;
  }
}

export default Collection;
