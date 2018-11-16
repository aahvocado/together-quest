import navigationData from 'data/navigationData';
import sessionData from 'data/sessionData';
import userData from 'data/userData';

// user
const {
  addCampaign,
  addCharacter,
  updateCredentials,
} = userData.actions;

// session
const {
  addSessionCampaign,
  updateSessionCampaign,
} = sessionData.actions;

// navigation
const {
  updateUrl,
} = navigationData.actions;

export {
  // user
  addCharacter,
  addCampaign,
  updateCredentials,

  //session
  addSessionCampaign,
  updateSessionCampaign,

  //navigation
  updateUrl,
}
