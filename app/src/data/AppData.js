import { combineReducers } from 'redux';

const currentPath = window.location.pathname;

const appSchema = {
  url: '',
};

// constants
const constants = {
  UPDATE_URL: 'UPDATE_URL',
};

// actions
const updateUrl = (data) => ({
  type: constants.UPDATE_URL,
  data: data,
});

// reducers
const updateUrlReducer = (state = {}, { type, data }) => {
  return data || '/';
};

// combined
const appData = {
  constants: constants,
  actions: {
    updateUrl,
  },
  defaultState: Object.assign({}, appSchema, {
    url: currentPath,
  }),
  reducer: combineReducers({
    url: updateUrlReducer,
  }),
};

export default appData;

export {
  appSchema,
}
