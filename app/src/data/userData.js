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
  REMOVE_CAMPAIGN: 'REMOVE_CAMPAIGN',
  UPDATE_USER: 'UPDATE_USER',
};

// actions
const updateCredentials = (data) => ({ type: constants.UPDATE_USER, data: data });
const updateCampaigns = (data) => ({ type: constants.ADD_CAMPAIGN, data: data });

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
    updateCampaigns,
    updateCredentials,
  },
  defaultState: Object.assign({}, userSchema, {

  }),
  reducer: {
    user: userReducer,
  },
};

export default userData;

export {
  userSchema,
}
