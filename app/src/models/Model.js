import uuid from 'uuid/v4';

/**
 * Model base class
 *
 * @typedef {object} Model
 */
export class Model {
  constructor(config = {}) {
    /** @type {string} */
    this.id = uuid();
  }
  /**
   * makes sure attributes match the schema
   *
   * @returns {boolean}
   */
  validate() {
    const valid = this.schema(this.attributes);

    if (!valid) {
      console.error(this.schema.errors(this.attributes));
    }

    return valid;
  }
}

export default Model;
