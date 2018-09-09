import { createStore, combineReducers } from 'redux';

import actions from 'data/actions';
import navigationData from 'data/navigationData';
import sessionData from 'data/sessionData';
import userData from 'data/userData';

/**
* This file just gathers all the Data and Actions
*/

const defaultState = Object.assign({},
  navigationData.defaultState,
  sessionData.defaultState,
  userData.defaultState,
);

const reducers = combineReducers(Object.assign({},
  navigationData.reducer,
  sessionData.reducer,
  userData.reducer,
));

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
