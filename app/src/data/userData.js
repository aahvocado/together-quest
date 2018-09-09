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
  UPDATE_CAMPAIGNS: 'UPDATE_CAMPAIGNS',
  UPDATE_CHARACTERS: 'UPDATE_CHARACTERS',
  UPDATE_CREDENTIALS: 'UPDATE_CREDENTIALS',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
};

// actions
const updateCredentials = (data) => ({
  type: constants.UPDATE_CREDENTIALS,
  data: data,
});

// reducers
const userCredentialsReducer = (state = {}, { type, data }) => {
  switch (type) {
    case constants.UPDATE_CREDENTIALS:
      return Object.assign({}, state, data || {});

    default:
      return state;
  }
};

// combined
const userData = {
  constants: constants,
  actions: {
    updateCredentials,
  },
  defaultState: Object.assign({}, userSchema, {

  }),
  reducer: {
    user: userCredentialsReducer,
  },
};

export default userData;

export {
  userSchema,
}
