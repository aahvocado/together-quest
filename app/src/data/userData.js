// import { combineReducers } from 'redux';
import uuid from 'uuid/v4';
import {
  BLINKS,
  NOOK,
  PEARL,
  DOUGLAS,
} from 'apis/catquest/catquestCharactersApi';

const userSchema = {
  user: {
    userId: uuid(),
    username: undefined,
    settings: {},
    email: undefined,
    password: null, // how to do this?
    campaigns: [],
    characters: [BLINKS, NOOK, PEARL, DOUGLAS],
    // modules: [],
  },
  permissions: [],
};

// constants
const constants = {
  ADD_CAMPAIGN: 'ADD_CAMPAIGN',
  ADD_CHARACTER: 'ADD_CHARACTER',
  REMOVE_CAMPAIGN: 'REMOVE_CAMPAIGN',
  UPDATE_USER: 'UPDATE_USER',
  //
  UPDATE_PERMISSIONS: 'UPDATE_PERMISSIONS',
};

// actions
const addCampaign = (data) => ({ type: constants.ADD_CAMPAIGN, data: data });
const addCharacter = (data) => ({ type: constants.ADD_CHARACTER, data: data })
const updateCredentials = (data) => ({ type: constants.UPDATE_USER, data: data });
const updatePermissions = (data) => ({ type: constants.UPDATE_PERMISSIONS, data: data });

// reducers
function userReducer(state, { type, data }) {
  switch (type) {
    // adds to the the campaign id list
    case constants.ADD_CAMPAIGN:
      const campaignList = state.campaigns || userSchema.user.campaigns;
      campaignList.push(data);

      return Object.assign({}, state, {
        campaigns: campaignList,
      });

    // add to the the characters list
    case constants.ADD_CHARACTER:
      const characterList = state.characters || userSchema.user.characters;
      characterList.push(data);

      return Object.assign({}, state, {
        characters: characterList,
      });

    // update will replace any attributes
    case constants.UPDATE_USER:
      return {
        ...state,
        ...data,
      };

    default:
      return state || userSchema.user;
  }
};
function permissionsReducer(state, { type, data }) {
  switch (type) {
    // adds to the the campaign id list
    case constants.UPDATE_PERMISSIONS:
      const permissionsList = state || userSchema.permissions;
      permissionsList.push(data);
      return permissionsList;

    default:
      return state || userSchema.permissions;
  }
};

// combined
const userData = {
  constants: constants,
  actions: {
    addCampaign,
    addCharacter,
    updateCredentials,
    updatePermissions,
  },
  defaultState: {...userSchema},
  reducer: {
    user: userReducer,
    permissions: permissionsReducer,
  },
};

export default userData;

export {
  userSchema,
}
