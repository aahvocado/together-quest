import store from 'data';

import navigationData from 'data/navigationData';
import sessionData from 'data/sessionData';
import userData from 'data/userData';

/**
 * I'm trying to simplify the group of actions so you can easily import actions that update the Redux Store but it's tough to maintain
 *  we'll import actions described in each data module and export it as a store.dispatch
 *
 * @module {DataActions}
 */

// user
const {
  addCampaign: _addCampaign,
  addCharacter: _addCharacter,
  updateCredentials: _updateCredentials,
  updatePermissions: _updatePermissions,
} = userData.actions;

// session
const {
  addSessionCampaign: _addSessionCampaign,
  updateSessionCampaign: _updateSessionCampaign,
  resetOtherUsers: _resetOtherUsers,
  updateOtherUsers: _updateOtherUsers,
} = sessionData.actions;

// navigation
const {
  updateUrl: _updateUrl,
} = navigationData.actions;


/**
 * simply adding store.dispatch() to a given action
 *
 * @param {Function} action
 * @returns {Function}
 */
function attachDispatch(action) {
  return (...args) => { store.dispatch(action(...args)) }
}

// user
export const addCampaign = attachDispatch(_addCampaign);
export const addCharacter = attachDispatch(_addCharacter);
export const updateCredentials = attachDispatch(_updateCredentials);
export const updatePermissions = attachDispatch(_updatePermissions);

// session
export const addSessionCampaign = attachDispatch(_addSessionCampaign);
export const updateSessionCampaign = attachDispatch(_updateSessionCampaign);
export const resetOtherUsers = attachDispatch(_resetOtherUsers);
export const updateOtherUsers = attachDispatch(_updateOtherUsers);

// navigation
export const updateUrl = attachDispatch(_updateUrl);
