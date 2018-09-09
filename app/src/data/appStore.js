import { createStore, combineReducers } from 'redux';

import actions from 'data/actions';
import navigationData from 'data/navigationData';
import sessionData from 'data/sessionData';
import userData from 'data/userData';

/**
* This file puts together all the reducers and creates the final store.
*/
const reducers = combineReducers(Object.assign({},
  navigationData.reducer,
  sessionData.reducer,
  userData.reducer,
));

// create store
const store = createStore(reducers);

// listen to changes
store.subscribe(() => {
  console.log('together-quest store', store.getState());
});

export default store;

export {
  actions,
  store,
}
