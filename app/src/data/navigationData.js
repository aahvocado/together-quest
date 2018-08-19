import { combineReducers } from 'redux';

const currentPath = window.location.pathname;

const navigationSchema = {
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
  switch (type) {
    case constants.UPDATE_URL:
      return data || '/';

    default:
      return state;
  };
};

// combined
const navigationData = {
  constants: constants,
  actions: {
    updateUrl,
  },
  defaultState: Object.assign({}, navigationSchema, {
    url: currentPath,
  }),
  reducer: {
    url: updateUrlReducer,
  },
};

export default navigationData;

export {
  navigationSchema,
}
