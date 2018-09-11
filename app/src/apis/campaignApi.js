import uuid from 'uuid/v4';

import store from 'data';
import { updateCampaigns, addSessionCampaign } from 'data/actions';

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
  store.dispatch(updateCampaigns(newId));
  store.dispatch(addSessionCampaign(item));

  // since `PUT` returns nothing we'll manually return the item
  return item;
};

const fetchCampaign = async (id) => {
  const params = {
    TableName: tableName,
    Key: { [primaryKey]: id },
  };

  return dynamoDB.get(params);
};

const fetchSessionCampaigns = async () => {
  // const sessionCampaigns = getSessionCampaigns();
  const campaignIdList = store.getState().user.campaigns;

  // no campaigns
  if (!campaignIdList) return [];

  const fetchedCampaigns = await Promise.resolve(campaignIdList.map(async (campaignId) => {
    const fetchedCampaign = await fetchCampaign(campaignId);

    store.dispatch(fetchedCampaign);
    return fetchedCampaign;
  }));

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
