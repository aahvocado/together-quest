import { createStore, combineReducers } from 'redux';

// default state
const state_default = {
  url: '',
};

// constants (actions)
const CHANGE_URL = 'CHANGE_URL';

// actions
function changeUrl(url) {
  return {
    type: CHANGE_URL,
    url: url,
  }
};

// reducer
function changeUrlReducer(state = {}, action) {
  return action.url || '/';
};

// collections
const constants = {
  CHANGE_URL,
};
const actions = {
  changeUrl,
};
const reducers = combineReducers({
  url: changeUrlReducer,
});

// create store
const AppStore = createStore(reducers, state_default);

// test
AppStore.subscribe(() => {
  console.log(AppStore.getState());
});

// export
export default AppStore;

export {
  state_default,
  constants,
  actions,
  reducers,
};
