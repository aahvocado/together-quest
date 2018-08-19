import { combineReducers } from 'redux';

const userSchema = {
  userId: undefined,
  username: undefined,
  settings: {},
  email: undefined,
  password: null, // how to do this?
  campaigns: [],
  characters: [],
  // modules: [],
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
  return Object.assign({}, state.user, data);
};

// combined
const userData = {
  constants: constants,
  actions: {
    updateCredentials,
  },
  defaultState: Object.assign({}, userSchema, {

  }),
  reducer: combineReducers({
    userId: userCredentialsReducer,
    username: userCredentialsReducer,
    email: userCredentialsReducer,
  }),
};

export default userData;

export {
  userSchema,
}
