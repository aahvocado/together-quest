import { createStore, combineReducers } from 'redux';

import actions from 'data/actions';
import userData from 'data/userData';
import appData from 'data/appData';

/**
* This file just gathers all the Data and Actions
*/

const defaultState = {
  url: userData.defaultState,
  user: userData.defaultState,
};

const reducers = combineReducers({
  url: appData.reducer,
  user: userData.reducer,
});

// create store
const store = createStore(reducers);

// test
store.subscribe(() => {
  console.log('together-quest store', store.getState());
});

export default store;

export {
  actions,
  store,
}
