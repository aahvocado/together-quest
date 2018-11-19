// import { combineReducers } from 'redux';
import store from 'data';

// session data is the cache for the current session
//  so anything that has to be fetched every time instead of being saved locally
const sessionSchema = {
  sessionCampaigns: [],
  // sessionCharacters: [],
  otherUsers: [],
};

// constants
const constants = {
  ADD_SESSION_CHARACTER: 'ADD_SESSION_CHARACTER',
  ADD_SESSION_CAMPAIGN: 'ADD_SESSION_CAMPAIGN',
  REMOVE_SESSION_CAMPAIGN: 'REMOVE_SESSION_CAMPAIGN',
  UPDATE_SESSION_CAMPAIGN: 'UPDATE_SESSION_CAMPAIGN',
  UPDATE_OTHER_USERS: 'UPDATE_OTHER_USERS',
};

// actions
// const addSessionCharacter = (data) => ({ type: constants.ADD_SESSION_CHARACTER, data: data });
const addSessionCampaign = (data) => ({ type: constants.ADD_SESSION_CAMPAIGN, data: data });
const updateSessionCampaign = (data) => ({ type: constants.UPDATE_SESSION_CAMPAIGN, data: data });
const updateOtherUsers = (data) => ({ type: constants.UPDATE_OTHER_USERS, data: data });

// reducers
// const sessionCharacterReducer = (state, { type, data }) => {
//   switch (type) {
//     // add to list
//     case constants.ADD_SESSION_CHARACTER:
//       const previousSessionCharacters = state.slice();
//       previousSessionCharacters.push(data);
//       return previousSessionCharacters;

//     default:
//       return state || [];
//   }
// };
function sessionCampaignReducer(state, { type, data }) {
  switch (type) {
    // replace current list with given list
    case constants.UPDATE_SESSION_CAMPAIGN:
      return data || [];

    // add to list
    case constants.ADD_SESSION_CAMPAIGN:
      const previousSessionCampaigns = state.slice();
      previousSessionCampaigns.push(data);
      return previousSessionCampaigns;

    case constants.REMOVE_SESSION_CAMPAIGN:
    default:
      return state || [];
  }
};
function otherUsersReducer(state = [], { type, data = {} }) {
  const { userId } = data;

  switch (type) {
    // replace map based on id I guess
    case constants.UPDATE_OTHER_USERS:
      // can't add if no id
      if (!userId) return state;

      // don't add if user is this one
      if (userId === store.state.user.userId) return state;

      // otherwise add em in
      const previousOtherUsers = state.slice();
      previousOtherUsers.push(data);
      return previousOtherUsers;

    default:
      return state || [];
  }
};

// combined
const sessionData = {
  constants: constants,
  actions: {
    addSessionCampaign,
    updateSessionCampaign,
    updateOtherUsers,
  },
  defaultState: {...sessionSchema},
  reducer: {
    sessionCampaigns: sessionCampaignReducer,
    // sessionCharacters: sessionCharacterReducer,
    otherUsers: otherUsersReducer,
  },
};

export default sessionData;

export {
  sessionSchema,
}
