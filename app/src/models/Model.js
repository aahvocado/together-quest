import uuid from 'uuid/v4';

/**
 * Model base class
 *
 * @typedef {object} Model
 */
export class Model {
  constructor() {
    /** @type {string} */
    this.id = uuid();
  }
  /**
   * gets a specific attribute
   *
   * @param {string} attributeName
   * @returns {* | undefined} - returns given attribute
   */
  get(attributeName) {
    return this.attributes[attributeName]
  }
  /**
   * assigns and updates these attributes
   *
   * @param {object} changes
   * @returns {object} - returns all attributes
   */
  set(changes) {
    this.attributes = Object.assign({}, this.attributes, changes);
    return this.attributes;
  }
  /**
   * makes sure attributes match the schema
   *
   * @returns {boolean}
   */
  validate() {
    const valid = this.schema(this.attributes);

    if (!valid) {
      console.error(this.constructor.name, this.schema.errors(this.attributes));
    }

    return valid;
  }
}

export default Model;
