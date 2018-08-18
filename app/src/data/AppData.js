import { createStore, combineReducers } from 'redux';
import { sampleCampaign } from 'data/CampaignData';

const currentPathname = window.location.pathname;

// default state
const state_default = {
  url: currentPathname,
  // user: {
    campaigns: [sampleCampaign],
  //   characters: [],
  // },
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
function addUserCampaign(campaign) {
  return {
    type: 'add',
    campaign: campaign,
  }
}
function removeUserCampaign(campaign) {
  return {
    type: 'remove',
    campaign: campaign,
  }
}

// reducers
function changeUrlReducer(state = {}, action) {
  return action.url || currentPathname;
};
function updateUserCampaignsReducer(state = {}, action) {
  const { type, campaign } = action;

  switch(type) {
    case 'add':
      const updatedCampaigns = state.user.campaigns || [];
      updatedCampaigns.push(campaign);
      return Object.assign({}, state.user.campaigns, updatedCampaigns);
    case 'remove':
      const oldCampaigns = state.user.campaigns || [];
      const findCampaignIndex = state.user.campaigns.findIndex((c) => {
        return c.id === campaign.id;
      });
      oldCampaigns.splice(findCampaignIndex, 1);
      return Object.assign({}, state.user.campaigns, oldCampaigns);
    default:
      return state;

  }
};

// collections
const constants = {
  CHANGE_URL,
};
const actions = {
  changeUrl,
  addUserCampaign,
  removeUserCampaign,
};
const reducers = combineReducers({
  url: changeUrlReducer,
  campaigns: updateUserCampaignsReducer,
});

// create store
const AppData = createStore(reducers, state_default);

// test
AppData.subscribe(() => {
  console.log(AppData.getState());
});

// export
export default AppData;

export {
  state_default,
  constants,
  actions,
  reducers,
};
