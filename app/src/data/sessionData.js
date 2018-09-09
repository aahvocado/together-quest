// import { combineReducers } from 'redux';

// session data represents the cache for the current session, like fetched campaign data
// default schema
const schema = {
  sessionCampaigns: [],
};

// constants
const constants = {
  ADD_SESSION_CAMPAIGN: 'ADD_SESSION_CAMPAIGN',
  REMOVE_SESSION_CAMPAIGN: 'REMOVE_SESSION_CAMPAIGN',
};

// actions
const addSessionCampaign = (data) => ({
  type: constants.ADD_SESSION_CAMPAIGN,
  data: data,
});

// reducers
const sessionCampaignReducer = (state, { type, data }) => {
  switch (type) {
    case constants.ADD_SESSION_CAMPAIGN:
      const previousSessionCampaigns = state.slice();
      previousSessionCampaigns.push(data);
      return previousSessionCampaigns;

    case constants.REMOVE_SESSION_CAMPAIGN:
    default:
      return [];
  }
};

// combined
const sessionData = {
  constants: constants,
  actions: {
    addSessionCampaign,
  },
  defaultState: Object.assign(schema, {

  }),
  reducer: {
    sessionCampaigns: sessionCampaignReducer,
  },
};

export default sessionData;

export {
  schema,
}
