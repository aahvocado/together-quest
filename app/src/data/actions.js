import navigationData from 'data/navigationData';
import sessionData from 'data/sessionData';
import userData from 'data/userData';

const {
  addCampaign,
  updateCredentials,
} = userData.actions;

const {
  addSessionCampaign,
  updateSessionCampaign,
} = sessionData.actions;

const {
  updateUrl,
} = navigationData.actions;

export {
  addSessionCampaign,
  addCampaign,
  updateCredentials,
  updateSessionCampaign,
  updateUrl,
}
