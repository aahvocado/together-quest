import uuid from 'uuid/v4';

import store from 'data';
import { addCampaign, addSessionCampaign, updateSessionCampaign } from 'data/actions';

import dynamoDB from 'services/dynamoDB';

const tableName = 'together-quest-campaigns';
const primaryKey = 'campaignId';

const createCampaign = async (data) => {
  const { title } = data;
  const newId = uuid();

  const item = {
    [primaryKey]: newId,
    title: title,
    players: [],
    modules: [],
  };

  const params = {
    TableName: tableName,
    Key: { [primaryKey]: newId },
    Item: item,
  };

  await dynamoDB.put(params);

  // update app state
  store.dispatch(addCampaign(newId));
  store.dispatch(addSessionCampaign(item));

  // since `PUT` returns nothing we'll manually return the item
  return item;
};

const fetchCampaign = async (id) => {
  const params = {
    TableName: tableName,
    Key: { [primaryKey]: id },
  };

  const response = await dynamoDB.get(params);
  return response.Item;
};

const fetchSessionCampaigns = async () => {
  const campaignsIdList = store.getState().user.campaigns;

  // no campaigns
  if (!campaignsIdList) return [];

  const fetchedCampaigns = await Promise.all(campaignsIdList.map(async (campaignId) => {
    const fetchedCampaign = await fetchCampaign(campaignId);
    return fetchedCampaign;
  }));

  store.dispatch(updateSessionCampaign(fetchedCampaigns));
  return fetchedCampaigns;
};

/**
* gets the currently fetched session campaigns
*/
const getSessionCampaigns = () => store.getState().sessionCampaigns;

// export
const userApi = {
  createCampaign,
  fetchCampaign,
  fetchSessionCampaigns,
  getSessionCampaigns,
};

export default userApi;
