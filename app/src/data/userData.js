// import { combineReducers } from 'redux';

const userSchema = {
  user: {
    userId: undefined,
    username: undefined,
    settings: {},
    email: undefined,
    password: null, // how to do this?
    campaigns: [],
    characters: [],
    // modules: [],
  }
};

// constants
const constants = {
  ADD_CAMPAIGN: 'ADD_CAMPAIGN',
  ADD_CHARACTER: 'ADD_CHARACTER',
  REMOVE_CAMPAIGN: 'REMOVE_CAMPAIGN',
  UPDATE_USER: 'UPDATE_USER',
};

// actions
const addCampaign = (data) => ({ type: constants.ADD_CAMPAIGN, data: data });
const addCharacter = (data) => ({ type: constants.ADD_CHARACTER, data: data })
const updateCredentials = (data) => ({ type: constants.UPDATE_USER, data: data });

// reducers
const userReducer = (state = {}, { type, data }) => {
  switch (type) {
    // adds to the the campaign id list
    case constants.ADD_CAMPAIGN:
      const campaignList = state.campaigns || [];
      campaignList.push(data);

      return Object.assign({}, state, {
        campaigns: campaignList,
      });

    // add to the the characters list
    case constants.ADD_CHARACTER:
      const characterList = state.characters || [];
      characterList.push(data);

      return Object.assign({}, state, {
        characters: characterList,
      });

    // update will replace any attributes
    case constants.UPDATE_USER:
      return Object.assign({}, state, data || {});

    default:
      return state;
  }
};

// combined
const userData = {
  constants: constants,
  actions: {
    addCampaign,
    addCharacter,
    updateCredentials,
  },
  defaultState: {...userSchema},
  reducer: {
    user: userReducer,
  },
};

export default userData;

export {
  userSchema,
}
