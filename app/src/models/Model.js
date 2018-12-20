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
}

export default Model;
