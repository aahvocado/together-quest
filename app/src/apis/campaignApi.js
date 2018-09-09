import uuid from 'uuid/v4';

import store from 'data';
import { updateCredentials } from 'data/actions';

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
  store.dispatch(updateCredentials(item));

  // since `PUT` returns nothing we'll manually return the item
  return item;
}

const fetchCampaign = async (id) => {
  const params = {
    TableName: tableName,
    Key: { [primaryKey]: id },
  };

  return dynamoDB.get(params);
}

// export
const userApi = {
  createCampaign,
  fetchCampaign,
};

export default userApi;
