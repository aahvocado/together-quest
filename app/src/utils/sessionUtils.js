import _ from 'lodash';

import store from 'data';

/**
 * is the user logged in?
 *
 * @returns {Boolean}
 */
export function isLoggedIn() {
  return _.get(store.getState(), 'user.username', false);
}

