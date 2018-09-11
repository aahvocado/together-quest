import navigationData from 'data/navigationData';
import sessionData from 'data/sessionData';
import userData from 'data/userData';

const {
  updateCampaigns,
  updateCredentials,
} = userData.actions;

const {
  addSessionCampaign,
} = sessionData.actions;

const {
  updateUrl,
} = navigationData.actions;

export {
  addSessionCampaign,
  updateCampaigns,
  updateCredentials,
  updateUrl,
}
