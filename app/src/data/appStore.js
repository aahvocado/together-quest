import { createStore, combineReducers } from 'redux';

import actions from 'data/actions';
import userData from 'data/userData';
import navigationData from 'data/navigationData';

/**
* This file just gathers all the Data and Actions
*/

const defaultState = Object.assign({},
  navigationData.defaultState,
  userData.defaultState,
);

const reducers = combineReducers(Object.assign({},
  navigationData.reducer,
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
