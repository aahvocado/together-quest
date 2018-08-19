import { bindActionCreators } from 'redux'
import store from 'data';

import userData from 'data/userData';
import appData from 'data/appData';

const {
  updateUrl,
} = appData.actions;

const {
  updateCredentials,
} = userData.actions;

export {
  updateUrl,
  updateCredentials,
}
